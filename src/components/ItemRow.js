import React from 'react'
import { Button, Logo, PointRateRow } from './'

const ItemRow = ({
  logo, link, brandName, button, pointRate, oldRate, divider,
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
      {logo && <Logo image={logo} brandName="title" />}
    </div>

    <div className="mt1" style={{ float: 'right', width: '55%', maxWidth: 300 }}>
      {brandName && <h3 className="mt0 mb1 left-align">{brandName}</h3>}

      {pointRate && <PointRateRow rate={pointRate} oldRate={oldRate} size="small" />}

      {button && (
        <Button href={link} className="small mt1" style={{ maxWidth: 140 }}>
          {button}
        </Button>
      )}
    </div>

    {divider && <div className="divider" />}
  </div>
)

export default ItemRow
