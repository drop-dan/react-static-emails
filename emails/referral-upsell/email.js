import React from 'react'
import { Main, Header, HeroImage, OfferBlurb, Footer, Button } from '../../src/components'

const DefaultEmail = () => (
  <Main preheaderText="For a limited time only, refer a friend to Drop and you'll both get *$5 in Drop points* to treat yourselves.">
    <Header />

    <HeroImage image="referral-upsell/header.png" />

    <div className="p2 mx-auto" style={{ maxWidth: 480 }}>
      <OfferBlurb
        title="This #GivingTuesday, give the gift of caffeine."
        body={
          <p className="my2 mb4 large">
            For a limited time only, refer a friend to Drop and you'll both get{' '}
            <b style={{ color: '#585858' }}>$5 in Drop points</b> to treat yourselves.
          </p>
        }
        button={<Button href="https://b.ewd.io/give5get5campaign">Give $5, get $5</Button>}
      />

      <div className="divider" />

      <p className="left-align">Here's how to get referring:</p>

      <ol>
        <li>Open Drop</li>
        <li>Tap your profile icon in the top left-hand corner</li>
        <li>Under 'Account', tap 'Invite Friends'</li>
        <li>Share your invite code with a friend</li>
        <li>
          Let your BFF know they need to sign up and link a debit or credit card (or both) to Drop
        </li>
      </ol>

      <p className="left-align">Warm and fuzzies all around.</p>
      <p className="left-align">XO, The Drop Team</p>
    </div>

    <Footer />
  </Main>
)

export default DefaultEmail