import React from 'react'
import { Main, Header, HeroImage, OfferBlurb, Footer, Offer, Button } from '../../src/components'

const CyberMondayEmail = () => (
  <Main preheaderText="Today only, shop through Drop and get up to 30% back in points, just like that.">
    <Header />

    <HeroImage href="https://b.ewd.io/CyberMondayCA" image="cyber-monday/header.gif" />

    <div className="p2 mx-auto" style={{ maxWidth: 480 }}>
      <OfferBlurb
        title="It's Cy-burr Monday. Stay home."
        description="Today only, shop through Drop and get up to 30% back in points, just like that."
        button={
          <Button
            href="https://b.ewd.io/CyberMondayCA"
            className="wide mt2 mb2 mx-auto"
            style={{ marginTop: 20 }}
          >
            Shop now
          </Button>
        }
      />

      <div className="divider" />

      <Offer
        brand="ClassPass"
        pointRate="15,000"
        oldRate="12,000"
        body="Kick that rut. Nab a 1-month free trial when you sign up for ClassPass."
        link="https://b.ewd.io/CMClassPassCA"
      />

      <Offer
        brand="Kobo"
        pointRate="10,000"
        oldRate="5,000"
        body="Bury yourself in a quality read. Take $10 towards your first eBook."
        link="https://b.ewd.io/CMKoboCA"
      />

      <Offer
        brand="Charlotte Tilbury"
        pointRate="80 PER $1"
        oldRate="50 PER $1"
        body="Fake your glow 'til next summer. Take up to 50% off the makeup brand beauty editors are raving about."
        link="https://b.ewd.io/CMCharlotteCA"
      />

      <Offer
        brand="Hello Fresh"
        pointRate="20,000"
        oldRate="15,000"
        body="For the (busy) chef at heart. Take up to $90 off your first two HelloFresh boxes with code CYBERWEEKEND90."
        link="https://b.ewd.io/CMHelloFresh"
      />

      <Offer
        brand="Frank And Oak"
        pointRate="60 PER $1"
        oldRate="50 PER $1"
        body="Look great without the fuss. Score 30% off site-wide, with select items up to 50% off using code CYBERMONDAY30."
        link="https://b.ewd.io/CMFrankCA"
      />

      <Offer
        brand="Indigo"
        pointRate="50 PER $1"
        oldRate="30 PER $1"
        body="Your one-stop shop for today's hottest reads, home, decor, and more. Take up to 50% off online stock - while quantities last."
        link="https://b.ewd.io/CMIndigo"
      />

      <Offer
        brand="Evernew"
        pointRate="100 PER $1"
        oldRate="50 PER $1"
        body="Holiday glam, at 25% off. Plus, today only, score free express shipping online."
        link="https://b.ewd.io/CMEverNew"
      />

      <Offer
        brand="Forever 21"
        pointRate="40 PER $1"
        oldRate="20 PER $1"
        body="It's only the best Cyber Monday ever. Take 30% off everything with code CM30."
        link="https://b.ewd.io/CMForever21"
      />

      <Offer
        brand="S'well"
        pointRate="110 PER $1"
        oldRate="50 PER $1"
        body="Hydration all day long is swell. Score 25% off with code BF2018. "
        link="https://b.ewd.io/CMSwellCA"
        divider={false}
      />

      <p className="small left-align" style={{ marginTop: 100 }}>
        *boosted offer rates and promotions listed are subject to change without notice.
      </p>
    </div>

    <Footer />
  </Main>
)

export default CyberMondayEmail
