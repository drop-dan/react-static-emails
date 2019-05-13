import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="Crowd-sourced gift ideas designed to make her feel all the warm and fuzzies inside! 💌"
    heroLink="https://b.ewd.io/SleepUS"
    hero="mothers-day/mday_emailbanner.gif"
    title="Not your Mom's Mother's Day gifts."
    body="On May 12, make her tear up. (Just a little bit.) "
    button={<Button href="https://b.ewd.io/mothersdayUS">Shop Mother's Day</Button>}
  >
  {'{% set suid = userAttribute.suid %}'}
  {'{% if suid is defined %}'}
  {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
  {"{% set overstock = root ~ '695&suid=' ~ suid %}"}
  {"{% set sephora = root ~ '903&suid=' ~ suid %}"}
  {"{% set groupon = root ~ '511&suid=' ~ suid %}"}
  {"{% set bouqs = root ~ '857&suid=' ~ suid %}"}
  {"{% set hulu = root ~ '908&suid=' ~ suid %}"}
  {'{% else %}'}
  {"{% set overstock = 'https://b.ewd.io/MothersDayOverstockUS' %}"}
  {"{% set sephora = 'https://b.ewd.io/MothersDaySephoraUlta' %}"}
  {"{% set groupon = 'https://b.ewd.io/MothersDayGrouponUS' %}"}
  {"{% set bouqs = 'https://b.ewd.io/MothersDayBouqsUS' %}"}
  {"{% set hulu = 'https://b.ewd.io/MothersDayHuluUS' %}"}
  {'{% endif %}'}

    <Offer
      image="mothers-day/mday_sephora.png"
      tagline="Pamper"
      body="“My Mom is a serious beauty fanatic, so we always shower her with a basket of lotions, essential oils, face masks, and perfume she wouldn't necessarily buy for herself. An at-home manicure goes a long way!” - Carrie W."
      button="Pamper Mom"
      note="*Beauty Insiders receive 10% off, VIB receive 15% off and Rouge members receive 20% off."
      link="{{  sephora  }}"
    >
      <p>
      Now you can bring the spa to Mom, thanks to Sephora. Plus, shop Sephora's Spring Beauty event and score 10%-20% off only until May 6.*
      </p>
    </Offer>

    <Offer
      image="mothers-day/mday_overstock.png"
      tagline="Brunch"
      body="“Every Mother's Day we wake up super early, decorate the kitchen, and make my Mom a large brunch. We focus less on finding the perfect wrapped gift, and really lean in on quality time.” - Angela H."
      button="Get Cooking"
      link="{{  overstock  }}"
    >
      <p>
      Nothing says “I love you” quite like homemade avocado toast. This Mother's Day, make her a feast she won't soon forget with a beautiful table set-up from Overstock.com.
      </p>
    </Offer>
   
    <Offer
      image="mothers-day/mday_groupon.png"
      tagline="Activities"
      body="“Mother's Day means a night out on the town with me and my Mom. We've done it all: concerts, museums, ballets, comedy shows. It's a great way to share an experience together, just the two of us.” - Andrew O."
      button="Take Her Out"
      link="{{  groupon  }}"
    >
      <p>
      Who says you have to keep the celebrations to Sunday? Scope out her favorite events in your city, and make a night of it with Groupon. 
      </p>
    </Offer>
    
    <Offer
      image="mothers-day/mday_bouqs.png"
      tagline="Indulge"
      body="“We like to keep things traditional. Flowers, wine, and quality time at home is the perfect way to say “thank you” and decompress.” - Melanie T."
      button="Go Classic"
      note="Get a deluxe-sized Bouq and only pay for an Original on select styles using code at checkout."
      link="{{  bouqs  }}"
      >
      <p>
      It's tough to go wrong bearing a bouquet and Barolo. Plus, shop Bouqs for Mother's Day and score DOUBLE the blooms with code 2FORMOM. 
      </p>

    </Offer>
    <Offer
      image="mothers-day/mday_hulu.png"
      tagline="Relaxation"
      body="“Mother's Day means letting my Mom relax. It's her day, so we let her dictate what she wants to do, which is typically kick up her feet with a favorite flick, and then an afternoon snooze.” - Ashley G."
      button="Sleep In"
      note="Only for new members."
      link="{{  hulu  }}"
      divider={false}
      >
      <p>
      Give the gift of a quality entertainment with Hulu and let mom choose from top shows, classic series and hit movies. 
      </p>
    </Offer>
  </DefaultTemplate>
)

export default BlackFridayEmail
