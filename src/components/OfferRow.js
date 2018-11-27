import React from 'react'
import { Button, Logo, PointRate } from './'
import brandData from '../utils/brandData'

const OfferRow = ({
  link, brand, button = 'Shop now', pointRate, oldRate, divider,
}) => (
  <div
    className="mx-auto"
    style={{
      height: 200,
      width: '90%',
      maxWidth: 330,
      minWidth: 280,
    }}
  >
    <div className="mt1" style={{ float: 'left' }}>
      {brand && <Logo brand={brand} />}
    </div>

    <div className="mt1" style={{ float: 'right', width: '55%', maxWidth: 300 }}>
      {brand && <h3 className="mt0 mb1 left-align">{brandData[brand].name}</h3>}

      {pointRate && <PointRate row rate={pointRate} oldRate={oldRate} className="small" />}

      {link && (
        <Button href={link} className="small mt1" style={{ maxWidth: 140 }}>
          {button}
        </Button>
      )}
    </div>

    {divider && <div className="divider" />}
  </div>
)

export default OfferRow
