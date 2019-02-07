import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="It's Wellness Month at Drop. This week, we're tackling all things financial health to make your 2019 a little less 😬 and a little more 🤑. Get your dollar bills in order with these top tips."
    heroLink="https://b.ewd.io/FinanceCA"
    hero="wellness-finance/wellness_finance_email_ca.gif"
    title="It's Wellness Month at Drop."
    body="This week, we're tackling all things financial health to make your 2019 a little less 😬 and a little more 🤑. Get your dollar bills in order with these top tips."
    button={<Button href="https://b.ewd.io/FinanceCA">See All</Button>}
  >

    <Offer
      brand="Scotiabank"
      title="Looking to make your dollars go further? Apply for a SCENE Visa Card from Scotiabank."
      body="You'll get 1 SCENE point for every $1 you spend on credit card purchases, plus 5X the points on any purchase made at participating Cineplex theatres.Take home 50,000 Drop points when you're approved."
      pointRate="50,000"
      button='Apply Now'
    />
    <Offer
      brand="Koho"
      title="Spend smarter with Koho."
      body="Koho is the free app and reloadable card that gives you instant cash back on your spending - no strings attached. Get 20,000 Drop points when you activate and fund a Koho account."
      pointRate="20,000"
      button="Join Now"
    />
    <Offer
      brand="Mylo"
      title="Got some spare change lying around? Make it work for you."
      body="Mylo rounds all of your purchases up to the nearest dollar, and invests your spare change. It's so seamless, you won't notice a difference. Get 10,000 Drop points when you sign up for a Mylo account and link your bank to the app."
      pointRate="10,000"
      button="Sign Up"
    />
    <Offer
      brand="CIBC"
      title="Jet-setting somewhere soon? Don't get dinged by exorbitant exchange rates."
      body="With the CIBC Air Canada Conversion Card, you can load up to 10 different currencies at the best possible rates -with no fees attached. Order, activate, and load - it's that easy. Carry less cash, and keep track of your spending while travelling. Always convenient, always secure."
      pointRate="50,000"
      button="Order Now"
    />
    <Offer
      brand="Turbotax"
      title="When you finally have to file your taxes sans Mom & Dad, turn to TurboTax. Early."
      body="Freelance? Work for yourself? Own a home? Not quite sure? With TurboTax's tiered tax options, you can file your taxes online, in a snap. Upload last year's tax info in a hot minute from other competitors, and have your return double-checked for errors by a TurboTax Live Expert to make sure you get the biggest refund possible, guaranteed."
      pointRate="100 PER $1"
      button="File Now"
      divider={false}
    />
  </DefaultTemplate>
)

export default BlackFridayEmail

