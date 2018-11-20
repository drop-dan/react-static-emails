import React from 'react'
import inlineCss from 'inline-css'
import cleanDistFolder from './src/utils/cleanDistFolder'
import DocumentComponent from './src/components/Document'

export default {
  siteRoot: 'https://www.earnwithdrop.com',

  onBuild: cleanDistFolder,

  Document: DocumentComponent,

  getSiteData: () => ({ title: 'Drop Emails' }),

  renderToHtml: async (render, Component) =>
    inlineCss(render(<Component />), { url: 'http' }).then(html => html),
}
