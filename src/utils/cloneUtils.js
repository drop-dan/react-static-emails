import React from 'react'
import Offer from '../components/Offer'
import { DefaultTemplate } from '../components'

const COMPONENTS = {
  offer: Offer,
  defaulttemplate: DefaultTemplate
}

export const cloneElement = (element, props, index) => {
  const mergedProps = Object.assign({}, element.props, props)
  const Component = COMPONENTS[element.type]

  if (Component) {
    return <Component key={`${element.type}-${index}`} {...mergedProps} />
  }

  return React.cloneElement(element, mergedProps)
}

export const recursiveCloneChildren = children =>
  React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) return child

    const childProps = { ...child.props }
    childProps.children = recursiveCloneChildren(child.props.children)

    return cloneElement(child, childProps, index)
  })

export const updateEmailNode = value => {
  const node = window.jsx(`function() { return(${value}) }`)
  let element = typeof node === 'function' ? node() : node

  if (element.props.children) {
    const children = recursiveCloneChildren(element.props.children)
    element = cloneElement(element, { children }, 0)
  }

  return element
}
