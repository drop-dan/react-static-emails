import React from 'react'
import { Offer, DefaultTemplate, Button } from '../../src/components'

const CasperEmail = () => (
  <DefaultTemplate
    preheaderText="Tax season can be taxing. But it doesn't have to be. File H&R Block under: fast, easy & stress-free."
    hero="taxes/Tax_emailbanner.jpeg"
    title="Glad we spent so much time learning Hot Cross Buns on the recorder."
    body="But it turns out - tax season doesn't need to be taxing. Learn where to file + more ways to save."
    button={<Button href="{{  hrblock  }}">Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set taxact = root ~ '890&suid=' ~ suid %}"}
    {"{% set blooom = 'https://b.ewd.io/TaxesBlooom' %}"}
    {"{% set stash = 'https://b.ewd.io/TaxesStash' %}"}
    {'{% else %}'}
    {"{% set taxact = 'https://b.ewd.io/TaxAct' %}"}
    {"{% set blooom = 'https://b.ewd.io/TaxesBlooom' %}"}
    {"{% set stash = 'https://b.ewd.io/TaxesStash' %}"}
    {'{% endif %}'}

    <Offer
      brand="TaxAct"
      pointRate="10,000"
      tagline="NEW"
      title="Your taxes are due next week. Haven't started? Not to worry."
      body="Lean on TaxAct: the only tax filing platform with 7 years of access to your return, free account support, a maximum refund guarantee, and a $100K accuracy guarantee. Simple returns are free, and take just 10 minutes. "
      button="File For Free"
      link="{{  taxact  }}"
    />

    <Offer
      brand="Blooom"
      pointRate="40,000"
      title="Get your 401K into full bloom with Blooom."
      body="All you have to do is sign up for an account, link your existing retirement account to the secure app, and find the best 401K funds for your unique lifestyle and goals. With all the power at your fingerprints, Blooom lets you check in regularly on how your investments are doing - totally free."
      button="Grow Your 401K"
      link="{{  blooom  }}"
    />

    <Offer
      brand="Stash"
      pointRate="15,000"
      title="Have $5 lying around? Skip the grande latte and open an account with Stash, instead."
      body="An investment app for people who don't know where to start, Stash lets you take control of your finances in minutes - with no add-on commissions or trading fees, and ongoing tips and tricks to build your portfolio on your own terms."
      button="Open An Account"
      link="{{  stash  }}"
      divider={false}
    />
 
  </DefaultTemplate>
)

export default CasperEmail
