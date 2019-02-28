import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import 'codemirror/mode/jsx/jsx'

import defaultEmail from './emails/default'
import offerEmail from './emails/offer'
import Editor from './interface/editor'
import EmailList from './interface/EmailList'

const templates = [
  { name: 'Default Template', value: defaultEmail },
  { name: 'Offer Template', value: offerEmail },
]

class Base extends React.Component {
  constructor () {
    super()
    this.state = { savedEmails: {} }
    this.updateEmail = this.updateEmail.bind(this)
    this.closeEmail = this.closeEmail.bind(this)
    localStorage.setItem('savedEmails', JSON.stringify({ test: defaultEmail }))
  }

  componentWillMount () {
    this.setState({ savedEmails: JSON.parse(localStorage.getItem('savedEmails')) })
  }

  updateEmail (email) {
    // this.state.savedEmails
    this.setState({ email })
  }

  closeEmail () {
    this.setState({ email: null })
  }

  render () {
    console.log(this.state.savedEmails)
    return (
      <div>
        {this.state.email ? (
          <Editor email={this.state.email} close={this.closeEmail} />
        ) : (
          <EmailList
            templates={templates}
            emails={Object.values(this.state.savedEmails)}
            updateEmail={this.updateEmail}
          />
        )}
      </div>
    )
  }
}

if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  render(Base)
}

export default hot(module)(Base)
