import React from 'react'
import flush from 'styled-jsx/server'
import inlineCss from 'inline-css'

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  generateSourceMaps: false,
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
        <style jsx global>
          {`
            @font-face {
              font-family: Sailec;
              src: url("https://s3.amazonaws.com/drop-web-font/Sailec-Light.otf");
              font-weight: 300;
              font-style: normal;
            }
            @font-face {
              font-family: Sailec;
              src: url("https://s3.amazonaws.com/drop-web-font/Sailec.otf");
              font-weight: normal;
              font-style: normal;
            }
            @font-face {
              font-family: Sailec;
              src: url("https://s3.amazonaws.com/drop-web-font/Sailec-Medium.otf");
              font-weight: 500;
              font-style: normal;
            }
            @font-face {
              font-family: Sailec;
              src: url("https://s3.amazonaws.com/drop-web-font/Sailec-Bold.otf");
              font-weight: bold;
              font-style: normal;
            }
          `}
        </style>
      </head>
      <body>{children}</body>
    </html>
  ),
}
