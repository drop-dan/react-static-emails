import React, { Fragment } from 'react'
import { Button, Link } from './'

const Item = ({
  image,
  logo,
  link,
  brandName,
  tagline,
  title,
  body,
  button,
  pointRate,
  divider = true,
}) => (
  <Fragment>
    <div className="item-wrap mt1">
      {logo && <Logo image={logo} brandName="title" />}

      {brandName && <h2 className="mt3 mb0">{brandName}</h2>}

      {pointRate && <PointRate rate={pointRate} size="small" />}

      {image && (
        <Link className="mt3">
          <img
            src={image}
            width="300"
            height="300"
            alt="Fluid images"
            border="0"
            className="item"
          />
        </Link>
      )}

      {tagline && (
        <p className="tagline m0" align="center" bgcolor="#F5F7FA">
          {tagline.toUpperCase()}
        </p>
      )}

      {title && (
        <h3 className="mt2 mb1" align="center" bgcolor="#F5F7FA">
          {title}
        </h3>
      )}

      <p className="my2" align="center" bgcolor="#F5F7FA">
        {body}
      </p>

      {button && (
        <Button href="http://www.earnwithdrop.com/" className="wide mt3 mb2 mx-auto">
          {button}
        </Button>
      )}
    </div>

    {divider && <div className="divider" />}
  </Fragment>
)

export const Logo = ({ image, brandName = 'brand' }) => (
  <div className="logo mx-auto">
    <img src={image} width="100" height="100" alt={brandName} border="0" />
  </div>
)

export const PointRate = ({ rate, size = 'normal' }) => (
  <p className={`point-rate ${size}`}>
    <img
      className="point-circle"
      src="https://s3.amazonaws.com/drop-web-font/point.png"
      width="4"
      height="4"
      alt="point"
      border="0"
    />
    {rate.toUpperCase()}
  </p>
)

export const OfferBlurb = ({
  title, pointRate, description, button,
}) => (
  <Fragment>
    <h1 className="mt4 mb0">{title}</h1>

    {pointRate && <PointRate rate={pointRate} />}

    <p className="my1 large">{description}</p>

    {button}
  </Fragment>
)

export default Item
