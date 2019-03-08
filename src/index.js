import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import 'codemirror/mode/jsx/jsx'

import defaultEmail from './emails/default'
import offerEmail from './emails/offer'
import Editor from './interface/editor'
import EmailList from './interface/EmailList'

const templates = [
  { name: 'Default Template', value: defaultEmail, template: true },
  { name: 'Offer Template', value: offerEmail, template: true }
]

class Base extends React.Component {
  constructor() {
    super()
    this.state = { activeEmail: null, savedEmails: [] }
    this.updateActiveEmail = this.updateActiveEmail.bind(this)
    this.closeActiveEmail = this.closeActiveEmail.bind(this)
    this.deleteEmail = this.deleteEmail.bind(this)
    this.saveEmail = this.saveEmail.bind(this)
    this.resetEmails = this.resetEmails.bind(this)
    this.renameEmail = this.renameEmail.bind(this)
  }

  componentWillMount() {
    const storage = localStorage.getItem('savedEmails')
    const savedEmails = storage ? JSON.parse(storage) : []
    this.setState({ savedEmails })
  }

  updateActiveEmail(email) {
    this.setState({ activeEmail: email.name })
  }

  closeActiveEmail() {
    this.setState({ activeEmail: null })
  }

  saveEmail(email) {
    email.template = false
    if (!email.name) {
      email.name = this.getRandomEmailName()
    }
    let savedEmails = this.state.savedEmails
    if (this.findEmail(email).length > 0) {
      savedEmails = savedEmails.filter(_email => _email.name !== email.name)
    }
    savedEmails = savedEmails.concat([email])
    this.setState({ savedEmails })
    localStorage.setItem('savedEmails', JSON.stringify(savedEmails))
  }

  renameEmail(email, originalName) {
    const savedEmails = this.state.savedEmails.filter(
      _email => _email.name !== originalName
    )
    this.setState({
      savedEmails: savedEmails.concat(email),
      activeEmail: email.name
    })
    localStorage.setItem('savedEmails', JSON.stringify(savedEmails))
  }

  getRandomEmailName() {
    return `${window.chance.syllable()}-${window.chance.syllable()}-${window.chance.syllable()}`
  }

  resetEmails() {
    this.setState({ savedEmails: [] })
    localStorage.setItem('savedEmails', JSON.stringify([]))
  }

  findEmail({ name: emailName }) {
    return this.state.savedEmails.filter(email => email.name === emailName)
  }

  deleteEmail({ name: emailName }) {
    const savedEmails = this.state.savedEmails.filter(
      email => email.name !== emailName
    )
    this.setState({ savedEmails })
    localStorage.setItem('savedEmails', JSON.stringify(savedEmails))
  }

  render() {
    const activeEmail = templates
      .concat(this.state.savedEmails)
      .find(email => email.name === this.state.activeEmail)

    return (
      <div>
        {activeEmail ? (
          <Editor
            email={activeEmail}
            onSave={this.saveEmail}
            onRename={this.renameEmail}
            close={this.closeActiveEmail}
          />
        ) : (
          <EmailList
            templates={templates}
            emails={Object.values(this.state.savedEmails)}
            onClick={this.updateActiveEmail}
            onDelete={this.deleteEmail}
            onSave={this.saveEmail}
          />
        )}
      </div>
    )
  }
}

if (typeof document !== 'undefined') {
  const renderMethod = module.hot
    ? ReactDOM.render
    : ReactDOM.hydrate || ReactDOM.render
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  render(Base)
}

export default hot(module)(Base)
