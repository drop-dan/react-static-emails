import React from 'react'
import { Main, Header, HeroImage, OfferBlurb, Footer, Item } from '../../src/components'

const BarkboxEmail = () => (
  <Main preheaderText="This holiday season, don't forget Fido. Make your dog’s heart grow three sizes with a monthly delivery of toys, treats, and chews, so your dog can celebrate the holidays while you stay Grinchy!">
    <Header />

    <HeroImage href="https://b.ewd.io/BFBarkBox" image="barkbox/header.gif" />

    <div className="p2 mx-auto" style={{ maxWidth: 480 }}>
      <OfferBlurb title={`This holiday season,${'\n'}don't forget Fido.`} />

      <div className="my4" />

      <Item
        pointRate="40,000"
        oldRate="was 20,000"
        title="The Limited-Edition Grinch BarkBox has arrived!"
        body={`Make your dog’s heart grow three sizes with a monthly delivery of toys, treats, and chews, so your dog can celebrate the holidays while you stay Grinchy!
        <br>Every box includes a FREE Max Antler toy wearable for your pup, along with two original toys, two full-bags of all-natural treats, and a scrumptious USA-made chew. + Black Friday special! Get an extra toy in every box!
        `}
        button="Shop now"
        link="https://b.ewd.io/BFBarkBox"
        divider={false}
      />
    </div>

    <Footer />
  </Main>
)

export default BarkboxEmail
