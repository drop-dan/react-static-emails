import React from 'react'
import { DefaultTemplate, Offer, Image } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="Score the best deals on your favorite brands - only with Drop. Shop our picks below via desktop, tablet, mobile - or however else you like to shop."
    heroLink="https://b.ewd.io/BFLastChance2"
    hero="black-friday-last-chance/header.gif"
    title="Hurry, promotions end tonight ⏳"
    body="Score the best deals on your favorite brands - only with Drop. Shop our picks below via desktop, tablet, mobile - or however else you like to shop."
    footer={
      <Image
        href="https://b.ewd.io/BFLastChance2"
        width="600"
        height="300"
        src="black-friday-last-chance/footer.jpg"
        style={{ width: '100%', maxWidth: 600 }}
      />
    }
  >
    {'{% for offer in userAttribute.blackFridayOffers %}'}
    {"{% set offerId = offer | split(':') | first | string %}"}
    {"{% set userOfferId = offer | split(':') | last | string %}"}
    {
      "{% set offerUrl = 'https://www.earnwithdrop.com/user_offers/' ~ userOfferId ~ '/start?suid=' ~ userAttribute.suid %}"
    }
    {"{% if offerId == '655' %}"}
    <Offer
      brand="New Balance"
      body="LAST CHANCE for 25% off and 10% back in points with code BLACKFRIDAY25. Take it."
      pointRate="100 per $1"
      oldRate="40 per $1"
      link="{{ offerUrl }}"
    />
    {"{% elif offerId == '399' %}"}
    <Offer
      brand="Barkbox"
      body="December's limited edition Grinch-themed Barkbox has your pup's name on it. Don't miss out on an extra FREE toy in every box - all through the year. Plus, take $40 back in points."
      pointRate="40,000"
      oldRate="20,000"
      link="{{ offerUrl }}"
    />
    {"{% elif offerId == '743' %}"}
    <Offer
      brand="Hayneedle"
      body="Outfit your home in holiday and save up to 60%! Shop Hayneedle's Christmas trees, indoor and outdoor fire pits, and more."
      pointRate="80 PER $1"
      oldRate="70 PER $1"
      link="{{ offerUrl }}"
    />
    {"{% elif offerId == '463' %}"}
    <Offer
      brand="Gap"
      body="Your sweater collection just got a little thicker. Stay cozy in the cold with Gap's classic knits + today only, score 40% off."
      pointRate="100 PER $1"
      oldRate="50 PER $1"
      link="{{ offerUrl }}"
    />
    {"{% elif offerId == '647' %}"}
    <Offer
      brand="Sephora"
      body="Deals that will make you blush. The best stocking stuffers for every beauty buff on your list - now for $15 and under (while supplies last)."
      pointRate="80 PER $1"
      oldRate="40 PER $1"
      link="{{ offerUrl }}"
    />
    {"{% elif offerId == '674' %}"}
    <Offer
      brand="Macy’s"
      body="The store that has it all has you covered. Save on all your festive faves + take 20% off with code BLKFRI."
      pointRate="50 PER $1"
      oldRate="30 PER $1"
      link="{{ offerUrl }}"
    />
    {"{% elif offerId == '778' %}"}
    <Offer
      brand="Lululemon"
      body="Save up to 50% off select gear designed to last keep you moving, year-round. Eat, sleep, eggnog, yoga."
      pointRate="50 PER $1"
      oldRate="40 PER $1"
      link="{{ offerUrl }}"
    />
    {"{% elif offerId == '314' %}"}
    <Offer
      brand="Bloomingdales"
      body="Add a little luxe to your everyday with a signature brown bag to boot. Plus, score savings of up to 60% on home, fashion, accessories, and more."
      pointRate="15 PER $1"
      link="{{ offerUrl }}"
    />

    {"{% elif offerId == '445' %}"}
    <Offer
      brand="Forever 21"
      body="Don't be a holiday party outfit repeater. At up to 70% off, it's a no-brainer. Hurry, deals end SOON "
      pointRate="80 PER $1"
      oldRate="40 PER $1"
      href="{{ offerUrl }}"
    />
    {'{% endif %}'}
    {'{% endfor %}'}

    <h2>Up to DOUBLE the points + major savings to boot.</h2>
    <p>
      Shop these deals and many more from brands like BarkBox, Tatcha, Lululemon, Tillys, S'well,
      Ulta, Kobo, and more - only with Drop.
    </p>
  </DefaultTemplate>
)

export default BlackFridayEmail
