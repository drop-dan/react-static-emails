import React from 'react'
import { Offer, DefaultTemplate, Button } from '../../src/components'

const CasperEmail = () => (
  <DefaultTemplate
    preheaderText="Donate your points to the cause today and we'll match 'em!"
    hero="sickkids/sickkids_emailbanner.gif"
    title="We're helping The Hospital for Sick Children build a new emergency wing."
    body="You can, too."
    button={<Button href="{{  hrblock  }}">Donate Today</Button>}
  >
    <Offer
      title="Our pals at SickKids are on a mission to raise $25 million for new, state-of-the-art spaces, people, and programs."
      body="Join the fight to give sick kids, doctors, nurses, researchers, and support staff a new home to hang their hats. They deserve it (and we'll match your donation!)."
      button={false}
      divider={false}
    />
   
    <p>
    As a major thanks for contributing, you'll be automatically entered to win 1 of 20 $20 gift cards to our (delicious) donation partner, foodora. Good things come to those who do good.
    </p>
    <Button href="https://b.ewd.io/TaxesStash">Donate Now</Button>
 
  </DefaultTemplate>
)

export default CasperEmail
