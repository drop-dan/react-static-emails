import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="The coffee trends, how-to's and just in products you need to liven up your morning."
    heroLink="https://b.ewd.io/SleepUS"
    hero="convenience/convenience_email_can.png"
    title="No one likes wasting time and energy on errands."
    body="Turn your life on autopilot with these delivery darlings, designed to make your life a little easier."
    button={<Button href="https://b.ewd.io/SleepUS">Set Me Up</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% set name = userAttribute.firstName %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set gillette = root ~ '848&suid=' ~ suid %}"}
    {"{% set hellofresh = root ~ '470&suid=' ~ suid %}"}
    {"{% set ubereats = root ~ '880&suid=' ~ suid %}"}
    {"{% set barkbox = root ~ '400npm&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set gillette = 'https://b.ewd.io/ConvenienceGilletteCAN18K' %}"}
    {"{% set hellofresh = 'https://b.ewd.io/ConvenienceHelloFreshCAN' %}"}
    {"{% set ubereats = 'https://b.ewd.io/ConvenienceUberEatsCAN' %}"}
    {"{% set barkbox = 'https://b.ewd.io/DeliverBarkBoxCAN' %}"}
    {'{% endif %}'}

    <Offer
      image="convenience/gillette_18000.png"
      title="Your closest shave ever, delivered."
      body="No one wants to spend their Saturday “running errands”. It's Saturday. Saturday's are sacred. Take back your favorite day of the week by automating your basic needs - starting with your morning shave. With Gillette on Demand, you're in the driver's seat. Choose a razor, choose how often you want it, and shave & save. Shipping is always free, and so is every 4th order (when you subscribe). It's the easiest, most convenient way to ensure you're never running low on blades and never compromising your Saturday again."
      link="{{ gillette }}"
      button="Sign Up"
    />
    <Offer
      image="convenience/convenience_hellofresh.png"
      body="Sometimes, the grocery store is out of reach. Looking for someone else to do the healthy meal prep footwork for you? Sign up for HelloFresh and leave your food to the professionals. Every week, you'll get easy-to-follow recipes with clear nutritional info, high-quality ingredients sourced straight from the farm, and a fun experience that may just make you fall in love with cooking again."
      link="{{ hellofresh }}"
      button="Get HelloFresh"
    />
    <Offer
      image="convenience/convenience_emailbanner_barkboxCA.png"
      body="You can't teach old dogs new tricks - but you can get them new treats, delivered monthly. With BarkBox, you'll score some extra points with your pup, and never have to trek to the pet store again. Featuring monthly toys, treats, and surprise goodies delivered straight to your door, BarkBox will give your furry BFF a (better) reason to love the mailman."
      link="{{ barkbox }}"
      button="Join BarkBox"
    />
    <Offer
      image="convenience/convenience_ubereats.png"
      body="Dinner is only a few taps away. From selection to kitchen to no-more-awkward-tipping-at-the-door to table, Uber Eats makes ordering in as easy as 1, 2, eat. Track your order in the app - and on average - expect it within 15 minutes. That's what we call fast food. In the mood for Indian? Thai? Italian? Chinese? Uber Eats has it all - and then some. Order from your fave local watering holes and discover new hotspots you didn't know existed."
      link="{{ ubereats }}"
      button="Order Now"
      divider={false}
    />
    
  </DefaultTemplate>
)

export default BlackFridayEmail
