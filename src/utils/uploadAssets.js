const path = require('path')
const fs = require('fs')
const imagemin = require('imagemin')
const optipng = require('imagemin-optipng')
const jpegoptim = require('imagemin-jpegoptim')
const { walk, resize } = require('./uploadUtils')
const AWS = require('aws-sdk')

require('dotenv').load()

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
})
const s3 = new AWS.S3()

const email = process.argv[2]
const fileNameToUpload = process.argv[3]
const assetsPathString = `../../emails/${email}/assets`
const assetsPath = path.resolve(__dirname, assetsPathString)

const uploadAssets = async () => {
  await imagemin([`${assetsPath}/*.{jpg,png}`], `${assetsPath}/`, {
    plugins: [
      resize({ width: email === 'logos' ? 200 : 1200, options: '>' }),
      jpegoptim(),
      optipng(),
    ],
  })

  console.log('Minified jpgs and pngs')

  const assetFiles = await walk(path.resolve(__dirname, assetsPath))
  assetFiles.forEach(path => fs.readFile(path, (err, data) => {
    const filePathArray = path.split('/')
    const fileName = filePathArray[filePathArray.length - 1]

    if (fileName === '.DS_Store' || (fileNameToUpload && fileNameToUpload !== fileName)) {
      return
    }
    
    console.log('Uploading', fileName, '...')

    s3.putObject(
      {
        Bucket: 'drop-web-font',
        ACL: 'public-read',
        Key: `${email}/${fileName}`,
        Body: Buffer.from(data, 'binary'),
      },
      (err, data) => {
        if (err) {
          console.log('An error occured uploading', fileName, ':\n', JSON.stringify(err), '\n\n')
        } else {
          console.log('Successfully uploaded', fileName)
        }
      }
    )
  }))
}

uploadAssets()
