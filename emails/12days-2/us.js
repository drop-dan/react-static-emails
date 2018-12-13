import React from 'react'
import { Offer, DefaultTemplate, Button, Image } from '../../src/components'

const CasperEmail = () => (
  <DefaultTemplate
    preheaderText="12 days. 12 special offers. Check back daily for limited time offers, on now thru December 22nd!"
    hero="12days/12days-header.jpg"
    title="This holiday season, give the gift of no re-gift."
    body="12 days. 12 special offers. Check back daily for limited time offers, on now thru December 22nd!"
    button={<Button>Shop All</Button>}
  >
      <Image
    href="https://b.ewd.io/12GiftagramUS"
    className="width-100"
    width="600"
    src="12days/1-giftagram.jpg"
    />

          <Image
    href="https://b.ewd.io/12RocketmilesUS"
    className="width-100"
    width="600"
    src="12days/2-rocketmiles.jpg"
    /> 

       <Image
    href="https://b.ewd.io/12PumaUS"
    className="width-100"
    width="600"
    src="12days/3-puma.jpg"
    />

       <Image
    href="https://b.ewd.io/12MacysUS"
    className="width-100"
    width="600"
    src="12days/4-macys.jpg"
    />

       <Image
    href="https://b.ewd.io/12BackcountryUS"
    className="width-100"
    width="600"
    src="12days/5-backcountry.jpg"
    />

       <Image
    href="https://b.ewd.io/12SephoraUS"
    className="width-100"
    width="600"
    src="12days/6-sephora.jpg"
    />

           <Image
    href="https://b.ewd.io/12SamsClubUS"
    className="width-100"
    width="600"
    src="12days/7-samsclub.jpg"
    />

           <Image
    href="https://b.ewd.io/12NikeUS"
    className="width-100"
    width="600"
    src="12days/8-nike.jpg"
    />

           <Image
    href="https://b.ewd.io/12HomeDepotUS"
    className="width-100"
    width="600"
    src="12days/9-homedepot.jpg"
    />

           <Image
    href="https://b.ewd.io/12HarrysUS"
    className="width-100"
    width="600"
    src="12days/10-harrys.jpg"
    />

               <Image
    href="https://b.ewd.io/12KoboUS"
    className="width-100"
    width="600"
    src="12days/11-kobo.jpg"
    />

               <Image
    href="https://b.ewd.io/12FirstleafUS"
    className="width-100"
    width="600"
    src="12days/12-firstleaf.jpg"
    />

  </DefaultTemplate>
)

export default CasperEmail
