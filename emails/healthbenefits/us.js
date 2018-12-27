import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="Use your benefits through Drop by December 31st."
    heroLink="https://b.ewd.io/HealthBenefitsUS"
    hero="healthbenefits/healthbenefits_emailbanner.png"
    title="Being a Drop member has its benefits."
    body="Use yours up through Drop by December 31st. (See what we did there.)"
    button={<Button href="https://b.ewd.io/HealthBenefitsUS">Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set contacts = root ~ '718&suid=' ~ suid %}"}
    {"{% set warby = root ~ '517&suid=' ~ suid %}"}
    {"{% set groupon = root ~ '511&suid=' ~ suid %}"}
    {"{% set jet = root ~ '513&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set contacts = 'https://b.ewd.io/1800ContactsUS' %}"}
    {"{% set warby = 'https://b.ewd.io/HBWarbyParkerUS' %}"}
    {"{% set groupon = 'https://b.ewd.io/HBGrouponUS' %}"}
    {"{% set jet = 'https://b.ewd.io/HBJetUS' %}"}
    {'{% endif %}'}

    <Offer
      brand="1800Contacts"
      body="Down to your last pair of eyes? Stock up on your fave disposable specs with 1-800 Contacts - they house millions of contacts (including every brand under the sun) and ship for free."
      pointRate="100 per $1"
      link="{{ contacts }}"
    />
    <Offer
      brand="Warby Parker"
      body="The limited edition Percey Holiday frames won't stick around forever eva. In fresh fun colors to boot."
      pointRate="300 PER $1"
      link="{{ warby }}"
    />
    <Offer
      brand="Groupon"
      body="Relax, unwind, settle in for some post-holiday pampering. Book a massage, or full-fledged spa day with Groupon."
      pointRate="20 PER $1"
      link="{{ groupon }}"
    />
    <Offer
      brand="Jet"
      body="Step into comfort with new Orthopaedic Birkenstocks, molded directly to your feet. Back problems, be gone. "
      pointRate="40 PER $1"
      link="{{ jet }}"
    />
    
    <p>
     Check with your employer or HR representative to learn what is applicable for reimbursement.
    </p>
  </DefaultTemplate>
)

export default BlackFridayEmail
