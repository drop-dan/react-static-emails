import React from 'react'
import { hot } from 'react-hot-loader'
import { Header, Footer, HeroImage, OfferBlurb, Item } from './components'

import app from './styles/app.css'
import offer from './styles/offer.css'
import text from './styles/text.css'
import spacing from './styles/spacing.css'
import utils from './styles/utils.css'

const Offer = props => <Item {...props} button="Shop now" />

// Subject: Black Friday week starts TOMORROW! Your deals inside

const App = () => (
  <div className="main">
    <style jsx global>
      {`${app.toString()} ${offer.toString()} ${text.toString()} ${spacing.toString()} ${utils.toString()}`}
    </style>
    <div className="preheader-text">
      Starting tomorrow, score the best deals on your favorite brands - only with Drop.
    </div>

    <div>
      <Header />

      <HeroImage image="https://s3.amazonaws.com/drop-web-font/header.gif" />

      <div className="p2 mx-auto" style={{ maxWidth: 430 }}>
        <OfferBlurb
          title="Black Friday"
          description="Starting tomorrow, score the best deals on your favorite brands - only with Drop."
        />

        <div className="divider" />

        <Offer
          logo="https://s3.amazonaws.com/drop-web-font/new_balance.png"
          brandName="New Balance"
          pointRate="40 per $1"
          body="Sprint into Black Friday with runners designed to grab life by the winter."
        />

        <Offer
          logo="https://s3.amazonaws.com/drop-web-font/barkbox.png"
          brandName="Barkbox"
          pointRate="20,000"
          body="Make your pup's heart grow three sizes. Nab a limited edition Grinch-themed Barkbox (adorable antlers included!) just in time for December."
        />

        <Offer
          logo="https://s3.amazonaws.com/drop-web-font/hayneedle.png"
          brandName="Hayneedle"
          pointRate="80 per $1"
          body="Outfit your home in holiday. Shop Hayneedle's Christmas trees, indoor and outdoor fire pits, and more."
        />

        <Offer
          logo="https://s3.amazonaws.com/drop-web-font/bloomingdales.png"
          brandName="Bloomingdales"
          pointRate="15 per $1"
          body="Add a little luxe to your everyday with a signature brown bag to boot."
        />

        <Offer
          logo="https://s3.amazonaws.com/drop-web-font/forever21.png"
          brandName="Forever 21"
          pointRate="40 per $1"
          body="Don't be a holiday party outfit repeater."
        />

        <Offer
          logo="https://s3.amazonaws.com/drop-web-font/gap.png"
          brandName="Gap"
          pointRate="50 per $1"
          body="Your sweater collection just got a little thicker. Stay cozy in the cold with Gap's classic knits."
        />

        <Offer
          logo="https://s3.amazonaws.com/drop-web-font/sephora.png"
          brandName="Sephora"
          pointRate="40 per $1"
          body="Deals that will make you blush. Add a dose of glitter to your cart for under the mistletoe glam."
        />

        <Offer
          logo="https://s3.amazonaws.com/drop-web-font/macys.png"
          brandName="Macy's"
          pointRate="30 per $1"
          body="The store that has it all has you covered. Save on all your festive faves."
        />

        <Offer
          logo="https://s3.amazonaws.com/drop-web-font/lululemon.png"
          brandName="Lululemon"
          pointRate="50 per $1"
          body="Embrace the elements with gear designed to last keep you moving, year-round. Eat, sleep, eggnog, yoga."
          divider={false}
        />
      </div>

      <HeroImage image="https://s3.amazonaws.com/drop-web-font/footer.png" />

      <Footer border={false} />
    </div>
  </div>
)

export default hot(module)(App)
