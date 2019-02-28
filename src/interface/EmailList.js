import React from 'react'

class EmailList extends React.Component {
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Email Templates</h3>
        {this.props.templates.map((email, index) => (
          <div key={"email" + index} onClick={() => this.props.updateEmail(email)}>
            <p>{email.name}</p>
          </div>
        ))}
        <h3>Saved Emails</h3>
        {this.props.emails.map((email, index) => (
          <div key={"email" + index} onClick={() => this.props.updateEmail(email)}>
            <p>{email.name}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default EmailList
