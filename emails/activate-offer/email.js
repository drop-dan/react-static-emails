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
        <p>
          Drop is proud to partner with ClassPass to offer you 12,000 Drop points when you sign-up
          for their free trial.
          <br />
          <br />
          <b>Here's how:</b>
          <br />
          <br />
          Earn 12,000 Drop points when you sign-up for the free trial
          <br />
          <br />
          You <b>must</b> sign up{' '}
          <a href="https://click.linksynergy.com/fs-bin/click?id=lksn7JMHhik&offerid=589289.34&type=3&subid=0&u1= {{ public_id }})">
            through this link
          </a>
          <br />
          <br />
          You <b>must</b> be a new ClassPass customer
          <br />
          <br />
          Happy Earning!!
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
