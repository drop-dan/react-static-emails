import fs from 'fs'
import path from 'path'

const email = process.argv[2] || 'default'

const noop = () => {}

function walk (dir) {
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

async function cleanDistFolder () {
  const files = await walk(path.resolve(__dirname, `../../emails/${email}/html`))
  files.forEach(file => {
    if (!file.match(/index\.html|email\.js/)) {
      fs.unlink(file, noop)
    }
  })
  fs.rmdir(path.resolve(__dirname, `../../emails/${email}/html/404`), noop)
  fs.rmdir(path.resolve(__dirname, '../../public'), noop)
}

export default cleanDistFolder
