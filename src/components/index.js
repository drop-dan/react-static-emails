import React, { Fragment } from 'react'
import { LogoBar } from './'
import brandData from '../utils/brandData'

export { default as Main } from './Main'
export { default as Footer } from './Footer'
export { default as Item } from './Item'
export { default as ItemRow } from './ItemRow'
export { default as LogoBar } from './LogoBar'

export const Header = () => <LogoBar />

export const Link = ({ href, children, ...props }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
)

export const Button = ({
  children, className, style, ...props
}) => (
  <div className={`button ${className}`} style={style}>
    <Link {...props}>{children.toUpperCase()}</Link>
  </div>
)

export const Image = ({ src, ...props }) => (
  <img src={`https://s3.amazonaws.com/drop-web-font/${src}`} {...props} />
)

export const HeroImage = ({
  width = '600',
  height = '600',
  href = 'https://b.ewd.io/T3TSSpSvuR',
  image,
  alt,
}) => (
  <Link href={href}>
    <Image className="hero-image" src={image} width={width} height={height} border="0" alt={alt} />
  </Link>
)

export const Logo = ({ image, className, brand = 'brand' }) => {
  const brandLogo = brandData[brand] && brandData[brand].logo
  const src = image || brandLogo
  return (
    src && (
      <div className={`logo ${className}`}>
        <Image src={`logos/${src}`} width="100" height="100" alt={brand} border="0" />
      </div>
    )
  )
}

export const PointRate = ({ rate, oldRate, size = 'normal' }) => (
  <Fragment>
    <p className={`point-rate ${size}`} style={{ marginBottom: 5 }}>
      <Image className="point-circle" src="point.png" width="4" height="4" alt="point" border="0" />
      {rate.toUpperCase()}
    </p>
    <p className={`point-rate mt0 mb2 ${size}`} style={{ color: '#ccc', fontSize: 10 }}>
      {oldRate && oldRate.toUpperCase()}
    </p>
  </Fragment>
)

export const PointRateRow = ({ rate, oldRate, size = 'normal' }) => (
  <Fragment>
    <p className={`point-rate ${size}`} style={{ marginBottom: 5, display: 'inline' }}>
      <Image className="point-circle" src="point.png" width="4" height="4" alt="point" border="0" />
      {rate.toUpperCase()}
    </p>
    {oldRate && (
      <p
        className={`point-rate my0 ${size}`}
        style={{
          color: '#ccc',
          fontSize: 10,
          display: 'inline',
          marginLeft: 10,
          textDecoration: 'line-through',
        }}
      >
        {oldRate.toUpperCase()}
      </p>
    )}
  </Fragment>
)

export const OfferBlurb = ({
  title, pointRate, description, button,
}) => (
  <Fragment>
    <h1 className="mt4 mb0">{title}</h1>

    {pointRate && <PointRate rate={pointRate} />}

    {typeof description === 'string' ? <p className="my1 large">{description}</p> : description}

    {button}
  </Fragment>
)
