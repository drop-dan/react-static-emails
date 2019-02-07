import React, { Fragment } from 'react'
import { LogoBar } from './'

export { default as Main } from './Main'
export { default as Footer } from './Footer'
export { default as Offer } from './Offer'
export { default as OfferRow } from './OfferRow'
export { default as LogoBar } from './LogoBar'
export { default as DefaultTemplate } from '../templates/default'
export { default as OfferRowTemplate } from '../templates/offer-row'

export const Header = () => <LogoBar />

export const Link = ({
  href, children, label, ...props
}) => (
  <p>
    {label && <span>{label}</span>}
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  </p>
)

export const Button = ({
  children, className, style, ...props
}) => (
  <div className={`button ${className}`} style={style}>
    <Link {...props}>{children.toUpperCase()}</Link>
  </div>
)

export const Image = ({
  src, alt = '', href, ...props
}) => {
  const image = (
    <img src={`https://s3.amazonaws.com/drop-web-font/${src}`} alt={alt} border="0" {...props} />
  )

  if (href) {
    return <Link href={href}>{image}</Link>
  }

  return image
}

export const HeroImage = ({
  width = '600',
  height = '600',
  href = 'https://b.ewd.io/T3TSSpSvuR',
  image,
  alt,
}) => (
  <Link className="block" href={href}>
    <Image className="hero-image" src={image} width={width} height={height} border="0" alt={alt} />
  </Link>
)

export const Logo = ({ image, className, brand = 'brand' }) => {
  if (!image) {
    return null
  }
  return (
    <div className={`logo ${className}`}>
      <Image src={`logos/${image}`} width="100" height="100" alt={brand} border="0" />
    </div>
  )
}

export const PointRate = ({
  rate, oldRate, row, className = 'normal',
}) => (
  <Fragment>
    <p className={`point-rate${row ? '-row' : ''} ${className}`}>
      <Image className="point-circle" src="point.png" width="4" height="4" alt="point" border="0" />
      {rate.toUpperCase()}
    </p>
    {oldRate && (
      <p className={`point-rate${row ? '-row' : ''} old-rate`}>{oldRate.toUpperCase()}</p>
    )}
  </Fragment>
)

export const OfferBlurb = ({
  title, pointRate, body, button,
}) => (
  <Fragment>
    <h1 className="mt4 mb0">{title}</h1>

    {pointRate && <PointRate rate={pointRate} />}

    {typeof body === 'string' ? <p className="my1 large">{body}</p> : body}

    {button}
  </Fragment>
)
