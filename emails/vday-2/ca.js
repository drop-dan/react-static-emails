import React from 'react'
import { Offer, DefaultTemplate, Button, Image } from '../../src/components'

const CasperEmail = () => (
   <DefaultTemplate
     preheaderText="Be their Valentine - and keep it that way. Shop with Drop for last minute gifts to show that special someone just how much you care."
     hero="vday-2/vday_emailbanner.gif"
     title="Whew, that was a close one."
     body="Be their Valentine - and keep it that way. Last minute gifts to show that special someone just how much you care (not bad for the 'gram, either)."
     divider={false}
   >
     {'{% set suid = userAttribute.suid %}'}
     {'{% if suid is defined %}'}
     {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
     {"{% set giftagram = 'https://b.ewd.io/VdayGiftagramCAN' %}"}
     {"{% set indigo = root ~ '454&suid=' ~ suid %}"}
     {"{% set ubereats = 'https://b.ewd.io/vdayubereatsCA' %}"}
     {"{% set groupon = root ~ '537&suid=' ~ suid %}"}
     {"{% set seatgeek = root ~ '540&suid=' ~ suid %}"}
     {'{% else %}'}
     {"{% set giftagram = 'https://b.ewd.io/VdayGiftagramCAN' %}"}
     {"{% set indigo = 'https://b.ewd.io/VdayIndigo' %}"}
     {"{% set ubereats = 'https://b.ewd.io/vdayubereatsCA' %}"}
     {"{% set groupon = 'https://b.ewd.io/VdayGrouponCAN' %}"}
     {"{% set seatgeek = 'https://b.ewd.io/VdaySeatGeekCAN' %}"}
     {'{% endif %}'}
 
     <Image href="{{ giftagram }}" className="width-100" width="600" src="vday-2/vdaybanner_giftagram.png" />
     <Image href="{{ groupon }}" className="width-100" width="600" src="vday-2/vdaybanner_groupon.png" />
     <Image href="{{ ubereats }}" className="width-100" width="600" src="vday-2/vdaybanner_ubereats.png" />
     <Image href="{{ seatgeek }}" className="width-100" width="600" src="vday-2/vdaybanner_seatgeek.png" />
     <Image href="{{ indigo }}" className="width-100" width="600" src="vday-2/vdaybanner_indigo.png" />
 

    <Offer
    button="Shop Valentine's Day"
    divider={false}
    />

   </DefaultTemplate>
 )

export default CasperEmail
