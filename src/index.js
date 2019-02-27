import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import CodeMirror from 'react-codemirror'
import defaultEmail from './emails/default'
import 'codemirror/mode/jsx/jsx'
import { updateEmailNode } from './utils/cloneUtils'

class Base extends React.Component {
  constructor () {
    super()
    this.state = { savedEmails: [] }
    localStorage.setItem('savedEmails', JSON.stringify([{ name: 'Default Template', value: defaultEmail }]))
    this.updateEmail = this.updateEmail.bind(this)
  }

  componentWillMount () {
    this.setState({ savedEmails: JSON.parse(localStorage.getItem('savedEmails')) })
  }

  updateEmail (email) {
    this.setState({ email })
  }

  render () {
    return (
      <div>
        {this.state.email ? (
          <div>
            <p style={{ margin: 15, textAlign: 'left' }} onClick={() => this.setState({ email: null })}>Back</p>
            <div style={{ display: 'flex', alignContent: 'flex-start' }}>
              <CodeMirror
                autoFocus
                value={this.state.email.value}
                options={{ lineNumbers: true, mode: 'jsx' }}
                onChange={value => this.updateEmail({ value })}
              />
              <div className="scroller">
                {updateEmailNode(this.state.email.value)}
              </div>
            </div>
          </div>
        ) : (
          <div>
            {this.state.savedEmails.map((email, index) => (
              <div key={"email" + index} onClick={() => this.updateEmail(email)}>
                <p>{email.name}</p>
              </div>
            ))}
          </div>
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
