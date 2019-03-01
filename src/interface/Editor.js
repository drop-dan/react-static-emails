import React from 'react'
import CodeMirror from 'react-codemirror'
import { updateEmailNode } from '../utils/cloneUtils'

class Editor extends React.Component {
  constructor(props) {
    super()
    this.state = {
      email: props.email,
      editingName: false,
      originalName: props.email.name
    }
  }

  render() {
    const { name, value, template } = this.state.email
    return (
      <div style={{ paddingTop: 55, boxSizing: 'border-box', height: '100%' }}>
        <div className="fixed-ui">
          <p
            onClick={this.props.close}
            style={{ margin: 15, textAlign: 'left', zIndex: 40 }}
          >
            Back
          </p>
          {this.state.editingName ? (
            <input
              value={name}
              onBlur={() => {
                this.setState({
                  editingName: false,
                  originalName: this.state.email.name
                })
                this.props.onRename(this.state.email, this.state.originalName)
              }}
              onChange={({ target }) =>
                this.setState({
                  email: { ...this.state.email, name: target.value }
                })
              }
            />
          ) : (
            <p
              onClick={() =>
                !this.state.email.template &&
                this.setState({ editingName: true })
              }
              style={{ margin: 15, textAlign: 'left', zIndex: 40 }}
            >
              {name}
            </p>
          )}
        </div>
        <div style={{ display: 'flex', alignContent: 'flex-start' }}>
          <CodeMirror
            autoFocus
            value={value}
            onChange={value => {
              this.setState({ email: { ...this.state.email, value } })
              this.props.onSave(this.state.email)
            }}
            options={{
              lineNumbers: true,
              lineWrapping: true,
              mode: 'jsx',
              readOnly: template
            }}
          />
          <div className="scroller">{updateEmailNode(value)}</div>
        </div>
      </div>
    )
  }
}

export default Editor
