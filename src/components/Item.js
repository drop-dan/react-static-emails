import React from 'react'

import { Body } from './'

const Item = () => (
  <div className="item-wrap">
    <a href="http://litmus.com" target="_blank">
      <img
        src="news-1.jpg"
        width="300"
        height="300"
        alt="Fluid images"
        border="0"
        className="item"
      />
    </a>
    <Body align="center" bgcolor="#F5F7FA">
      Tagline
    </Body>
    <Body align="center" bgcolor="#F5F7FA">
      Title
    </Body>
    <Body align="center" bgcolor="#F5F7FA">
      Slow and steady doesn't always win the rewards race. Slow and steady doesn't always win.
    </Body>
  </div>
)

export default Item
