import React from 'react'
import {
  Main,
  Header,
  HeroImage,
  OfferBlurb,
  Footer,
  Offer,
  Button,
  DefaultTemplate,
} from '../../src/components'

const CyberMondayEmail = () => (
  <DefaultTemplate
    preheaderText="Today only, shop through Drop and get up to 30% back in points, just like that."
    heroLink="https://b.ewd.io/CyberMondayUS"
    hero="cyber-monday/header.gif"
    title="It's Cy-burr Monday. Stay home."
    body="Today only, shop through Drop and get up to 30% back in points, just like that."
    button={
      <Button
        href="https://b.ewd.io/CyberMondayUS"
        className="wide mt2 mb2 mx-auto"
        style={{ marginTop: 20 }}
      >
        Shop now
      </Button>
    }
  >
    <Offer
      brand="ClassPass"
      pointRate="15,000"
      oldRate="12,000"
      body="Kick that rut. Nab a 1-month free trial when you sign up for ClassPass."
      link="https://b.ewd.io/CMClassPass"
    />

    <Offer
      brand="Kobo"
      pointRate="10,000"
      oldRate="5,000"
      body="Bury yourself in a quality read. Take $10 towards your first eBook."
      link="https://b.ewd.io/CMKoboUS"
    />

    <Offer
      brand="Jet"
      pointRate="80 PER $1"
      oldRate="40 PER $1"
      body="Today only, save up to $250 on select Mac devices, nab up to 20% off Samsung TVs, and score up to 25% off select PS4 favorites like Call of Duty 4."
      link="https://b.ewd.io/CMJet"
    />

    <Offer
      brand="New Balance"
      pointRate="15,000"
      body="Tackle your fitness resolution a month early. Take 30% off with code CYBERMONDAY30, today only."
      link="https://b.ewd.io/CMJet"
    />

    <Offer
      brand="Tatcha"
      pointRate="100 PER $1"
      oldRate="50 PER $1"
      body="Luxury skincare + makeup, made simple. Enjoy 20% off site-wide with code CYBER18."
      link="https://b.ewd.io/CMTatcha"
    />

    <Offer
      brand="Charlotte Tilbury"
      pointRate="80 PER $1"
      oldRate="50 PER $1"
      body="Fake your glow 'til next summer. Take up to 50% off the makeup brand beauty editors are raving about."
      link="https://b.ewd.io/CMCharlotte"
    />

    <Offer
      brand="Frank & Oak"
      pointRate="60 PER $1"
      oldRate="50 PER $1"
      body="Look great without the fuss. Score 30% off site-wide, with select items up to 50% off using code CYBERMONDAY30."
      link="https://b.ewd.io/CMFrank"
    />

    <Offer
      brand="S'well"
      pointRate="110 PER $1"
      oldRate="50 PER $1"
      body="Hydration all day long is swell. Score 25% off with code BF2018."
      link="https://b.ewd.io/CMSwell"
      divider={false}
    />

    <p className="small left-align" style={{ marginTop: 100 }}>
      *boosted offer rates and promotions listed are subject to change without notice.
    </p>
  </DefaultTemplate>
)

export default CyberMondayEmail
