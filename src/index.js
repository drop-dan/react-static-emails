import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import JetEmail from '../emails/templates/JetEmail'

const Email = () => <JetEmail />

export default hot(module)(Email)

if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  render(Email)
}
