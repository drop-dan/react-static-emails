import React, { Fragment } from 'react'
import { DefaultTemplate, Button } from '../../src/components'

const ActivateOffer = () => (
  <DefaultTemplate
    divider={false}
    preheaderText="You just activated an offer from Barkbox. Now it's time to earn points."
    title={<h1 className="mb0">Your offer is active!</h1>}
    body={
      <Fragment>
        <p className="mb0" style={{ fontSize: 18, fontWeight: '100', color: '#a3a3a3' }}>
          You just activated an offer from Barkbox.
        </p>
        <p className="mt0" style={{ fontSize: 18, fontWeight: '100', color: '#a3a3a3' }}>
          Now it's time to earn points.
        </p>
      </Fragment>
    }
    button={
      <Button href="https://www.earnwithdrop.com" style={{ maxWidth: 200 }}>
        Shop now
      </Button>
    }
  />
)

export default ActivateOffer
