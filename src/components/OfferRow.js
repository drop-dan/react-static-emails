import React, { Fragment } from 'react'
import { Button, Logo, PointRate } from './'
import brandData from '../utils/brandData'

const OfferRow = ({
  link,
  brand,
  button = 'Shop now',
  pointRate,
  oldRate,
  divider = true,
  body,
  logo,
  maxWidth = 450,
  invert = false,
  note,
  image,
}) => {
  const brandLogo = brandData[brand] && brandData[brand].logo
  return (
    <Fragment>
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
          {image || <Logo image={logo || brandLogo} className="mx-auto" />}
        </div>

        <div style={{ float: invert ? 'left' : 'right', width: '60%', maxWidth }}>
          {brand && <h3 className="left-align">{brandData[brand].name}</h3>}

          {pointRate && (
            <div className="left-align">
              <PointRate row rate={pointRate} oldRate={oldRate} className="small" />
            </div>
          )}

          {body && body}

          {link && (
            <Button href={link} className="small">
              {button}
            </Button>
          )}
        </div>
      </div>
      {note && <p className="small">{note}</p>}
      {divider && <div className="divider" />}
    </Fragment>
  )
}

export default OfferRow
