import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="It's Wellness Month at Drop. This week, we're tackling all things financial health to make your 2019 a little less 😬 and a little more 🤑. Get your dollar bills in order with these top tips."
    heroLink="https://b.ewd.io/FinanceUS"
    hero="wellness-finance/wellness_finance_email_us.gif"
    title="It's Wellness Month at Drop."
    body="This week, we're tackling all things financial health to make your 2019 a little less 😬 and a little more 🤑. Get your dollar bills in order with these top tips."
    button={<Button href="https://b.ewd.io/FinanceUS">See All</Button>}
  >

    <Offer
      brand="Stash"
      title="Another year older with no investments to your name? This year's your year."
      body="Take the guesswork out of navigating the stock market with Stash: the intuitive trading app designed to let you take control of your finances. With no add-on commissions or trading fees, Stash serves up ongoing tips and tricks so you can build your portfolio on your own terms. Get 15,000 Drop points and $5 to invest when you open an account with Stash."
      pointRate="15,000"
      button='Open an Account'
    />
    <Offer
      brand="H&R Block"
      title="When you finally have to file your taxes sans Mom & Dad, turn to H&R Block. Early."
      body="Freelance? Work for yourself? Own a home? Not quite sure? With H&R Block's tiered tax options, you can file taxes online, easily, and from any device. You can upload last year's tax info in a hot minute from other competitors, and have your return double-checked for errors by a Tax Pro to make sure you get the biggest refund possible, guaranteed."
      pointRate="15,000"
      button="File Now"
    />
    <Offer
      brand="Twine"
      title="First things first: create financial goals for yourself (and hit them)."
      body="With Twine, get financially secure by creating goals that work for you. Seamlessly connect your bank account to the Twine app, and watch your savings grow towards a major milestone, like your first home, or that dream vacation you've always wanted to take.*"
      pointRate="15,000"
      button="Open an Account"
      note="*Only available for iOS users"
    />
    <Offer
      brand="Petal"
      title="Feeling stuck with bad credit? Build your score."
      body="With the Petal Visa card, you won't be talking to a bank - you'll be talking to a tech company designed to help you manage your money better. Link your accounts to the app, and find out if you're pre-approved in minutes. Say buh bye to fees, and hello to higher limits."
      pointRate="40,000"
      button="Sign Up"
      divider={false}
    />
  </DefaultTemplate>
)

export default BlackFridayEmail

