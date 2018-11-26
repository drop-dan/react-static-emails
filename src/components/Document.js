import React from 'react'

const getFontString = (face = 'Sailec', weight = 'normal') =>
  `@font-face{font-family:Sailec;src:url(https://s3.amazonaws.com/drop-web-font/${face}.otf);font-weight:${weight};}`

const fontString = ['Sailec_normal', 'Sailec-Medium_500', 'Sailec-Bold_bold'].map(string =>
  getFontString(...string.split('_'))
)

const Document = ({ children, siteData }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="x-apple-disable-message-reformatting" />
      <meta name="email-name" content={siteData.email} />
      <meta name="filename" content={siteData.filename} />
      <style>{fontString}</style>
    </head>
    <body
      style={{
        height: '100% !important',
        width: '100% !important',
        margin: '0 !important',
        padding: '0 !important',
        backgroundColor: '#efefef',
      }}
    >
      {children}
    </body>
  </html>
)

export default Document
