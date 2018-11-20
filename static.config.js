import React from 'react'
import flush from 'styled-jsx/server'
import inlineCss from 'inline-css'
import fs from 'fs'
import { noop, walk } from './utils'

export default {
  siteRoot: 'https://www.earnwithdrop.com',
  getSiteData: () => ({ title: 'Drop Emails' }),
  webpack: (config) => {
    config.devtool = false
    config.plugins = config.plugins.slice(0, 2)
    return config
  },
  renderToHtml: async (render, Component, meta) => {
    const html = render(<Component />)
    const styles = flush()
    meta.styleTags = styles
    let final
    await inlineCss(html, { url: 'http' }).then(html => {
      final = html
    })
    return final
  },
  Document: ({ children }) => (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="x-apple-disable-message-reformatting" />
        <style jsx global>
          {`
            body {
              height: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
              width: 100% !important;
              background-color: #efefef;
            }
            @font-face {
              font-family: Sailec;
              src: url(https://s3.amazonaws.com/drop-web-font/Sailec-Light.otf);
              font-weight: 300;
              font-style: normal;
            }
            @font-face {
              font-family: Sailec;
              src: url(https://s3.amazonaws.com/drop-web-font/Sailec.otf);
              font-weight: normal;
              font-style: normal;
            }
            @font-face {
              font-family: Sailec;
              src: url(https://s3.amazonaws.com/drop-web-font/Sailec-Medium.otf);
              font-weight: 500;
              font-style: normal;
            }
            @font-face {
              font-family: Sailec;
              src: url(https://s3.amazonaws.com/drop-web-font/Sailec-Bold.otf);
              font-weight: bold;
              font-style: normal;
            }
          `}
        </style>
      </head>
      <body>
        {children}
      </body>
    </html>
  ),
  onBuild: async () => {
    const files = await walk(__dirname + '/dist')
    files.forEach(file => {
      if (!file.match(/index\.html/)) {
        fs.unlink(file, noop)
      }
    })
    fs.rmdir(__dirname + '/dist/404', noop)
    fs.rmdir(__dirname + '/public', noop)
  },
}
