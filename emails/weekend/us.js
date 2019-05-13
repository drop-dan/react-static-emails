import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="Summer, is that you? ☀️ "
    heroLink="https://b.ewd.io/SleepUS"
    hero="weekend/weekend_emailbanner_cta.jpg"
    title="Get in, we're going shopping  road tripping. "
    body="But not before doing a little prep work. Get more from your first summer roadie with these top 5 travel tips."
    button={<Button href="https://b.ewd.io/SleepUS">Shop Offers</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% set name = userAttribute.firstName %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set hertz = root ~ '639&suid=' ~ suid %}"}
    {"{% set hotels = root ~ '514&suid=' ~ suid %}"}
    {"{% set brandless = root ~ '714&suid=' ~ suid %}"}
    {"{% set happysocks = root ~ '789&suid=' ~ suid %}"}
    {"{% set travelocity = root ~ '720&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set hertz = 'https://b.ewd.io/WeekenderHertzUS' %}"}
    {"{% set hotels = ' https://b.ewd.io/WeekenderHotelsUS' %}"}
    {"{% set brandless = 'https://b.ewd.io/WeekenderBrandlessUS' %}"}
    {"{% set happysocks = 'https://b.ewd.io/WeekenderHappySocksUS' %}"}
    {"{% set travelocity = 'https://b.ewd.io/WeekenderTravelocityUS' %}"}
    {'{% endif %}'}

    <Offer
      brand="Tip 1: Plan ahead."
      image="weekend/weekend_hertz.png"
      body="It's true what they say: the early bird gets the worm - and the cheapest car rental. Nab the best deal from Hertz by booking early - we're talking at least 2-3 months in advance, if you can swing it. Check back on the Hertz website regularly, as you can typically swap reservations (for free!) if you find a better rate. Shop through Drop and earn XX when you book with Hertz."
      link="{{ hertz }}"
      button="Rent a car"
    />
      <Offer
      image="weekend/weekend_brandless.png"
      brand="Tip 2: Invest in a pre-packed toiletry bag." 
      body="Find your personal care must-haves - then double up. To save time (and stress) while packing, have a pre-packed toiletry bag at the ready. Stock up on all your on the road essentials from Brandless: the online marketplace that believes better doesn't have to cost more. From Exfoliating White Tea Facial Wipes to Grapefruit Facial Cleanser to Aluminum-Free Deodorant, Brandless has all your top-rated personal care products at your fingertips. Score XX when you shop - only with Drop."
      link="{{ brandless }}"
      button="Get your essentials"
    />
     <Offer
      brand="Tip 3: Tourism hubs are overrated. Opt to stay in a local hotspot. "
      image="weekend/weekend_hotels.png"
      body="We've all been there: when you're travelling, you want to be where the action is. But how many times have you stayed in a hotel a stone's throw away from thousands of other tourists? Do your research and opt for a spot just outside the downtown core — you'll be surprised what a morning walk and less noise will do for your vacation. For the best local gems, search for your destination city via Hotels.com, then use the site's 'Neighbourhood' filter to find your perfect off the beaten path stay."
      link="{{ hotels }}"
      button="Browse local"
    />
    <Offer
      brand="Tip 4: Pack socks by activity - and make them fun."
      image="weekend/weekend_happysocks.png"
      body="How many times have you found yourself ill-equipped on the socks front? For your next weekend away, be sure to map out your activities well in advance, and pack around them. Going on a long hike? Pack a pair of athletic socks from Happy Socks. Going to the opera? Pack a pair of colourful dress socks to make your look pop. Socks don't quite go with your outfit? Go low cut. Take XX points when you shop Happy Socks — only with Drop."
      link="{{ happysocks }}"
      button="Stock up on socks"
    />
    <Offer
      brand="Tip 5: Search for hotel deals on the daily"
      image="weekend/weekend_travelocity.png"
      body="Looking for the cheapest possible stay? For the best daily deals, be sure to bookmark Travelocity (if you find a better rate, they'll match it + refund the difference!). Today only, score a 17% discount on your next stay + XX points when you book through Drop."
      link="{{ travelocity }}"
      button="Get a deal"
      divider={false}
    />
  </DefaultTemplate>
)

export default BlackFridayEmail
