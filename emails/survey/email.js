import React from 'react'
import { Offer, DefaultTemplate, Button } from '../../src/components'

const CasperEmail = () => (
  <DefaultTemplate
    preheaderText="Tax season can be taxing. But it doesn't have to be. File H&R Block under: fast, easy & stress-free."
    hero="survey/user_interviews.png"
    title="We'd love your feedback"
    button={false}
    divider={false}
  >
  
    <Offer
      body="We want to know why you downloaded Drop. We'd love to know why, as we're always looking to improve our product."
      button={false}
      divider={false}
    />

      <p>
      Participate in this very short <b>2 minute survey</b> and you'll have a chance to win a <b>$50 Amazon Gift Card!</b>
      </p>

    <Offer
      button="Take the survey"
      note="Terms and Conditions: test test test test test test test test test test test test test"
      divider={false}
    /> 
  
  </DefaultTemplate>
)

export default CasperEmail
