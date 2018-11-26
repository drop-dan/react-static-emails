import React from 'react'
import inlineCss from 'inline-css'
import cleanDistFolder from './src/utils/cleanDistFolder'
import DocumentComponent from './src/components/Document'

const email = process.argv[2] || 'default'
const filename = process.argv[3] || 'email'

export default {
  siteRoot: 'https://www.earnwithdrop.com',

  onBuild: cleanDistFolder,

  Document: DocumentComponent,

  paths: {
    root: process.cwd(),
    src: 'src',
    dist: `emails/${email}/html`,
    devDist: 'tmp/dev-server',
    public: 'public',
  },

  getSiteData: () => ({ email, filename, title: email }),

  renderToHtml: async (render, Component) => {
    const html = await inlineCss(render(<Component />), { url: 'http' })
    return html
  },
}
