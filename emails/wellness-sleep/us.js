import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="It's Wellness Month at Drop. TThis week, take our top tips and tricks for your best snooze ever straight to the bed."
    heroLink="https://b.ewd.io/SleepUS"
    hero="wellness-sleep/wellness_sleep_emailbanner.gif"
    title="It's Wellness Month at Drop."
    body="This week, take our top tips and tricks for your best snooze ever straight to the bed."
    button={<Button href="https://b.ewd.io/SleepUS">Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set casper = root ~ '457&suid=' ~ suid %}"}
    {"{% set barnes = root ~ '427&suid=' ~ suid %}"}
    {"{% set jet = root ~ '513&suid=' ~ suid %}"}
    {"{% set asos = root ~ '516&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set casper = 'https://b.ewd.io/SleepCasperUS' %}"}
    {"{% set barnes = 'https://b.ewd.io/SleepBarnesUS' %}"}
    {"{% set jet = 'https://b.ewd.io/SleepJetUS' %}"}
    {"{% set asos = 'https://b.ewd.io/SleepASOSUS' %}"}
    {'{% endif %}'}

    <Offer
      brand="Tip 1: Get in the sleep-centric mindset."
      image="wellness-sleep/Sleep_BookUS.jpg"
      body="We recommend The Sleep Revolution: Transforming Your Life, One Night at a Time for Ariana Huffington's take on how our sleep dismissive culture impacts our health, relationships, and overall happiness."
      link="{{ barnes }}"
    />
    <Offer
      brand="Tip 2: When sheep aren't helping, accessorize."
      image="wellness-sleep/EyeMask.jpg"
      body="Some nights don't play nice. When you're at your wits end with sheep counting, try sleep's best accessories on for size. Ear plugs, sleep masks, lavender pillow spray, essential oils and melatonin are your best bets for a full night of shut eye."
      link="{{ jet }}"
    />
    <Offer
      image="wellness-sleep/Mattress_Casper.jpg"
      brand="Tip 3: Invest in a quality snooze."
      tagline="Save $100 on orders of $1000* with code: WINTER"
      body="All the lavender sprays in the world can't save a bed from the 1970s. Upgrade your springboard to our favourite classic from Casper: its most popular bed and namesake, the Casper. The modern mattress differentiates itself with zoned support, pressure relief, and 4 layers of premium foam. We can get on board with 4 layers of foam."
      note="Ends 1/21. See site for details."
      link="{{ casper }}"
    />
    <Offer
      brand="Tip 4: Zzz and look good while you're at it."
      image="wellness-sleep/ASOS_PJs.jpg"
      body="Take a cue from Marie Kondo: if your holey jammies aren't sparking joy, ditch them for a matching set from ASOS. We recommend satin for added snooze-time."
      link="{{ asos }}"
      divider={false}
    />
  </DefaultTemplate>
)

export default BlackFridayEmail
