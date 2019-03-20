import React from 'react'
import { HeroImage, DefaultTemplate, Offer, Button } from '../../src/components'

const ThanksGivingEmail = () => (
  <DefaultTemplate
    preheaderText="For a limited time, earn 300 points per $1 and score fresh frames for Spring."
    hero="warby2/warbyparker_emailbanner.gif"
    title="Spring cleaning starts with your specs."
    body="Fresh colors, prints, and shapes to carry you through 2019 in style. Plus, earn 300 points per $1, only for a limited time."
    button={<Button href="https://b.ewd.io/SpringWarbyUS">Shop All Frames</Button>}
    >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set warby = root ~ '517&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set warby = 'https://b.ewd.io/SpringWarbyUS' %}"}
    {'{% endif %}'}

    <Offer
      image="warby2/warby_glasses.jpg"
      tagline="Neutral"
      title="Felix"
      body="Not quite square, not quite round. Felix looks great on pretty much everyone."
      imageWidth="500"
      imageHeight="250"
      button="Shop Now"
      link="{{ warby }}"
    />
    <Offer
      image="warby2/warby_sunglasses.jpg"
      tagline="Neutral"
      title="Carey"
      body="Block out 100% of UVA and UVB rays in Carey. The circular, slightly offbeat frames aren't for the faint of heart."
      imageWidth="500"
      imageHeight="250"
      button="Shop Now"
      link="{{ warby }}"
    />
    <Offer
      image="warby2/warby_maleglasses.jpg"
      tagline="For Him"
      title="Butler"
      body="Pairs best with a British accent, scotch, and a leather-bound book. Butler won't make you smarter, but you'll certainly look the part."
      imageWidth="500"
      imageHeight="250"
      button="Shop Now"
      link="{{ warby }}"
    />
    <Offer
      image="warby2/warby_msunglasses.jpg"
      tagline="For Him"
      title="Harris"
      body="Classic frames for the classic guy. Toss on a blazer and jeans and you've got Tom Cruise at his 80s finest."
      imageWidth="500"
      imageHeight="250"
      button="Shop Now"
      link="{{ warby }}"
    />
    <Offer
      image="warby2/warby_fglasses.jpg"
      tagline="For Her"
      title="Zelda"
      body="This Leith Clark collab is all kinds of unique. Reach for Zelda if you love a good cat-eye, made all the more eye-catching from its two-tone design."
      imageWidth="500"
      imageHeight="250"
      button="Shop Now"
      link="{{ warby }}"
    />
    <Offer
      image="warby2/warby_femalesunglasses.jpg"
      tagline="For Her"
      title="Logan"
      body="Effortless cool, personified. Logan's circular, dark design is playful and smart."
      imageWidth="500"
      imageHeight="250"
      button="Shop Now"
      link="{{ warby }}"
      divider={false}
    />

  </DefaultTemplate>
)

export default ThanksGivingEmail
