import React from 'react'
import { Button } from './'

const Item = ({
  image, tagline, title, body, button,
}) => (
  <div className="item-wrap">
    <a href="http://litmus.com" target="_blank">
      <img src={image} width="300" height="300" alt="Fluid images" border="0" className="item" />
    </a>
    <p className="tagline m0" align="center" bgcolor="#F5F7FA">
      {tagline.toUpperCase()}
    </p>
    <h3 className="mt2" align="center" bgcolor="#F5F7FA">
      {title}
    </h3>
    <p className="mb2" align="center" bgcolor="#F5F7FA">
      {body}
    </p>
    <Button className="wide mt5">{button}</Button>
  </div>
)

export default Item
