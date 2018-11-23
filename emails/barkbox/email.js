import React from 'react'
import { Main, Header, HeroImage, OfferBlurb, Footer, Item } from '../../src/components'

const BarkboxEmail = () => (
  <Main preheaderText="Make your dog’s heart grow three sizes with a monthly delivery of toys, treats, and chews, so your dog can celebrate the holidays while you stay Grinchy!">
    <Header />

    <HeroImage href="https://b.ewd.io/BFBarkBox" image="barkbox/header.gif" />

    <div className="p2 mx-auto" style={{ maxWidth: 480 }}>
      <OfferBlurb title={`This holiday season,${'\n'}don't forget Fido.`} />

      <div className="my4" />

      <Item
        logo="barkbox/barkbox.png"
        image="barkbox/image.jpg"
        brandName="Barkbox"
        pointRate="40,000"
        oldRate="was 20,000"
        imageWidth="600"
        imageHeight="425"
        title="The Limited-Edition Grinch BarkBox has arrived!"
        body={`Make your dog’s heart grow three sizes with a monthly delivery of toys, treats, and chews, so your dog can celebrate the holidays while you stay Grinchy!
        <br>Every box includes a FREE Max Antler toy wearable for your pup, along with two original toys, two full-bags of all-natural treats, and a scrumptious USA-made chew. + Black Friday special! Get an extra toy in every box!
        <br>Every order comes with free shipping and a 100% Happiness Guarantee, which means, if your dog doesn’t absolutely love something, we won’t be mean or green about it—we’ll make it right! It’s the most-wanted, most-stolen gift of the holiday season!
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
