import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="It's Wellness Month at Drop. TThis week, take our top tips and tricks for your best snooze ever straight to the bed."
    heroLink="https://b.ewd.io/SleepCA"
    hero="wellness-sleep/wellness_sleep_emailbanner.gif"
    title="It's Wellness Month at Drop."
    body="This week, take our top tips and tricks for your best snooze ever straight to the bed."
    button={<Button href="https://b.ewd.io/SleepCA">Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set casper = root ~ '203&suid=' ~ suid %}"}
    {"{% set indigo = root ~ '454&suid=' ~ suid %}"}
    {"{% set well = root ~ '473&suid=' ~ suid %}"}
    {"{% set asos = root ~ '539&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set casper = 'https://b.ewd.io/SleepCasperCA' %}"}
    {"{% set indigo = 'https://b.ewd.io/SleepIndigoCA' %}"}
    {"{% set well = 'https://b.ewd.io/SleepWellCA' %}"}
    {"{% set asos = 'https://b.ewd.io/SleepASOSCA' %}"}
    {'{% endif %}'}

    <Offer
      brand="Tip 1: Get in the sleep-centric mindset."
      body="We recommend The Sleep Revolution: Transforming Your Life, One Night at a Time for Ariana Huffington's take on how our sleep dismissive culture impacts our health, relationships, and overall happiness."
      image="wellness-sleep/Sleep_bookCA.jpg"
      link="{{ indigo }}"
    />
    <Offer
      brand="Tip 2: When sheep aren't helping, accessorize."
      body="Some nights don't play nice. When you're at your wits end with sheep counting, try sleep's best accessories on for size. Ear plugs, sleep masks, lavender pillow spray, essential oils, and melatonin are your best bets for a full night of shut eye."
      image="wellness-sleep/eye_maskCA.jpg"
      link="{{ well }}"
    />
    <Offer
      brand="Tip 3: Invest in a quality snooze."
      tagline="Save $100 on orders of $1000+ with code: WINTER"
      body="All the lavender sprays in the world can't save a bed from the 1970s. Upgrade your springboard to our favourite classic from Casper: its most popular bed and namesake, the Casper. The modern mattress differentiates itself with zoned support, pressure relief, and 4 layers of premium foam. We can get on board with 4 layers of foam."
      image="wellness-sleep/Casper_mattress.jpg"
      link="{{ casper }}"
      note="Offer ends 1/21. See site for details."
    />
    <Offer
      brand="Tip 4: Zzz and look good while you're at it."
      body="Take a cue from Marie Kondo: if your holey jammies aren't sparking joy, ditch them for a matching set from ASOS. We recommend satin for added snooze-time."
      image="wellness-sleep/ASOS_PJs.jpg"
      link="{{ asos }}"
      divider={false}
    />
  </DefaultTemplate>
)

export default BlackFridayEmail
