import React, { Fragment } from 'react'
import { Button } from './'

const Item = ({
  image,
  imageWidth = '300',
  imageHeight = '300',
  logo,
  link,
  brandName,
  tagline,
  title,
  body,
  button,
  pointRate,
  oldRate,
  divider = true,
}) => (
  <Fragment>
    <div className="item-wrap mt1">
      {logo && <Logo image={logo} brandName="title" />}

      {brandName && <h2 className="mt3 mb1">{brandName}</h2>}

      {pointRate && <PointRate rate={pointRate} oldRate={oldRate} size="small" />}

      {image && (
        <img
          src={image}
          width={imageWidth}
          height={imageHeight}
          alt="Fluid images"
          border="0"
          className="item mx-auto"
        />
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

      <p className="mt0 mb2" align="center" bgcolor="#F5F7FA">
        {body}
      </p>

      {button && (
        <Button href={link} className="wide mt3 mb2 mx-auto">
          {button}
        </Button>
      )}
    </div>

    {divider && <div className="divider" />}
  </Fragment>
)

export default Item

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

const Logo = ({ image, brandName = 'brand' }) => (
  <div className="logo mx-auto">
    <img src={image} width="100" height="100" alt={brandName} border="0" />
  </div>
)

const PointRate = ({ rate, oldRate, size = 'normal' }) => (
  <Fragment>
    <p className={`point-rate ${size}`} style={{ marginBottom: 5 }}>
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
    <p className={`point-rate mt0 mb2 ${size}`} style={{ color: '#ccc', fontSize: 10 }}>
      {oldRate && oldRate.toUpperCase()}
    </p>
  </Fragment>
)
