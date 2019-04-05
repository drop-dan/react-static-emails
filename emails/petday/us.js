import React from 'react'
import { Offer, DefaultTemplate, Button } from '../../src/components'

const CasperEmail = () => (
  <DefaultTemplate
    preheaderText="Tax season can be taxing. But it doesn't have to be. File H&R Block under: fast, easy & stress-free."
    hero="petday/nationalpetday_emailbanner.jpeg"
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
      tagline="NEW"
      title="Filing your taxes Han Solo? Or getting by with a little help from your tax friends?"
      body="Either way, Block has your back. Only with H&R Block, file for free online with special features like:"
      button={false}
      divider={false}
    />

    <ol>
      <li>Snap a pic W-2 import</li>
     <li>Self-help via H&R Block's help center</li>
      <li>Technical support via chat</li>
    </ol>

    <p>
    If you're a homeowner, freelancer, self-employed, or your taxes are a teensy bit more complicated, take 25% off all H&R Block's online tax filing options - and find the product that works for you.
    </p>

    <p>
    Make your annual headache a thing of the past. 
    </p>

    <Button href="{{  hrblock  }}">File Now</Button>
  </DefaultTemplate>
)

export default CasperEmail
