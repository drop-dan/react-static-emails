import React from 'react'
import { Main, Header, HeroImage, OfferBlurb, Footer, Item, Image } from '../../src/components'

const BlackFridayEmail = () => (
  <Main preheaderText="Score the best deals on your favorite brands - only with Drop. Shop our picks below via desktop, tablet, mobile - or however else you like to shop.">
    <Header />

    <HeroImage href="https://b.ewd.io/BFLastChance2" image="black-friday-last-chance/header.gif" />

    <div className="p2 mx-auto" style={{ maxWidth: 480 }}>
      <OfferBlurb
        title="Hurry, promotions end tonight ⏳"
        description="Score the best deals on your favorite brands - only with Drop. Shop our picks below via desktop, tablet, mobile - or however else you like to shop."
      />

      <div className="divider" />
      {'{% for offer in userAttribute.blackFridayOffers %}'}
      {"{% set offerId = offer | split(':') | first | string %}"}
      {"{% set userOfferId = offer | split(':') | last | string %}"}
      {
        "{% set offerUrl = 'https://www.earnwithdrop.com/user_offers/' ~ userOfferId ~ '/start?suid=' ~ userAttribute.suid %}"
      }
      {"{% if offerId == '655' %}"}
      <Item
        logo="logos/newbalance.png"
        brandName="New Balance"
        body="LAST CHANCE for 25% off and 10% back in points with code BLACKFRIDAY25. Take it."
        button="Shop Now"
        pointRate="100 per $1"
        oldRate="40 per $1"
        link="{{ offerUrl }}"
      />
      {"{% elif offerId == '399' %}"}
      <Item
        logo="logos/barkbox.png"
        brandName="Barkbox"
        body="December's limited edition Grinch-themed Barkbox has your pup's name on it. Don't miss out on an extra FREE toy in every box - all through the year. Plus, take $40 back in points."
        button="Shop Now"
        pointRate="40,000"
        oldRate="20,000"
        link="{{ offerUrl }}"
      />
      {"{% elif offerId == '743' %}"}
      <Item
        logo="logos/hayneedle.png"
        brandName="Hayneedle"
        body="Outfit your home in holiday and save up to 60%! Shop Hayneedle's Christmas trees, indoor and outdoor fire pits, and more."
        pointRate="80 PER $1"
        oldRate="70 PER $1"
        button="Shop Now"
        link="{{ offerUrl }}"
      />
      {"{% elif offerId == '463' %}"}
      <Item
        logo="logos/gap.png"
        brandName="Gap"
        body="Your sweater collection just got a little thicker. Stay cozy in the cold with Gap's classic knits + today only, score 40% off."
        pointRate="100 PER $1"
        oldRate="50 PER $1"
        button="Shop Now"
        link="{{ offerUrl }}"
      />
      {"{% elif offerId == '647' %}"}
      <Item
        logo="logos/sephora.png"
        brandName="Sephora"
        body="Deals that will make you blush. The best stocking stuffers for every beauty buff on your list - now for $15 and under (while supplies last)."
        pointRate="80 PER $1"
        oldRate="40 PER $1"
        button="Shop Now"
        link="{{ offerUrl }}"
      />
      {"{% elif offerId == '674' %}"}
      <Item
        logo="logos/macys.png"
        brandName="Macy’s"
        body="The store that has it all has you covered. Save on all your festive faves + take 20% off with code BLKFRI."
        pointRate="50 PER $1"
        oldRate="30 PER $1"
        button="Shop Now"
        link="{{ offerUrl }}"
      />
      {"{% elif offerId == '778' %}"}
      <Item
        logo="logos/lululemon.png"
        brandName="Lululemon"
        body="Save up to 50% off select gear designed to last keep you moving, year-round. Eat, sleep, eggnog, yoga."
        pointRate="50 PER $1"
        oldRate="40 PER $1"
        button="Shop Now"
        link="{{ offerUrl }}"
      />
      {"{% elif offerId == '314' %}"}
      <Item
        logo="logos/bloomingdales.png"
        brandName="Bloomingdales"
        body="Add a little luxe to your everyday with a signature brown bag to boot. Plus, score savings of up to 60% on home, fashion, accessories, and more."
        button="Shop Now"
        pointRate="15 PER $1"
        link="{{ offerUrl }}"
      />

      {"{% elif offerId == '445' %}"}
      <Item
        logo="logos/forever21.png"
        brandName="Forever 21"
        body="Don't be a holiday party outfit repeater. At up to 70% off, it's a no-brainer. Hurry, deals end SOON "
        button="Shop Now"
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
    </div>

    <Image
      href="https://b.ewd.io/BFLastChance2"
      width="600"
      height="300"
      src="black-friday-last-chance/footer.jpg"
      style={{ width: '100%', maxWidth: 600 }}
    />

    <Footer border={false} />
  </Main>
)

export default BlackFridayEmail
