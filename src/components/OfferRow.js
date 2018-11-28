import React from 'react'
import { Button, Logo, PointRate, Image } from './'
import brandData from '../utils/brandData'

const OfferRow = ({
  link,
  brand,
  button = 'Shop now',
  pointRate,
  oldRate,
  divider,
  body,
  logo = true,
  maxWidth = 300,
  buttonMaxWidth = 140,
  invert = false,
  image,
}) => (
  <div
    className="mx-auto"
    style={{
      width: '100%',
      overflow: 'hidden',
      boxSizing: 'border-box',
      paddingLeft: invert ? '20px' : '',
      paddingRight: invert ? '' : '20px',
    }}
  >
    <div style={{ float: invert ? 'right' : 'left', width: '40%' }}>
      {logo && brand && <Logo brand={brand} />}
      {image && image}
    </div>

    <div className="mt1" style={{ float: invert ? 'left' : 'right', width: '60%', maxWidth }}>
      {brand && <h3 className="mt0 mb1 left-align">{brandData[brand].name}</h3>}

      {pointRate && (
        <div className="left-align mt1 mb1">
          <PointRate row rate={pointRate} oldRate={oldRate} className="small" />
        </div>
      )}

      {body && body}

      {link && (
        <Button href={link} className="small mt1" style={{ maxWidth: buttonMaxWidth }}>
          {button}
        </Button>
      )}
    </div>

    {divider && <div className="divider" />}
  </div>
)

export default OfferRow
