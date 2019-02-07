import React from 'react'
import { Offer, DefaultTemplate, Button } from '../../src/components'

const CasperEmail = () => (
  <DefaultTemplate
    preheaderText="Give the gift of no re-gift with our top picks for everyone on your list."
    hero="holiday-guide/12daysguide_header_ca.gif"
    title="Our 12 Days of Gifting starts Tuesday!"
    body="Give the gift of no re-gift with our top picks for everyone on your list."
    button={<Button>Shop All</Button>}
  >
    <Offer
      image="holiday-guide/forher_ca.png"
      imageWidth="600"
      imageHeight="425"
      title="No one likes resting gift face."
      body="Shower the women you love with gifts they'll want to show off."
      link="https://b.ewd.io/12DaysHerCA"
    />
        <Offer
      image="holiday-guide/forhim_ca.png"
      imageWidth="600"
      imageHeight="425"
      title="Buying for the strong silent type?"
      body="Your list could use some hints. Don't fret. We know just want he wants."
      link="https://b.ewd.io/12DaysHimCA"
    />
        <Offer
      image="holiday-guide/forwork_ca.png"
      imageWidth="600"
      imageHeight="425"
      title="All in a day's work."
      body="For clients, bosses, and everyone in between. Gifts so perfect they deserve a promotion."
      link="https://b.ewd.io/12DaysWorkCA"
    />
        <Offer
      image="holiday-guide/stocking.png"
      imageWidth="600"
      imageHeight="425"
      title="Small but mighty."
      body="The best things come in small packages. Stock up on our fave festive finds."
      link="https://b.ewd.io/12DaysStockingCA"
      divider={false}
    />
  </DefaultTemplate>
)

export default CasperEmail
