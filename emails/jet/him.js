import React from 'react'
import { Button, Offer, DefaultTemplate } from '../../src/components'

const JetHer = () => (
  <DefaultTemplate
    preheaderText="Starting tomorrow, score the best deals on your favorite brands - only with Drop."
    hero="jet/him.gif"
    title="And this is just our highlight reel."
    body="Shop 1000s of items from Jet - on sale for a hot minute (Cyber Week ends Sunday!)."
    button={
      <Button className="mt2 mx-auto" href="https://b.ewd.io/CWJetForHim" style={{ maxWidth: 300 }}>
        Shop all
      </Button>
    }
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
      <li>Samsung 55 Inch 4K Ultra HD Smart TV now $847.99(39 % off)</li>
      <li>Microsoft Xbox One S 500GB Forza Horizon 3 Hot Wheels Bundle now $259(8 % off)</li>
      <li>Bose Solo 5 TV sound system now $199(20 % off)</li>
      <li>Dr.Martens Men's 2976 Chelsea Boot now $130.46 (10% off)</li>
    </ol>

    <p>
      Stock up on gifts for you and the other fellas in your life with free shipping on orders over
      $35.
    </p>

    <div className="p2 mx-auto mb4" style={{ maxWidth: 300 }}>
      <Button href="https://b.ewd.io/CWJetForHim">Shop all</Button>
    </div>
  </DefaultTemplate>
)

export default JetHer
