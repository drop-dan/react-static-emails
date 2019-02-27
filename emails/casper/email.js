import React from 'react'
import { Offer, DefaultTemplate, Button } from '../../src/components'

const CasperEmail = () => (
  <DefaultTemplate
    preheader="Starting tomorrow, score the best deals on your favorite brands - only with Drop."
    hero="casper/casper-header.jpg"
    title="10% Off, 10% Back"
    body="This Black Friday, Enjoy 10% off your next mattress order.  Plus, get 10% back in points."
    button={<Button>test</Button>}
  >
    <Offer
      brand="Casper"
      pointRate="25,000"
      image="casper/mattress.jpg"
      imageWidth="600"
      imageHeight="425"
      tagline="NEW"
      title="The new Wave mattress"
      body="Finally, a mattress designed to support the way you're designed"
      divider={false}
    />
  </DefaultTemplate>
)

export default CasperEmail
