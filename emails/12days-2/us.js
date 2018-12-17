import React from 'react'
import { Offer, DefaultTemplate, Button, Image } from '../../src/components'

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
     {"{% set sephoraus = root ~ '647&suid=' ~ suid %}"}
     {"{% set samsclub = root ~ '322&suid=' ~ suid %}"}
     {"{% set nike = root ~ '580&suid=' ~ suid %}"}
     {"{% set homedepot = root ~ '803&suid=' ~ suid %}"}
     {"{% set harrys = root ~ '801&suid=' ~ suid %}"}
     {"{% set kobous = root ~ '518&suid=' ~ suid %}"}
     {"{% set firstleaf = root ~ '794&suid=' ~ suid %}"}
     {"{% set giftus = 'https://b.ewd.io/12GiftagramUS' %}"}
     {"{% set rocketus = root ~ '666&suid=' ~ suid %}"}
     {"{% set puma = root ~ '800&suid=' ~ suid %}"}
     {"{% set macys = root ~ '674&suid=' ~ suid %}"}
     {"{% set backcountry = root ~ '687&suid=' ~ suid %}"}
     {'{% else %}'}
     {"{% set sephoraus = 'https://b.ewd.io/12SephoraUS' %}"}
     {"{% set samsclub = 'https://b.ewd.io/12SamsClubUS' %}"}
     {"{% set nike = 'https://b.ewd.io/12NikeUS' %}"}
     {"{% set homedepot = 'https://b.ewd.io/12HomeDepotUS' %}"}
     {"{% set harrys = 'https://b.ewd.io/12HarrysUS' %}"}
     {"{% set kobous = 'https://b.ewd.io/12KoboUS' %}"}
     {"{% set firstleaf = 'https://b.ewd.io/12FirstleafUS' %}"}
     {"{% set giftus = 'https://b.ewd.io/12GiftagramUS' %}"}
     {"{% set rocketus = 'https://b.ewd.io/12RocketmilesUS' %}"}
     {"{% set puma = 'https://b.ewd.io/12PumaUS' %}"}
     {"{% set macys = 'https://b.ewd.io/12MacysUS' %}"}
     {"{% set backcountry = 'https://b.ewd.io/12BackcountryUS' %}"}
     {'{% endif %}'}
 
     <Image href="{{ sephoraus }}" className="width-100" width="600" src="12days-2/6-sephora2.jpg" />
     <Image href="{{ samsclub }}" className="width-100" width="600" src="12days-2/7-samsclub2.jpg" />
     <Image href="{{ nike }}" className="width-100" width="600" src="12days-2/8-nike2.jpg" />
     <Image href="{{ homedepot }}" className="width-100" width="600" src="12days-2/9-homedepot.jpg" />
     <Image href="{{ harrys }}" className="width-100" width="600" src="12days-2/10-harrys2.jpg" />
     <Image href="{{ kobous }}" className="width-100" width="600" src="12days-2/11-kobous.jpg" />
     <Image href="{{ firstleaf }}" className="width-100" width="600" src="12days-2/12-firstleaf2.jpg" />
 
     <p>Missed the first five days? There's still time to score extra points on these top brands.</p>
 
     <Image href="{{ giftus }}" className="width-100" width="600" src="12days-2/1-giftagram2.jpg" />
     <Image href="{{ rocketus }}" className="width-100" width="600" src="12days-2/2-rocketmiles2.jpg" />
     <Image href="{{ puma }}" className="width-100" width="600" src="12days-2/3-puma2.jpg" />
     <Image href="{{ macys }}" className="width-100" width="600" src="12days-2/4-macys2.jpg" />
     <Image href="{{ backcountry }}" className="width-100" width="600" src="12days-2/5-backcountry2.jpg" />
   </DefaultTemplate>
 )

export default CasperEmail
