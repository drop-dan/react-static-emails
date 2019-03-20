import React from 'react'
import { OfferRow, Button, Image, OfferRowTemplate } from '../../src/components'

const BrandImage = ({ width, ...props }) => (
  <Image className="brand-image" style={{ width: props.width }} {...props} />
)

const Offer = ({
  body, image, imageWidth, ...props
}) => (
  <OfferRow
    image={<BrandImage src={image} width={imageWidth} />}
    body={<p className="left-align">{body}</p>}
    {...props}
  />
)

const CyberWeek = () => (
  <OfferRowTemplate
    preheaderText="Because we all need a little R&R sans Smartphone."
    heroLink="https://b.ewd.io/EverNewCA"
    hero="unplug/unplug_emailbanner_us.gif"
    title="Fixated on your phone? Pull the plug. (It'll still be there in half an hour.)"
    body="To avoid burnout, here's how a few of our favorite social media savvy influencers unplug and recharge. "
    button={<Button href="https://b.ewd.io/EverNewCA">Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set fabletics = root ~ '802&suid=' ~ suid %}"}
    {"{% set everyplate = root ~ '831&suid=' ~ suid %}"}
    {"{% set kobo = root ~ '518&suid=' ~ suid %}"}
    {"{% set boxed = root ~ '515&suid=' ~ suid %}"}
    {"{% set firstleaf = root ~ '794&suid=' ~ suid %}"}
    {"{% set ae = root ~ '632&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set fabletics = 'https://b.ewd.io/UnplugFabletics' %}"}
    {"{% set everyplate = 'https://b.ewd.io/UnplugEveryPlate' %}"}
    {"{% set kobo = 'https://b.ewd.io/UnplugKobo' %}"}
    {"{% set boxed = 'https://b.ewd.io/UnplugBoxed' %}"}
    {"{% set firstleaf = 'https://b.ewd.io/UnplugFirstleaf' %}"}
    {"{% set ae = 'https://b.ewd.io/UnplugAE' %}"}
    {'{% endif %}'}

    <Offer
      brand="@chelseasyoga"
      image="unplug/yoga.jpg"
      imageWidth={180}
      body="“Unplugging for me will forever be chasing a sunset with music in my ears. Shoes off, grounding down into the earth, and basking in that golden hour. It’s the best exhale I’ve ever felt.”"
      divider={false}
    />
    <p>
    Chase your own sunset in affordable, high-quality workout gear from Kate Hudson's Fabletics. With prints and basics galore, there's something for every aspiring athlete.
    </p>
    <p>
      <b>30,000 points</b> 
    </p>
    <Button href="{{  fabletics  }}">Shop Fabletics</Button>

    <Offer
      brand="@krista.horton"
      image="unplug/dinner.jpg"
      imageWidth={180}
      body="“I love to go to lunch or dinner with friends and family! Being around people that make you forget about your phone is my favorite way to recharge!”"
      divider={false}
      invert
    />
    <p>
    For added quality time, skip the restaurant and make a meal with your tribe courtesy of EveryPlate. The meal kit delivery service is all about simple recipes with only the highest quality ingredients.
    </p>
    <p>
      <b>7,500 points</b> 
    </p>
    <Button href="{{  everyplate  }}">Shop EveryPlate</Button>

    <Offer
      brand="@stephsolts"
      image="unplug/read.jpg"
      imageWidth={180}
      body="“My favorite way to unplug is to curl up on the couch with a good book, a face mask on, and a warm cup of tea.” - Steph Solty, Marketing at Drop"
      divider={false}
    />
   
    <p>
    The oldest trick in the unplug book: curl up with a great book. Turn to Kobo for 2019's latest page-turners.
    </p>
    <p>
      <b>5,000 points</b> 
    </p>
    <Button href="{{  kobo  }}">Shop Kobo</Button>

    <Offer
      brand="@nazaninkavari"
      image="unplug/clean.jpg"
      imageWidth={180}
      body="“My favorite way to unwind is to start out by cleaning my apartment. A clear space is a clear mind. Then I like to spend a little extra time pampering myself, like taking a long shower, doing a hair mask, face mask, etc. I like to take some time to reflect and relax.”"
      divider={false}
      invert
    />
    
    <p>
    Marie Kondo your way to a clearer mind with Boxed. Stock up on storage bins, and pamper yourself by way of face masks and hair care - all, for less.
    </p>
    <p>
      <b>60 PER $1</b> 
    </p>
    <Button href="{{  boxed  }}">Shop Boxed</Button>

    <Offer
      brand="@theaugustdiaries"
      image="unplug/wine.jpg"
      imageWidth={180}
      body="“My favourite way to unplug is to spend a quiet night at home with my husband and dog, Theo. We make dinner, watch a movie and snuggle with Theo.”"
      divider={false}
    />
    
    <p>
    On the menu tonight: top-shelf wine and quality eats, courtesy of Firstleaf and Every Plate. Take the night off and leave dinner to the professionals.
    </p>
    <p>
      <b>20,000 points</b> 
    </p>
    <Button href="{{  firstleaf  }}">Shop Firstleaf</Button>

    <Offer
      brand="@teachcreatemotivate"
      image="unplug/shop.jpg"
      imageWidth={180}
      body="“The best way for me to unplug is by a fun girls day of lunch and shopping! A trip to Target, Sephora, and American Eagle is just what you need sometimes!”"
      divider={false}
      invert
    />
      <p>
      Retail therapy? Say no more. Shop American Eagle for this season's hottest denim, dresses, and accessories.
    </p>
    <p>
      <b>10 PER $1</b> 
    </p>
    <Button href="{{  ae  }}">Shop American Eagle</Button>

  </OfferRowTemplate>
)

export default CyberWeek
