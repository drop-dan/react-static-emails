import React from 'react'
import { Button, Offer, DefaultTemplate } from '../../src/components'

const JetHer = () => (
  <DefaultTemplate
    preheaderText="Starting tomorrow, score the best deals on your favorite brands - only with Drop."
    hero="jet/her.gif"
    title="And this is just our highlight reel."
    body="Shop 1000s of items from Jet - on sale for a hot minute (Cyber Week ends Sunday!)."
    button={<Button href="https://b.ewd.io/CWJetForHer">Shop all</Button>}
  >
    <Offer
      brand="Jet"
      pointRate="50 per $1"
      oldRate="40 per $1"
      tagline="We thought you might like"
      button={null}
      divider={false}
    />

    <ol>
      <li>Sam Edelman Taye Heel Bootie now $71.96 (55% off</li>
      <li>Herschel Pop Quiz Backpack now $63.39 (15% off)</li>
      <li>Celine Havana Sunglasses now $169.99 (10% off)</li>
      <li>Dooney and Bourke Tan Tote now $107.00 (20% off)</li>
    </ol>

    <p>
      Stock up on gifts for you and the women in your life with free shipping on orders over $35.
    </p>

    <Button href="https://b.ewd.io/CWJetForHer">Shop all</Button>
  </DefaultTemplate>
)

export default JetHer
