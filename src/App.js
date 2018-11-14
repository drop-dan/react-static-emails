import React from 'react'
import { hot } from 'react-hot-loader'
import { Header, Footer, HeroImage, Heading, Button, Body, Item } from './components'

import './app.css'

const App = () => (
  <div className="main">
    <div className="preheader-text">preheader text</div>

    <div>
      <Header />
      <HeroImage />
      <div className="flex">
        <Heading>Kick it with Adidas</Heading>
        <Body>
          Routines are made to be broken. So we made a new one for you, in favour of better health.
        </Body>
        <Button className="wide">Shop this Offer</Button>
      </div>

      <Heading>Our recommended picks</Heading>

      <Item />
      <Button className="wide">Shop this Offer</Button>
      <Footer />
    </div>
  </div>
)

export default hot(module)(App)
