import React from 'react'
import { Offer, DefaultTemplate, Button } from '../../src/components'

const CasperEmail = () => (
  <DefaultTemplate
    preheaderText="Introducing: The Top 10 Most Common Resolutions (and how to make them work year-round)."
    hero="ny-resolution/newyears_emailbanner.gif"
    title="Most resolutions make it to the second week of January. You can do better than that."
    body="Introducing: The Top 10 Most Common Resolutions (and how to make them work year-round)."
    button={<Button>See Top 10</Button>}
  >
    <Offer
      image="ny-resolution/newyears_1.png"
      imageWidth="100"
      imageHeight="100"
      title="Eat Healthier"
      body="With Well.ca, eating healthy has never been easier. The trusted online marketplace serves up non-GMO, organic, gluten-free and vegan products, delivered straight to your door in a snap."
      button="Read More"
      divider={false}
    />
    
    <Offer
      image="ny-resolution/newyears_2.png"
      imageWidth="100"
      imageHeight="100"
      title="Drink More Water"
      body="Constantly parched? Habits are made to be broken. Stay hydrated 24/7 with S'well: the eco-friendly water bottle you can take anywhere. For added ease: keep one at home and at work, so you don't have to worry about transporting your new fave accessory."
      button="Read More"
      divider={false}
    />    
    
    <Offer
    image="ny-resolution/newyears_3.png"
    imageWidth="100"
    imageHeight="100"
    title="Save More Money"
    body="I wish I had less money in my bank account,” said no one, ever. Luckily, outside of sending a shockwave through your lifestyle, there’s a way to make your money work for you. Enter: The Scotiabank®* Gold American Express® card, Canada’s Best Rewards Credit Cards 2017. The card has major perks, including earning 4X the Scotia Rewards points for every $1 you spend at eligible gas stations, grocery stores, and on dining and entertainment."
    button="Read More"
    divider={false}
  />

    <Offer
      image="ny-resolution/newyears_4.png"
      imageWidth="100"
      imageHeight="100"
      title="Learn a New Skill"
      body="We'd all love to level up our talents - but who has the time? With Rosetta Stone, you can polish off your language skills - totally at your own pace. Always wanted to learn Spanish? Italian? Rosetta Stone makes it easy to master the art of communication."
      button="Read More"
      divider={false}
    />

    <Offer
      image="ny-resolution/newyears_5.png"
      imageWidth="100"
      imageHeight="100"
      title="Travel More"
      body="We've all been there: you're scrolling through the 'gram, and Stephanie So-And-So is jet-setting from Paris to Milan to Barcelona with a smile and Away luggage to boot. While we wholeheartedly believe comparison is the devil, the fact remains: people who travel *make time* for travel. Take a look at your 2019 calendar and carve out a few weeks for yourself using Rocketmiles. Book your stay from over 100,000 hotels, worldwide."
      button="Read More"
      divider={false}
    />


  </DefaultTemplate>
)

export default CasperEmail
