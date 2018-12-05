const path = require('path')
const fs = require('fs')
const imagemin = require('imagemin')
const optipng = require('imagemin-optipng')
const jpegoptim = require('imagemin-jpegoptim')
const gifsicle = require('imagemin-gifsicle')
const { walk, resize, uploadImageFromFile } = require('./uploadUtils')
const AWS = require('aws-sdk')
const s3 = new AWS.S3()

const accessKeyId = process.env.ACCESS_KEY_ID
const secretAccessKey = process.env.SECRET_ACCESS_KEY

AWS.config.update({
  accessKeyId,
  secretAccessKey,
})

require('dotenv').load()

const email = process.argv[2]
const assetsPathString = `../../emails/${email}/assets`
const assetsPath = path.resolve(__dirname, assetsPathString)

const uploadAssets = async () => {
  await imagemin([`${assetsPath}/*.gif`], `${assetsPath}/`, {
    plugins: [
      resize({ width: 600, options: '>' }),
      gifsicle({ optimizationLevel: 3, interlaced: true, colors: 256 }),
    ],
  })

  console.log('Minified gifs')

  imagemin([`${assetsPath}/*.{jpg,png}`], `${assetsPath}/`, {
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

    if (fileName === '.DS_Store') {
      return
    }

    s3.putObject(
      {
        Bucket: 'drop-web-font',
        ACL: 'public-read',
        Key: `${email}/${fileName}`,
        Body: Buffer.from(data, 'binary'),
      },
      () => console.log('Successfully uploaded', `${email}/${fileName}`)
    )
  }))
}

uploadAssets()
