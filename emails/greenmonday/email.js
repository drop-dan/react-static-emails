import React from 'react'
import { Offer, Button, DefaultTemplate } from '../../src/components'

const CyberMondayEmail = () => (
  <DefaultTemplate
    preheaderText="With 15 days left 'til the holidays are in full swing, don't miss the boat on gifts for everyone you love."
    heroLink="https://b.ewd.io/GreenMonday"
    hero="green-monday/green-monday-header.png"
    title="And you thought our Cyber Monday offers were good."
    body="With 15 days left 'til the holidays are in full swing, don't miss the boat on gifts for everyone you love."
    button={<Button href="https://b.ewd.io/GreenMonday">Shop All</Button>}
  >
    <Offer
      brand="Sephora"
      pointRate="40 PER $1"
      body="Your tree won't be the only thing that sparkles. Save at least $15 off $75 with code 2018HOORAY*"
      note="*$15 off $75 for BI, $20 off $75 for VIB, $25 of $75 for Rouge members"
      link="https://b.ewd.io/GMSephora"
    />

    <Offer
      brand="Happy Socks"
      pointRate="6,000 on $30 spend"
      body="Plain white socks are for plain Janes and Joes. Use code XMAS25 to score 25% off your holiday shopping"
      link="https://b.ewd.io/GMHappySocks"
    />

    <Offer
      brand="Jet"
      pointRate="40 PER $1"
      body="Shop top holiday deals on the hottest brands all in one place, PLUS nab free shipping on orders over $35."
      link="https://b.ewd.io/GMJet"
    />

    <Offer
      brand="eBay"
      pointRate="15 PER $1"
      body="New deals every hour! Check back for BIG savings on fashion, tech, home & garden, and more."
      link="https://b.ewd.io/GMEbay"
    />

    <Offer
      brand="Sam's Club"
      pointRate="20 PER $1"
      body="Gift yourself instant savings on the hottest tech, toys, and hosting essentials."
      link="https://b.ewd.io/GMSamsClub"
    />

    <Offer
      brand="Old Navy"
      pointRate="30 PER $1"
      body="Take 60% off winter styles for the fam + today only: score an EXTRA 20% off your order."
      link="https://b.ewd.io/GMOldNavy"
    />

    <Offer
      brand="Fitbit"
      pointRate="90 PER $1"
      body="Unwrap motivation and save up to $50 off select products + FREE 2-day shipping with code SHIP."
      link="https://b.ewd.io/GMFitbit"
    />

    <Offer
      brand="Macy's"
      pointRate="30 PER $1"
      body="Today only, score specials on 1000s of items, PLUS, last day for Friends & Family discounts!"
      link="https://b.ewd.io/GMMacys"
      divider={false}
    />

    <p className="small left-align" style={{ marginTop: 100 }}>
      *Promotions listed are subject to change without notice.
    </p>
  </DefaultTemplate>
)

export default CyberMondayEmail
