const isCode = value => {
  if (value.includes('(') && value[value.length - 1] === ')') return true
  if (value[value.length - 1] === '{') return true
  if (value.lastIndexOf('=>') === value.length - 2) return true
  return false
}

const isFunction = value =>
  value.match(/\(*function.*\(.*\)/) || value.match(/(\((?:\w+,)*\w+\)|\(\)|\w+)[\r\t ]*=>\s*/)

const replaceAll = (string, regExp, replacement) => {
  const newstr = string.replace(regExp, replacement)
  if (newstr === string) return string
  return replaceAll(newstr, regExp, replacement)
}

const resolve = (string, __jsx__, context = {}) =>
  Function(
    '__global__',
    '__jsx__',
    'context',
    `with(__global__) { with(context) { return \`${string}\`; }}`
  )(this, __jsx__, context)

const transformAttributes = string =>
  replaceAll(
    replaceAll(string, /(<.*?)=(\{.*?\})(.*?>)/g, '$1="$$$2"$3'),
    /(<.*?)=(\$\{.*?\})(.*?>)/g,
    '$1="$2"$3'
  )

const JSXTranspileNode = (node, options = {}, parent, txt = '') => {
  const children = [].slice.call(node.childNodes)
  let incode = 0
  children.forEach((child, index, array) => {
    if (child instanceof Text) {
      const value = child.textContent.trim()
      if (
        (value[0] === '{' || (value[0] === '$' && value[1] === '{')) &&
        value[value.length - 1] === '}'
      ) {
        txt += resolve(
          '${__jsx__.value.substring(__jsx__.value[0]==="$" ? 2 : 1,__jsx__.value.length-1)}${__jsx__.incode ? "" : ","}',
          { value, incode },
          options.ctx
        )
      } else if (
        isCode(value) ||
        (array.length > 2 && (value[value.length - 1] === '(' || incode))
      ) {
        if (value[value.length - 1] === ')') incode--
        else incode++
        txt += resolve(
          '${__jsx__.child.textContent}${__jsx__.incode ? "" : ","}',
          { child, incode },
          options.ctx
        )
      } else if (value.length > 0) {
        txt += `"${resolve(
          '${__jsx__.child.textContent.replace(/\\n/g,"")}',
          { child },
          options.ctx
        )}"${resolve('${__jsx__.incode ? "" : ","}', { incode }, options.ctx)}`
      }
    } else {
      const attributes = [].slice.call(child.attributes).reduce((txt, attribute, index, array) => {
        let aname = attribute.name
        const value = attribute.value.trim()
        if (options.env === 'React' && aname[0] === 'o' && aname[1] === 'n') {
          aname = `on${aname[2].toUpperCase()}${aname.substring(3)}`
        }
        txt += `"${aname}":`
        if (
          (value[0] === '{' || (value[0] === '$' && value[1] === '{')) &&
          value[value.length - 1] === '}'
        ) {
          txt += value.substring(value[0] === '$' ? 2 : 1, value.length - 1)
        } else if (
          aname[0] === 'o' &&
          aname[1] === 'n' &&
          !value.includes('${') &&
          isFunction(value)
        ) {
          txt += value
        } else {
          txt += `\`${value}\``
        }
        if (index < array.length - 1) txt += ','
        return txt
      }, '')
      let cnodes = JSXTranspileNode(child, options, node)

      if (cnodes[cnodes.length - 1] === ',') cnodes = cnodes.substring(0, cnodes.length - 1)
      txt += resolve(
        '${__jsx__.options.env ? __jsx__.options.env+".h" : "h"}("${__jsx__.child.tagName.toLowerCase()}",{${__jsx__.attributes}},[].concat(${__jsx__.cnodes}))${__jsx__.incode ? "" : ","}',
        {
          child,
          incode,
          options,
          attributes,
          cnodes,
        },
        options.ctx
      )
    }
  })
  if (txt[txt.length - 1] === ',') return txt.substring(0, txt.length - 1)
  return txt
}

const JSXTranspile = (string, options = {}) => {
  string = transformAttributes(string)
  const el = new DOMParser().parseFromString(string, 'text/html')
  el.normalize()
  return JSXTranspileNode(el.body, options)
}

const H = (nodeName, attributes = {}, ...children) => {
  const vnode = { nodeName, attributes }
  if (children.length === 1) {
    if (Array.isArray(children[0])) children = children[0]
    else children = [children[0]]
  }
  vnode.children = children
  return vnode
}
let h = H,
  env = 'jsx'

if (typeof React !== 'undefined') {
  env = 'React'
  React.h = React.createElement
} else if (typeof preact !== 'undefined') {
  env = 'preact'
} else if (typeof hyperapp !== 'undefined') {
  env = 'hyperapp'
}
const jsx = (string, options = {}) => {
  options = Object.assign({}, options)
  if (!options.env) options.env = env
  if (!options.h) options.h = Function(`return ${options.env}.h`)()
  return Function(`return ${JSXTranspile(string, options)}`)()
}
jsx.compile = (options, ...scripts) => {
  const type = typeof options
  if (type === 'string' || (options && type === 'object' && options instanceof HTMLElement)) {
    scripts.unshift(options)
    options = {}
  } else {
    options = Object.assign({}, options)
  }
  if (!options.env) options.env = env
  if (!options.h) options.h = options.env ? Function(`return ${options.env}.h`)() : H
  if (scripts.length === 1 && typeof scripts[0] === 'string') {
    const script = JSXTranspile(scripts[0], options)
    return Function(`return ${script}`)()
  }
  if (typeof document === 'undefined') document = options.document
  if (scripts.length === 0) scripts = document.querySelectorAll("[type='text/jsx']")
  scripts.forEach(el => {
    const script = JSXTranspile(el.innerHTML, options),
      node = document.createElement('script')
    for (const attr of [].slice.call(el.attributes)) {
      node.setAttribute(attr.name, el.attributes[attr.name])
    }
    node.type = 'text/javascript'
    node.innerHTML = script
    el.parentElement.replaceChild(node, el)
  })
}
jsx.h = H
jsx.isFunction = isFunction
if (typeof module !== 'undefined') module.exports = jsx
if (typeof window !== 'undefined') {
  window.jsx || (window.jsx = jsx)
  window.jsxdirect = jsx
}
