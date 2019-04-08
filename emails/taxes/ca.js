import React from 'react'
import { Offer, DefaultTemplate, Button } from '../../src/components'

const CasperEmail = () => (
  <DefaultTemplate
    preheaderText="File for free + score 10,000 points. Plus, more money-saving apps to suit your lifestyle."
    hero="taxes/Tax_emailbanner.jpeg"
    title="Dragging your feet all the way to April 30th?"
    body="It turns out - tax season doesn't need to be taxing. Learn where to file + more ways to save."
    button={<Button href="https://b.ewd.io/TaxesUS">Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set turbotax = root ~ '468&suid=' ~ suid %}"}
    {"{% set staples = 'root ~ '679&suid=' ~ suid %}"}
    {"{% set mylo = 'https://b.ewd.io/TaxesMyloCAN' %}"}
    {'{% else %}'}
    {"{% set turbotax = 'https://b.ewd.io/TaxesTurboTaxCAN' %}"}
    {"{% set staples = 'https://b.ewd.io/TaxesStaplesCAN' %}"}
    {"{% set mylo = 'https://b.ewd.io/TaxesMyloCAN' %}"}
    {'{% endif %}'}

    <Offer
      brand="TurboTax"
      pointRate="10,000"
      title="When you finally have to file your taxes sans Mom & Dad, turn to TurboTax, Canada #1 tax software."
      body="Freelance? Work for yourself? Own a home? Not quite sure? With TurboTax's tiered tax options, you can file your taxes online, in a snap. Upload last year's tax info in a hot minute from other competitors, and have your return double-checked for errors by a TurboTax Live Expert to make sure you get the biggest refund possible, guaranteed."
      button="File Now"
      link="{{  turbotax  }}"
    />

    <Offer
      brand="Staples"
      pointRate="40,000"
      title="That was easy."
      body="Easily prepare your taxes online by choosing a program that works for your lifestyle (and operating system) from Staples. With leading brands such as UFILE and Intuit QuickBooks + everyday low prices, you can't go wrong."
      button="Shop Staples"
      link="{{  staples  }}"
    />

    <Offer
      brand="Mylo"
      pointRate="15,000"
      title="Have change lying around? Skip the piggy bank and open an account with Mylo, instead."
      body="An easy-to-use app that makes investing affordable for everyone, Mylo rounds your purchases up to the nearest dollar and invests the spare change. It's intuitive, smart and secure, so you can reach your financial goals without having to change your lifestyle."
      button="Get Started Today"
      link="{{  mylo  }}"
      divider={false}
    />
 
  </DefaultTemplate>
)

export default CasperEmail
