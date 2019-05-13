import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="2019 travel hotspots for EVERY budget."
    heroLink="https://b.ewd.io/SleepUS"
    hero="mylo/mylo_emailbanner1.png"
    title="Make your tax refund work for you."
    body="Expecting a tax refund this year? Here's how to make the most of your money:"
    button={<Button href="https://b.ewd.io/SleepUS">Shop All Travel</Button>}
  >

    <Offer
      brand="Make your tax refund work for you."
      title="Expecting a tax refund this year? Here's how to make the most of your money:"
      button="Learn More"
      divider={true}
    >
      <p>
        <b>1. Stash your cash:</b> By putting some (or all) of your tax refund towards an emergency saving fund, you'll be ready to ride out any unexpected financial setback without going into debt.
      </p>
      <p>
        <b>2.Invest in a TFSA or RRSP account:</b> Saving up for a vacation? A down-payment on a house? Retirement? Start investing in a tax-free account like a TFSA or RRSP using the Mylo app. Not only can your savings benefit from compound growth over time, but you’ll reap serious rewards when it comes to tax time next year.
      </p>
      <p>
        <b>3.Pay it forward:</b> Why not use a bit of your refund to give back to a cause you care about? Bonus: You’ll be able to deduct your charitable contribution on your taxes next year. With Mylo’s Round Up to Give, you can automatically donate spare change to any of Canada’s 86,000 registered charities.
      </p>
    </Offer>
   
    <Offer
      brand="Mylo"
      title="The app that lets you invest your spare change."
      pointRate="7,500"
      button="Download Mylo"
      divider={false}
    >
      <p>
      Discover Canada’s most popular saving and investment app and put your loonies and toonies to work in a fully-managed, diversified portfolio.
      </p>
      <p>
      It’s easy, automatic and secure. Best of all, Mylo only costs $1/month, with no hidden management fees. Earn 7,500 points when you start using Mylo today.
      </p>
    </Offer>
    
  </DefaultTemplate>
)

export default BlackFridayEmail
