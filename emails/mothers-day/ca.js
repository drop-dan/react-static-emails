import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="Crowd-sourced gift ideas designed to make her feel all the warm and fuzzies inside! 💌"
    heroLink="https://b.ewd.io/SleepUS"
    hero="mothers-day/mday_emailbanner.gif"
    title="Not your Mom's Mother's Day gifts."
    body="On May 12, make her tear up. (Just a little bit.) "
    button={<Button href="https://b.ewd.io/mothersdayCAN">Shop Mother's Day</Button>}
  >
  {'{% set suid = userAttribute.suid %}'}
  {'{% if suid is defined %}'}
  {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
  {"{% set hellofresh = root ~ '470&suid=' ~ suid %}"}
  {"{% set sephora = root ~ '649&suid=' ~ suid %}"}
  {"{% set groupon = root ~ '537&suid=' ~ suid %}"}
  {"{% set giftagram = root ~ '319&suid=' ~ suid %}"}
  {"{% set indigo = root ~ '454&suid=' ~ suid %}"}
  {'{% else %}'}
  {"{% set hellofresh = 'https://b.ewd.io/MothersDayHelloFreshCAN' %}"}
  {"{% set sephora = 'https://b.ewd.io/MothersDaySephoraCA' %}"}
  {"{% set groupon = 'https://b.ewd.io/MothersDayGrouponCA' %}"}
  {"{% set giftagram = 'https://b.ewd.io/MothersDayGiftagramCA' %}"}
  {"{% set indigo = 'https://b.ewd.io/MothersDayIndigoCA' %}"}
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
      image="mothers-day/mday_hellofresh.png"
      tagline="Brunch"
      body="“Every Mother's Day we decorate the kitchen and make my Mom a large home-cooked meal. We focus less on finding the perfect wrapped gift, and really lean in on quality time.” - Angela H."
      button="Get Cooking"
      link="{{  hellofresh  }}"
      note="*Offer only available for new users. Boosted offer ends May 12."
    >
      <p>
      Nothing says “I love you” quite like a fresh, homemade meal. This Mother's Day, make it easy with HelloFresh and get delivious recipes delivered. Plus, score 5,000 bonus points and 3 FREE meals with code MAYDROP.*
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
      image="mothers-day/mday_giftagram.png"
      tagline="Indulge"
      body="“We like to keep things traditional. Flowers, wine, and quality time at home is the perfect way to say “thank you” and decompress.” - Melanie T."
      button="Go Classic"
      note="Offer only available for new members."
      link="{{  giftagram  }}"
      >
      <p>
      It's tough to go wrong bearing gifts. Shop Giftagram for unique giftboxes that any mom would love. 
      </p>

    </Offer>
    <Offer
      image="mothers-day/mday_indigo.png"
      tagline="Relaxation"
      body="“Mother's Day means letting my Mom relax. It's her day, so we let her dictate what she wants to do, which is typically kick up her feet with a favourite book, and then an afternoon snooze.” - Ashley G."
      button="Read On"
      link="{{  indigo  }}"
      divider={false}
      >
      <p>
      Give the gift of a great read by shopping best books for mom from Indigo.
      </p>
    </Offer>
  </DefaultTemplate>
)

export default BlackFridayEmail
