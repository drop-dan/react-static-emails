import React from 'react'
import { hot } from 'react-hot-loader'
import { Header, Footer, HeroImage, Button, Item } from './components'
import item from './item.png'

import './styles/app.css'
import './styles/text.css'
import './styles/offer.css'
import './styles/spacing.css'
import './styles/utils.css'

const App = () => (
  <div className="main">
    <div className="preheader-text">preheader text</div>

    <div>
      <Header />
      <HeroImage />
      <div className="flex">
        <h1>Kick it with Adidas</h1>

        <p className="point-rate">
          <span className="point-circle" />
          25,000 PTS
        </p>

        <p className="large">
          Routines are made to be broken. So we made a new one for you, in favour of better health.
        </p>

        <Button className="wide">Shop this Offer</Button>

        <div className="divider" />

        <h2>Our recommended picks</h2>

        <Item
          image={item}
          tagline="Featured"
          title="Shoes"
          body="Slow and steady doesn't always win the rewards race. Slow and steady doesn't always win."
          button="Shop this offer"
        />

        <Item
          image={item}
          tagline="Stuffs"
          title="Hats"
          body="Slow and steady doesn't always win the rewards race. Slow and steady doesn't always win."
          button="I like hats"
        />
      </div>
      <Footer />
    </div>
  </div>
)

export default hot(module)(App)
