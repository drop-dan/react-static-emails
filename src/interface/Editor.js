import React from 'react'
import CodeMirror from 'react-codemirror'
import { updateEmailNode } from '../utils/cloneUtils'

class Editor extends React.Component {
  constructor (props) {
    super()
    this.state = { value: props.email.value }
  }

  render () {
    return (
      <div style={{ paddingTop: 55, boxSizing: 'border-box', height: '100%' }}>
        <div className="fixed-ui">
          <p style={{ margin: 15, textAlign: 'left', zIndex: 40 }} onClick={this.props.close}>
            Back
          </p>
        </div>
        <div style={{ display: 'flex', alignContent: 'flex-start' }}>
          <CodeMirror
            autoFocus
            value={this.state.value}
            options={{ lineNumbers: true, lineWrapping: true, mode: 'jsx' }}
            onChange={value => this.setState({ value })}
          />
          <div className="scroller">{updateEmailNode(this.state.value)}</div>
        </div>
      </div>
    )
  }
}

export default Editor
