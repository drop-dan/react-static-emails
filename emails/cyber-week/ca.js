import React from 'react'
import { Main, Header, HeroImage, Footer, OfferRow, Button, Image } from '../../src/components'

const Item = props => <OfferRow logo={false} maxWidth={450} buttonMaxWidth={400} {...props} />
const BrandImage = ({
  src, width, height, ...props
}) => (
  <Image
    src={src}
    width={width}
    height={height}
    style={{
      width,
      maxWidth: '90%',
      height: 'auto',
      margin: '35px auto 0',
      display: 'block',
    }}
    alt="Fluid images"
    border="0"
    className="mx-auto"
    {...props}
  />
)

const CyberWeek = () => (
  <Main preheaderText="we got you covered. There's still time to grab gifts for everyone on your 🎄list with these Cyber Week deals.">
    <Header />

    <HeroImage href="https://b.ewd.io/CWCA" image="cyber-week/header.gif" />

    <div className="py2 mx-auto" style={{ maxWidth: 480 }}>
      <div className="px2">
        <h2 className="mt4 mb0">
          <b>December's coming in hot.</b>
        </h2>

        <p className="my2">
          But we got you covered. There's still time to grab gifts for everyone on your 🎄list with
          these Cyber Week deals.
        </p>

        <Button href="https://b.ewd.io/CWCA" className="mx-auto mt3" style={{ maxWidth: 300 }}>
          Shop Now
        </Button>
      </div>

      <div className="divider" />

      <Item
        brand="Gap"
        image={<BrandImage src="cyber-week/gap.jpg" width={160} />}
        body={
          <p className="left-align">
            Stay cozy in a scarf that works year-round and score up to 50% off 1,000s of styles.*
          </p>
        }
        pointRate="60 PER $1"
        link="https://b.ewd.io/CWGapCA"
      />
      <p className="mt4 small">*Ends December 3. Restrictions apply.</p>

      <div className="divider" />

      <Item
        invert
        brand="Kobo"
        image={<BrandImage src="cyber-week/kobo.jpg" width={110} />}
        pointRate="10,000"
        body={
          <p className="left-align">
            A heist story set on the moon — what could possibly go wrong? Your new favorite read,
            from the bestselling author of The Martian.
          </p>
        }
        link="https://b.ewd.io/CWKoboCA"
      />

      <div className="divider" />

      <Item
        brand="The Source"
        image={<BrandImage src="cyber-week/cuisinart.jpg" width={150} />}
        pointRate="15 PER $1"
        body={
          <p className="left-align">
            Let your Cuisinart Precision Master Stand Mixer do the heavy lifting for you. Dishwasher
            safe, and now, $250 off.
          </p>
        }
        link="https://b.ewd.io/CWSource"
      />

      <div className="divider" />

      <Item
        invert
        brand="Indigo"
        image={<BrandImage src="cyber-week/qvc.jpg" width={180} />}
        pointRate="40 PER $1"
        body={
          <p className="left-align">
            Drown out your relatives by pumping up the volume. Beats by Dr. Dre Wireless Headphones
            now, at over 20% off.
          </p>
        }
        link="https://b.ewd.io/CWIndigo"
      />

      <div className="divider" />

      <Item
        brand="ClassPass"
        image={<BrandImage src="cyber-week/classpass.jpg" width={150} />}
        pointRate="15,000"
        body={
          <p className="left-align">
            Make a fitness resolution - and stick to it. Your all-access pass to a global network of
            over 100,000 studios (and counting).*
          </p>
        }
        link="https://b.ewd.io/CWClassPassCA"
      />
      <p className="mt4 small">*New customers only. Available in cities ClassPass operates</p>

      <div className="divider" />

      <div className="px2">
        <Image
          width="600"
          height="300"
          src="cyber-week/newbalance.jpg"
          style={{
            width: '100%',
            marginTop: 10,
            marginBottom: 20,
            borderRadius: 12,
          }}
        />

        <p>
          PLUS, you could win a $400 e-gift card to New Balance! Work off that turkey in a fresh
          pair of kicks that look good - and feel good, too. Hurry, contest ends Saturday morning!{' '}
        </p>

        <Button
          href="https://b.ewd.io/CWContest"
          className="mx-auto mt3 mb3"
          style={{ maxWidth: 300, margin: '30px auto' }}
        >
          Enter now
        </Button>
      </div>
    </div>

    <Footer />
  </Main>
)

export default CyberWeek
