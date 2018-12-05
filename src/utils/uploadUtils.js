const fs = require('fs')
const path = require('path')
const imageMagick = require('gm')

const resize = ({ width, height, options }) => buffer => {
  if (!Buffer.isBuffer(buffer)) {
    return Promise.reject(new TypeError('Expected a buffer'))
  }

  const image = imageMagick(buffer).resize(width, height, options)

  return new Promise((resolve, reject) =>
    image.toBuffer((err, buffer) => (err ? reject(err) : resolve(buffer)))
  )
}

const walk = dir =>
  new Promise((resolve, reject) => {
    fs.readdir(dir, (error, files) => {
      if (error) {
        return reject(error)
      }
      Promise.all(
        files.map(
          file =>
            new Promise((resolve, reject) => {
              const filepath = path.join(dir, file)
              fs.stat(filepath, (error, stats) => {
                if (error) {
                  return reject(error)
                }
                if (stats.isDirectory()) {
                  walk(filepath).then(resolve)
                } else if (stats.isFile()) {
                  resolve(filepath)
                }
              })
            })
        )
      ).then(foldersContents => {
        resolve(foldersContents.reduce((all, folderContents) => all.concat(folderContents), []))
      })
    })
  })

exports.resize = resize
exports.walk = walk
