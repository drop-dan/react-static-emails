import React from 'react'
import { Button, Offer, DefaultTemplate } from '../../src/components'

const JetHer = () => (
  <DefaultTemplate
    preheaderText="Earn points for every dollar you spend at Gillette. No commitments, no contracts. Just your closest shave ever, shipped to your door."
    hero="gillette/gillette_emailbanner_2.gif"
    title="No commitments, no contracts."
    body="Your favourite shave ever, for less than $3 per month per blade. That's less than the other guys."
    button={<Button href="https://b.ewd.io/CWJetForHer">Order Now</Button>}
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
      image="gillette/razors.png"
      button={null}
      divider={false}
    />
      <Offer
      title="3. Shave & Save"
      body="With less than $3 per blade per month and every 4th order free (when you subscribe), you're looking at serious shaving and serious savings. But don't take our word for it. see for yourself how Gillette On Demand stacks up against the other guys."
      image="gillette/frequency.png"
      button={null}
      divider={false}
    />
      <Offer
      body="No bull. Just blades."
      image="gillette/shave.png"
      button="Order Now"
      divider={false}
    />

  </DefaultTemplate>
)

export default JetHer
