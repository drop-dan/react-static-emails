import React from 'react'

const getEmailComponent = () => {
  const emails = {}
  const context = require.context('../../emails', true, /\.js$/)
  context.keys().forEach(key => {
    emails[key.replace('./', '').replace('/email.js', '')] = context(key).default
  })

  let emailKey = process.argv[2] || 'default'

  if (process.title === 'browser') {
    const metaTag = document.getElementsByTagName('meta')[3]
    if (metaTag) {
      emailKey = metaTag.getAttribute('content')
    }
  }

  const EmailComponent = emails[emailKey] || emails.default
  return () => <EmailComponent />
}
export default getEmailComponent
