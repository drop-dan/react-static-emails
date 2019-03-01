import React from 'react'

const EmailItem = ({ email, onClick, onSave, onDelete }) => (
  <div
    key={email.name}
    style={{
      display: 'flex',
      alignSelf: 'center',
      justifyContent: 'space-between',
      width: 170,
      margin: '0 auto'
    }}
  >
    <p onClick={() => onClick(email)}>{email.name}</p>
    {email.template ? (
      <span
        onClick={() => onSave({ ...email, name: null })}
        style={{ margin: '0 10px', lineHeight: '50px' }}
      >
        +
      </span>
    ) : (
      <span
        style={{ margin: '0 10px', lineHeight: '50px' }}
        onClick={() => onDelete(email)}
      >
        -
      </span>
    )}
  </div>
)

const EmailList = ({ emails, templates, ...rest }) => (
  <div style={{ marginTop: 20 }}>
    <h3>Email Templates</h3>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {templates.map(email => (
        <EmailItem key={email.name} email={email} {...rest} />
      ))}
    </div>

    <h3>Saved Emails</h3>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {emails.map(email => (
        <EmailItem key={email.name} email={email} {...rest} />
      ))}
    </div>
  </div>
)

export default EmailList
