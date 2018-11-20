import React from 'react'
import inlineCss from 'inline-css'
import fs from 'fs'
import path from 'path'
import { noop, walk } from './utils'
import DocumentComponent from './src/components/Document'

export default {
  siteRoot: 'https://www.earnwithdrop.com',
  getSiteData: () => ({ title: 'Drop Emails' }),
  renderToHtml: async (render, Component) => {
    const html = render(<Component />)
    let final
    await inlineCss(html, { url: 'http' }).then(html => {
      final = html
    })
    return final
  },
  Document: DocumentComponent,
  onBuild: async () => {
    const files = await walk(path.resolve(__dirname, './dist'))
    files.forEach(file => {
      if (!file.match(/index\.html/)) {
        fs.unlink(file, noop)
      }
    })
    fs.rmdir(path.resolve(__dirname, './dist/404'), noop)
    fs.rmdir(path.resolve(__dirname, './public'), noop)
  },
}
