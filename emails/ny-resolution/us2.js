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
      body="With Thrive Market, eating healthy has never been easier. The trusted online marketplace serves up non-GMO, organic, gluten-free and vegan products, delivered straight to your door in a snap."
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
    title="Use Less Energy"
    body="It's time we start reducing our global footprint. Take the reins on your energy consumption with Arcadia Power: the totally user-friendly, digital home energy platform that empowers members to make a difference. You'll assess solar power, save money, and reduce your impact - one digital utility account at a time."
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
