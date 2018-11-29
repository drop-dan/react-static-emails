import React from 'react'
import { DefaultTemplate } from '../../src/components'

const DefaultEmail = () => (
  <DefaultTemplate
    preheaderText="This is a test email"
    hero="default.png"
    title="Nothing to see here"
    body="You entered an email name that doesn't exist. Or maybe I broke something ¯\_(ツ)_/¯"
  />
)

export default DefaultEmail
