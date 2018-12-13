import React from 'react'
import { Offer, DefaultTemplate, Button, Image } from '../../src/components'

const CasperEmail = () => (
  <DefaultTemplate
    preheaderText="6 days left in our 12 days of Gifting! Give the gift of no re-gift, on now thru December 22nd!"
    hero="12days/12days-header.jpg"
    title="Missed someone on your list? OMG, panic. Kidding. You've got time."
    body="6 days left in our 12 days of Gifting! Give the gift of no re-gift, on now thru December 22nd!"
    button={<Button>Shop All</Button>}
  >
      {'{% for offer in userAttribute.blackFridayOffers %}'}
    {"{% set offerId = offer | split(':') | first | string %}"}
    {"{% set userOfferId = offer | split(':') | last | string %}"}
    {
      "{% set offerUrl = 'https://www.earnwithdrop.com/user_offers/' ~ userOfferId ~ '/start?suid=' ~ userAttribute.suid %}"
    }
    {"{% if offerId == '649' %}"}
       <Image
    href="hhttps://b.ewd.io/12SephoraCA"
    className="width-100"
    width="600"
    src="12days/6-sephora.jpg"
    />
    {"{% if offerId == '799' %}"}
      <Image
    href="https://b.ewd.io/1223andme"
    className="width-100"
    width="600"
    src="12days/7-23andme.jpg"
    />
    {"{% if offerId == '475' %}"}
      <Image
    href="https://b.ewd.io/12GapCA"
    className="width-100"
    width="600"
    src="12days/8-gap.jpg"
    />
    {"{% if offerId == '470' %}"}
      <Image
    href="https://b.ewd.io/12HelloFreshCA"
    className="width-100"
    width="600"
    src="12days/9-hellofresh.jpg"
    />
    {"{% if offerId == '537' %}"}
      <Image
    href="https://b.ewd.io/12GrouponCA"
    className="width-100"
    width="600"
    src="12days/10-groupon.jpg"
    />
    {"{% if offerId == '519' %}"}
      <Image
    href="https://b.ewd.io/12KoboCA"
    className="width-100"
    width="600"
    src="12days/11-koboca.jpg"
    />
    {"{% if offerId == '494' %}"}
      <Image
    href="https://b.ewd.io/12KeurigCA"
    className="width-100"
    width="600"
    src="12days/12-keurig.jpg"
    />

    <p>
    Missed Days 1-6? There's still time to score extra points.
    </p>
    {"{% if offerId == '319' %}"}
          <Image
    href="https://b.ewd.io/12GiftagramCA"
    className="width-100"
    width="600"
    src="12days/1-giftagram.jpg"
    />
    {"{% if offerId == '673' %}"}
          <Image
    href="https://b.ewd.io/12RocketmilesCA"
    className="width-100"
    width="600"
    src="12days/2-rocketmiles.jpg"
    /> 
    {"{% if offerId == '108' %}"}
       <Image
    href="https://b.ewd.io/12UnderArmourCA"
    className="width-100"
    width="600"
    src="12days/3-underarmour.jpg"
    />
    {"{% if offerId == '454' %}"}
       <Image
    href="https://b.ewd.io/12IndigoCA"
    className="width-100"
    width="600"
    src="12days/4-indigo.jpg"
    />
    {"{% if offerId == '681' %}"}
       <Image
    href="https://b.ewd.io/12LinksCA"
    className="width-100"
    width="600"
    src="12days/5-linkslondon.jpg"
    />

  </DefaultTemplate>
)

export default CasperEmail
