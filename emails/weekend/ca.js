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
    {"{% set enterprise = root ~ '388&suid=' ~ suid %}"}
    {"{% set bodyshop = root ~ '212&suid=' ~ suid %}"}
    {"{% set homeaway = root ~ '434&suid=' ~ suid %}"}
    {"{% set well = root ~ '473&suid=' ~ suid %}"}
    {"{% set hotels = root ~ '538&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set enterprise = 'https://b.ewd.io/WeekenderEnterpriseCA' %}"}
    {"{% set bodyshop = 'https://b.ewd.io/WeekenderTheBodyShopCA' %}"}
    {"{% set homeaway = 'https://b.ewd.io/WeekenderHomeAwayCA' %}"}
    {"{% set well = 'https://b.ewd.io/WeekenderWellCA' %}"}
    {"{% set hotels = 'https://b.ewd.io/WeekenderHotelsCA' %}"}
    {'{% endif %}'}

    <Offer
      brand="Tip 1: Plan ahead."
      image="weekend/weekend_enterprise.png"
      body="It's true what they say: the early bird gets the worm - and the cheapest car rental. Nab the best deal from Enterprise by booking early - we're talking at least 2-3 months in advance, if you can swing it. Keep your eyes peeled for Enterprise's “Weekend Special”, which offers special deals on Friday through Monday rentals at participating locations. Shop through Drop and earn XX when you book with Enterprise."
      link="{{ enterprise }}"
      button="Rent a car"
    />
      
    <Offer
      brand="Tip 2: Tourism hubs are overrated. Opt to stay in a local hotspot. "
      image="weekend/weekend_hotels.png"
      body="We've all been there: when you're travelling, you want to be where the action is. But how many times have you stayed in a hotel a stone's throw away from thousands of other tourists? Do your research and opt for a spot just outside the downtown core — you'll be surprised what a morning walk and less noise will do for your vacation. For the best local gems, search for your destination city via Hotels.com (http://hotels.com/), then use the site's 'Neighbourhood' filter to find your perfect off the beaten path stay."
      link="{{ hotels }}"
      button="Browse local"
      />

      <Offer
      image="weekend/weekend_bodyshop2.png"
      brand="Tip 3: Invest in a pre-packed toiletry bag - and pack plastic wrap (trust us)." 
      body="Find your personal care must-haves - then double up. To save time (and stress) while packing, have a pre-packed toiletry bag at the ready - at all times. Stock up on all your on the road essentials from The Body Shop: the cruelty-free beauty brand that's been championing for no more animal testing since the 80s. From Wild Argan Oil Hand Cream to Satsuma Shower Gel to Coco Calming Face Mist, The Body Shop has all your top-rated personal care products at your fingertips. Score XX when you shop - only with Drop. (And be sure to pack plastic wrap or wax paper for any unexpected spills!)"
      link="{{ bodyshop }}"
      button="Get your essentials"
    />
    <Offer
      brand="Tip 4: Don't skimp on snacks."
      image="weekend/weekend_well.png"
      body="No one likes a hangry passenger. Curb your munchies by packing easy to eat on-the-go snacks from Well.ca (http://well.ca/) . The online marketplace serves up healthy protein bars, granola, and dried fruit, nuts and seeds, so you won't have to settle for gas station jerky and chips ever again."
      link="{{ well }}"
      button="Stock up on socks"
    />
    <Offer
      brand="Tip 5: For bachelor + bachelorette parties, get a house."
      image="weekend/weekend_homeaway2.png"
      body="Organizing a hotel block for a large group of people is exhausting - not to mention incredibly difficult to ringmaster. For all bachelor and bachelorette-related roadies, turn to HomeAway for a stress-free stay. Filter your hunt by searching for homes and cabins within your budget, and book for your new weekend nest in a few quick clicks."
      link="{{ homeaway }}"
      button="Get a deal"
      divider={false}
    />
  </DefaultTemplate>
)

export default BlackFridayEmail
