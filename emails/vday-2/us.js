import React from 'react'
import { Offer, DefaultTemplate, Button, Image } from '../../src/components'

const CasperEmail = () => (
   <DefaultTemplate
     preheaderText="Be their Valentine - and keep it that way. Shop with Drop for last minute gifts to show that special someone just how much you care."
     hero="vday-2/vday_emailbanner.gif"
     title="Whew, that was a close one."
     body="Be their Valentine - and keep it that way. Last minute gifts to show that special someone just how much you care (not bad for the 'gram, either)."
     button={<Button>Shop All</Button>}
     divider={false}
   >
     {'{% set suid = userAttribute.suid %}'}
     {'{% if suid is defined %}'}
     {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
     {"{% set urban = root ~ '827&suid=' ~ suid %}"}
     {"{% set drizly = root ~ '606&suid=' ~ suid %}"}
     {"{% set ubereats = 'https://b.ewd.io/vdayubereats' %}"}
     {"{% set groupon = root ~ '511&suid=' ~ suid %}"}
     {"{% set seatgeek = root ~ '523&suid=' ~ suid %}"}
     {'{% else %}'}
     {"{% set urban = 'https://b.ewd.io/VdayUrbanStems' %}"}
     {"{% set drizly = 'https://b.ewd.io/VdayDrizly' %}"}
     {"{% set ubereats = 'https://b.ewd.io/vdayubereats' %}"}
     {"{% set groupon = 'https://b.ewd.io/VdayGrouponUS' %}"}
     {"{% set seatgeek = 'https://b.ewd.io/VdaySeatgeekUS' %}"}
     {'{% endif %}'}
 
     <Image href="{{ urban }}" className="width-100" width="600" src="vday-2/vdaybanner_urbanstem.png" />
     <Image href="{{ drizly }}" className="width-100" width="600" src="vday-2/vdaybanner_drizly.png" />
     <Image href="{{ ubereats }}" className="width-100" width="600" src="vday-2/vdaybanner_ubereats.png" />
     <Image href="{{ groupon }}" className="width-100" width="600" src="vday-2/vdaybanner_groupon.png" />
     <Image href="{{ seatgeek }}" className="width-100" width="600" src="vday-2/vdaybanner_seatgeek.png" />
 

    <Offer
    button="Shop Valentine's Day"
    divider={false}
    />

   </DefaultTemplate>
 )

export default CasperEmail
