import React from 'react'
import inlineCss from 'inline-css'
import cleanDistFolder from './src/utils/cleanDistFolder'
import DocumentComponent from './src/components/Document'

const email = process.argv[2] || 'default'

export default {
  siteRoot: 'https://www.earnwithdrop.com',

  onBuild: cleanDistFolder,

  Document: DocumentComponent,

  webpack: (config, args) => {
    return config
  },

  paths: {
    root: process.cwd(),
    src: 'src',
    dist: `emails/${email}/html`,
    devDist: 'tmp/dev-server',
    public: 'public',
  },

  getSiteData: () => ({ email, title: email }),

  renderToHtml: async (render, Component) => {
    inlineCss(render(<Component test="test" />), { url: 'http' }).then(html => html)
  },
}
