import React from 'react'

const getEmailComponent = () => {
  let emailKey = process.argv[2] || 'default'
  let filename = process.argv[3] || 'email'

  if (process.title === 'browser') {
    const emailKeyMetaTag = document.getElementsByTagName('meta')[3]
    const filenameMetaTag = document.getElementsByTagName('meta')[4]

    if (emailKeyMetaTag) {
      emailKey = emailKeyMetaTag.getAttribute('content')
    }

    if (filenameMetaTag) {
      filename = filenameMetaTag.getAttribute('content')
    }
  }

  const emails = {}
  const context = require.context('../../emails', true, /\.js$/)
  context.keys().forEach(key => {
    console.log(key.replace('./', '').replace(`/${filename}.js`, ''))
    emails[key.replace('./', '').replace(`/${filename}.js`, '')] = context(key).default
  })

  const EmailComponent = emails[emailKey] || emails.default

  return () => <EmailComponent />
}
export default getEmailComponent
