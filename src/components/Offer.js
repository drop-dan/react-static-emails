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
  button = 'Shop now',
  pointRate,
  oldRate,
  divider = true,
}) => {
  const brandLogo = brandData[brand] && brandData[brand].logo
  return (
    <Fragment>
      <div className="item-wrap mt1">
        <Logo image={logo || brandLogo} className="mx-auto" />

        {<h2 className="mt3 mb1">{brandData[brand] ? brandData[brand].name : brand}</h2>}

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
          <p className="tagline m0" align="center" bgcolor="#F5F7FA">
            {tagline.toUpperCase()}
          </p>
        )}

        {title && (
          <h3 className="mt2 mb3" align="center" bgcolor="#F5F7FA">
            {title}
          </h3>
        )}

        {body &&
          body.match(/<br>/) &&
          body.split('<br>').map((item, i, arr) => (
            <p className={`mt0 ${i === arr.length - 1 ? 'mb3' : 'mb2'}`} key={i}>
              {item}
            </p>
          ))}

        {!body ||
          (!body.match(/<br>/) && (
            <p className="mt0 mb2" align="center" bgcolor="#F5F7FA">
              {body}
            </p>
          ))}

        {button && (
          <Button href={link} className="wide mt2 mb2 mx-auto">
            {button}
          </Button>
        )}
      </div>

      {divider && <div className="divider" />}
    </Fragment>
  )
}

export default Offer
