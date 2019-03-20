import React from 'react'
import { Offer, DefaultTemplate, Button } from '../../src/components'

const CasperEmail = () => (
  <DefaultTemplate
    preheaderText="Tax season can be taxing. But it doesn't have to be. File H&R Block under: fast, easy & stress-free."
    hero="hrblock/hrblock_email.gif"
    title="Tax season can be taxing."
    body="But it doesn't have to be. File H&R Block under: fast, easy & stress-free."
    button={<Button href="{{  hrblock  }}">Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set hrblock = root ~ '821&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set hrblock = 'https://b.ewd.io/HRBlockUS' %}"}
    {'{% endif %}'}

    <Offer
      brand="H&R Block"
      pointRate="10,000"
      oldRate="5,000"
      divider={false}
      halfWidth
    />
    <Offer
      brand="H&R Block"
      pointRate="10,000"
      oldRate="5,000"
      divider={false}
      halfWidth
    />

  </DefaultTemplate>
)

export default CasperEmail
