import React from 'react'
import { DefaultTemplate, Button, Image } from '../../src/components'

const CasperEmail = () => (
  <DefaultTemplate
    preheaderText="6 days left in our 12 days of Gifting! Give the gift of no re-gift, on now thru December 22nd!"
    hero="12days-2/12days-2-header.jpg"
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
    {"{% set gift = 'https://b.ewd.io/12GiftagramCA' %}"}
    {"{% set rocket = root ~ '673&suid=' ~ suid %}"}
    {"{% set under = 'https://b.ewd.io/12UACA' %}"}
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
    {"{% set under = 'https://b.ewd.io/12UACA' %}"}
    {"{% set indigo = 'https://b.ewd.io/12IndigoCA' %}"}
    {"{% set links = 'https://b.ewd.io/12LinksCA' %}"}
    {'{% endif %}'}

    <Image href="{{ sephora }}" className="width-100" width="600" src="12days-2/6-sephora2.jpg" />
    <Image href="{{ andme }}" className="width-100" width="600" src="12days-2/7-23andme2.jpg" />
    <Image href="{{ gap }}" className="width-100" width="600" src="12days-2/8-gap2.jpg" />
    <Image href="{{ hello }}" className="width-100" width="600" src="12days-2/9-hellofresh.jpg" />
    <Image href="{{ groupon }}" className="width-100" width="600" src="12days-2/10-groupon2.jpg" />
    <Image href="{{ kobo }}" className="width-100" width="600" src="12days-2/11-kobo2.jpg" />
    <Image href="{{ keurig }}" className="width-100" width="600" src="12days-2/12-keurig2.jpg" />

    <p>Missed the first five days? There's still time to score extra points on these top brands.</p>

    <Image href="{{ gift }}" className="width-100" width="600" src="12days-2/1-giftagram2.jpg" />
    <Image href="{{ rocket }}" className="width-100" width="600" src="12days-2/2-rocketmiles2.jpg" />
    <Image href="{{ under }}" className="width-100" width="600" src="12days-2/3-ua2.jpg" />
    <Image href="{{ indigo }}" className="width-100" width="600" src="12days-2/4-indigo2.jpg" />
    <Image href="{{ links }}" className="width-100" width="600" src="12days-2/5-links2.jpg" />
  </DefaultTemplate>
)

export default CasperEmail
