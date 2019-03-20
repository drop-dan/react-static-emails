import React from 'react'
import { Button, Offer, DefaultTemplate } from '../../src/components'

const JetHer = () => (
  <DefaultTemplate
    preheaderText="Earn points for every dollar you spend at Gillette. No commitments, no contracts. Just your closest shave ever, shipped to your door."
    hero="gillette/gillette_emailbanner_delivered_orange.gif"
    title="No commitments, no contracts."
    body="Just your closest shave ever, from your favourite razor maker, shipped to your door."
    button={<Button href="https://b.ewd.io/CWJetForHim">Shop Now</Button>}
  >
    <Offer
      brand="Here's how it works:"
      button={null}
      divider={false}
    />
    <Offer
      title="1. Choose a Razor"
      body="In this battle of the blades, the only wrong choice is not subscribing."
      button={null}
      divider={false}
    />
    <Offer
      title="2. Choose How Often You Want It"
      body="Pick from a one-time order, or subscribe and save. Choose an option that works for you and your facial hair. No matter what you choose, shipping is always free."
      image="gillette/gillette_step1.jpg"
      button={null}
      divider={false}
    />
    <Offer
      title="3. Shave & Save"
      body="With less than $3 per blade per month and every 4th order free (when you subscribe), you're looking at serious shaving and serious savings."
      image="gillette/gillette_step2.jpg"
      button={null}
      divider={false}
    />
      <Offer
      title="4. Earn 15,000 points"
      body="No bull. Just blades." 
      image="gillette/gillette_step3.jpg"
      button="Order Now"
      divider={false}
    />

  </DefaultTemplate>
)

export default JetHer
