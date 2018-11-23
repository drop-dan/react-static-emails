const AWS = require('aws-sdk')
const path = require('path')
const fs = require('fs')

require('dotenv').load()

const email = process.argv[2]
const accessKeyId = process.env.ACCESS_KEY_ID
const secretAccessKey = process.env.SECRET_ACCESS_KEY

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

AWS.config.update({
  accessKeyId,
  secretAccessKey,
})

walk(path.resolve(__dirname, `../../emails/${email}/assets`)).then(files => {
  files.forEach(filePath => {
    fs.readFile(filePath, (err, data) => {
      const base64data = Buffer.from(data, 'binary')

      const filePathArray = filePath.split('/')
      const fileName = filePathArray[filePathArray.length - 1]

      const s3 = new AWS.S3()
      s3.putObject(
        {
          Bucket: 'drop-web-font',
          Key: `${email}/${fileName}`,
          Body: base64data,
          ACL: 'public-read',
        },
        () => {
          console.log('Successfully uploaded', `${email}/${fileName}`)
        }
      )
    })
  })
})
