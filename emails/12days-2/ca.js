import React from 'react'
import { DefaultTemplate, Button, Image } from '../../src/components'

const CasperEmail = () => (
  <DefaultTemplate
    preheaderText="6 days left in our 12 days of Gifting! Give the gift of no re-gift, on now thru December 22nd!"
    hero="12days/12days-header.jpg"
    title="Missed someone on your list? OMG, panic. Kidding. You've got time."
    body="6 days left in our 12 days of Gifting! Give the gift of no re-gift, on now thru December 22nd!"
    button={<Button>Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set sephora = root ~ '649&suid=' ~ suid %}"}
    {"{% set andme = root ~ '799&suid=' ~ suid %}"}
    {"{% set gap = root ~ '475&suid=' ~ suid %}"}
    {"{% set hello = root ~ '470&suid=' ~ suid %}"}
    {"{% set groupon = root ~ '537&suid=' ~ suid %}"}
    {"{% set kobo = root ~ '519&suid=' ~ suid %}"}
    {"{% set keurig = root ~ '494&suid=' ~ suid %}"}
    {"{% set gift = root ~ '319&suid=' ~ suid %}"}
    {"{% set rocket = root ~ '673&suid=' ~ suid %}"}
    {"{% set under = root ~ '108&suid=' ~ suid %}"}
    {"{% set indigo = root ~ '454&suid=' ~ suid %}"}
    {"{% set links = root ~ '681&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set sephora = 'https://b.ewd.io/12SephoraCA' %}"}
    {"{% set andme = 'https://b.ewd.io/1223andme' %}"}
    {"{% set gap = 'https://b.ewd.io/12GapCA' %}"}
    {"{% set hello = 'https://b.ewd.io/12HelloFreshCA' %}"}
    {"{% set groupon = 'https://b.ewd.io/12GrouponCA' %}"}
    {"{% set kobo = 'https://b.ewd.io/12KoboCA' %}"}
    {"{% set keurig = 'https://b.ewd.io/12KeurigCA' %}"}
    {"{% set gift = 'https://b.ewd.io/12GiftagramCA' %}"}
    {"{% set rocket = 'https://b.ewd.io/12RocketmilesCA' %}"}
    {"{% set under = 'https://b.ewd.io/12UnderArmourCA' %}"}
    {"{% set indigo = 'https://b.ewd.io/12IndigoCA' %}"}
    {"{% set links = 'https://b.ewd.io/12LinksCA' %}"}
    {'{% endif %}'}

    <Image href="{{ sephora }}" className="width-100" width="600" src="12days/6-sephora.jpg" />
    <Image href="{{ andme }}" className="width-100" width="600" src="12days/7-23andme.jpg" />
    <Image href="{{ gap }}" className="width-100" width="600" src="12days/8-gap.jpg" />
    <Image href="{{ hello }}" className="width-100" width="600" src="12days/9-hellofresh.jpg" />
    <Image href="{{ groupon }}" className="width-100" width="600" src="12days/10-groupon.jpg" />
    <Image href="{{ kobo }}" className="width-100" width="600" src="12days/11-koboca.jpg" />
    <Image href="{{ keurig }}" className="width-100" width="600" src="12days/12-keurig.jpg" />

    <p>Missed Days 1-6? There's still time to score extra points.</p>

    <Image href="{{ gift }}" className="width-100" width="600" src="12days/1-giftagram.jpg" />
    <Image href="{{ rocket }}" className="width-100" width="600" src="12days/2-rocketmiles.jpg" />
    <Image href="{{ under }}" className="width-100" width="600" src="12days/3-underarmour.jpg" />
    <Image href="{{ indigo }}" className="width-100" width="600" src="12days/4-indigo.jpg" />
    <Image href="{{ links }}" className="width-100" width="600" src="12days/5-linkslondon.jpg" />
  </DefaultTemplate>
)

export default CasperEmail
