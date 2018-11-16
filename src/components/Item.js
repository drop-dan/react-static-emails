import React, { Fragment } from 'react'
import { Button } from './'

const Item = ({
  image, logo, brandName, tagline, title, body, button, pointRate,
}) => (
  <div className="item-wrap mt1">
    {logo && <Logo image={logo} brandName="title" />}

    {brandName && <h2 className="mt2 mb0">{brandName}</h2>}

    {pointRate && <PointRate rate={pointRate} size="small" />}

    <a className="mt3" href="http://litmus.com" target="_blank">
      <img src={image} width="300" height="300" alt="Fluid images" border="0" className="item" />
    </a>

    {tagline && (
      <p className="tagline m0" align="center" bgcolor="#F5F7FA">
        {tagline.toUpperCase()}
      </p>
    )}

    <h3 className="mt2 mb1" align="center" bgcolor="#F5F7FA">
      {title}
    </h3>

    <p className="mt0 mb2" align="center" bgcolor="#F5F7FA">
      {body}
    </p>

    {button && <Button className="wide my4">{button}</Button>}
  </div>
)

export const Logo = ({ image, brandName = 'brand' }) => (
  <div className="logo">
    <img src={image} width="100" height="100" alt={brandName} border="0" />
  </div>
)

export const PointRate = ({ rate, size = 'normal' }) => (
  <p className={`point-rate ${size}`}>
    <span className="point-circle" />
    {rate} PTS
  </p>
)

export const OfferBlurb = ({
  title, pointRate, description, buttonText = 'Shop this offer',
}) => (
  <Fragment>
    <h1 className="mt4 mb0">{title}</h1>

    <PointRate rate={pointRate} />

    <p className="mt1 mb4 large">{description}</p>

    <Button className="wide">{buttonText}</Button>
  </Fragment>
)

export default Item
