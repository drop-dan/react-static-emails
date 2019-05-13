import React from 'react'
import { Offer, DefaultTemplate, Button } from '../../src/components'

const CasperEmail = () => (
  <DefaultTemplate
    title="We're updating our Terms of Service & Privacy Policy."
    body="Here's the full rundown on what's changing."
    button={false}
    divider={false}
  >
  
    <Offer
      body="As the Drop community continues to grow, we're updating our Terms of Service and Privacy Policy to reflect changes we've made to protect your privacy rights and provide greater transparency around the ways we collect, process, and use personal information, as well as the terms under which you use Drop. These changes will go into effect on DATE."
      button="Privacy Policy"
      divider={false}
    >
      <p>
      All updates are designed to strengthen our core offering, so we can make your everyday more rewarding. We encourage you to read them in their entirety, but here's a snapshot of what's changing:
      </p>

      <p>
      <b>Privacy Policy:</b> Our updated Privacy Policy is easier to read and better describes the types of data we collect, how we collect it, how we use it, and with whom we share it. It accounts for new features and describes the role that data plays in helping deliver more value back to the Drop community.
      </p>
      </Offer>

    <Offer
      button="Terms of Service"
      body="Terms of Service: Our Terms have been reorganized to make it easier to understand and reflect new features and rules on the Drop platform. The updated Terms also contain more detail about how Drop may use content you provide to us, dispute resolution, and who to contact if you have a concerns about copyright or IP infringement."
      divider={false}
    /> 

      <Offer
      body="By continuing to use our services on or after DATE, you acknowledge and agree to our updated Terms of Service and Privacy Policy. If you have any questions or concerns, please contract us by sending an in-app support ticket."
      divider={false}
      button={false}
    /> 

       <p>
      From all of us at Drop, we sincerely thank you for being a member. We couldn't do what we do without you.
      </p>

  
  </DefaultTemplate>
)

export default CasperEmail
