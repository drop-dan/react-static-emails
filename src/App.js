import React from 'react'
import { hot } from 'react-hot-loader'
import { Header, Footer, HeroImage, OfferBlurb, Item } from './components'
import item from './item.png'

import './styles/app.css'
import './styles/offer.css'
import './styles/text.css'
import './styles/spacing.css'
import './styles/utils.css'

const App = () => (
  <div className="main">
    <div className="preheader-text">preheader text</div>

    <div>
      <Header />
      <HeroImage />
      <div className="flex py3 mx2 px4">
        <OfferBlurb
          title="Kick it with Adidas"
          pointRate="25,000"
          description="Routines are made to be broken. So we made a new one for you, in favour of better health."
        />

        <div className="divider" />

        <Item
          image={item}
          logo={item}
          brandName="Footlocker"
          tagline="Featured"
          title="Shoes"
          pointRate="25,000"
          body="Slow and steady doesn't always win the rewards race. Slow and steady doesn't always win."
          button="Shop this offer"
        />

        <div className="divider" />

        <Item
          image={item}
          logo={item}
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
