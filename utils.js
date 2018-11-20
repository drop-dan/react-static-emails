import fs from 'fs'
import path from 'path'

export const noop = () => {}

export function walk (dir) {
  return new Promise((resolve, reject) => {
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
}
