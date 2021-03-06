import React, { Fragment } from 'react'
import { Button, Image, Logo, PointRate } from './'
import brandData from '../utils/brandData'

const Offer = ({
  image,
  imageWidth = '300',
  imageHeight = '300',
  logo,
  link,
  brand,
  tagline,
  title,
  body,
  note,
  button = 'Shop now',
  pointRate,
  oldRate,
  children,
  divider = true,
  halfWidth = false,
}) => {
  const brandLogo = brandData[brand] && brandData[brand].logo
  return (
    <Fragment>
      <div className={halfWidth ? "width-50" :"item-wrap"}>
        <Logo image={logo || brandLogo} className="mx-auto" />

        <h2>{brandData[brand] ? brandData[brand].name : brand}</h2>

        {pointRate && <PointRate rate={pointRate} oldRate={oldRate} className="small" />}

        {image && (
          <Image
            src={image}
            width={imageWidth}
            height={imageHeight}
            alt="Fluid images"
            border="0"
            className="item mx-auto"
          />
        )}

        {tagline && (
          <p className="tagline" align="center" bgcolor="#F5F7FA">
            {tagline.toUpperCase()}
          </p>
        )}

        {title && (
          <h3 align="center" bgcolor="#F5F7FA">
            {title}
          </h3>
        )}

        {body && body.match(/<br>/) && body.split('<br>').map((item, i) => <p key={i}>{item}</p>)}

        {!body ||
          (!body.match(/<br>/) && (
            <p align="center" bgcolor="#F5F7FA">
              {body}
            </p>
          ))}

        {children}

        {button && (
          <Button href={link} className="wide">
            {button}
          </Button>
        )}
      </div>
      {note && <p className="small">{note}</p>}
      {divider && <div className="divider" />}
    </Fragment>
  )
}

export default Offer
