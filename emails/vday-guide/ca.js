import React from 'react'
import { Offer, DefaultTemplate, Button, Link } from '../../src/components'

const CasperEmail = () => (
  <DefaultTemplate
    preheaderText="Roses are red, shopping is hard. This February 14th, choose your own Valentine's Day."
    hero="vday-guide/valentinesday_emailbanner1.gif"
    title="Roses are red, shopping is hard."
    body="This February 14th, choose your own Valentine's Day. Because love is never one size fits all."
    button={<Button>Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set sephora = root ~ '649&suid=' ~ suid %}"}
    {"{% set indigo = root ~ '454&suid=' ~ suid %}"}
    {"{% set giftagram = 'https://b.ewd.io/VdayGiftagramCAN' %}"}
    {"{% set groupon = root ~ '537&suid=' ~ suid %}"}
    {"{% set seatgeek = root ~ '540&suid=' ~ suid %}"}
    {"{% set barkbox = root ~ '400&suid=' ~ suid %}"}
    {"{% set forever21 = root ~ '742&suid=' ~ suid %}"}
    {"{% set hellofresh = root ~ '470&suid=' ~ suid %}"}
    {"{% set links = root ~ '681&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set sephora = 'https://b.ewd.io/VdaySephoraCAN' %}"}
    {"{% set giftagram = 'https://b.ewd.io/VdayGiftagramCAN' %}"}
    {"{% set groupon = 'https://b.ewd.io/VdayGrouponCAN' %}"}
    {"{% set seatgeek = 'https://b.ewd.io/VdaySeatGeekCAN' %}"}
    {"{% set indigo = 'https://b.ewd.io/VdayIndigo' %}"}
    {"{% set barkbox = 'https://b.ewd.io/VdayBarkBoxCAN' %}"}
    {"{% set links = 'https://b.ewd.io/VdayLinks' %}"}
    {"{% set forever21 = 'https://b.ewd.io/VdayForever21US' %}"}
    {"{% set hellofresh = 'https://b.ewd.io/VdayHelloFresh' %}"}
    {'{% endif %}'}

    <Offer
      brand="The Traditionalist"
      image="vday-guide/giftguide_traditionalistCA.jpg"
      imageWidth="600"
      imageHeight="425"
      title="Why mess with a good thing? For the classic love in mind, shop traditional gifts with a modern twist."
      link="https://b.ewd.io/12DaysHerUS"
      divider={false}
      button="Shop All"
    />

    <Link
      href="{{  indigo  }}"
      label="1. Planter Sloth Figural - "
    >
      Indigo
    </Link>
    <Link
      href="{{  sephora  }}"
      label="2. Becca’s Ultimate Lipstick Love — "
    >
      Sephora
    </Link>
    <Link
      href="{{  forever21  }}"
      label="3. Disc Charm Necklace — "
    >
      Forever 21
    </Link>
    <Link
      href="{{  giftagram  }}"
      label="4. Present Day Retreat Spa Box - "
    >
      Giftagram
    </Link>
    <Link
      href="{{  giftagram  }}"
      label="5. Sugarfina Vice 3 Piece Bento — "
    >
      Giftagram
    </Link>
    <Link
      href="{{  indigo  }}"
      label="6. Daniel Wellington Classic Collection Watch - "
    >
      Indigo
    </Link>
    <Link
      href="{{  links  }}"
      label="7. Endless Love Gold Mini Hoop Earrings - "
    >
      Links of London
    </Link>
    <Link
      href="{{  giftagram  }}"
      label="8. You're The Beary Best Cookiegram by Lindsey Bakes - "
    >
      Giftagram
    </Link>
    <Link
      href="{{  indigo  }}"
      label="9. Mood Indigo Candle - "
    >
      Indigo
    </Link>
    <Link
      href="{{  giftagram  }}"
      label="10. Pink Orchid Display - "
    >
      Giftagram
    </Link>
    
    <Offer
    button={false}
    />

    <Offer
      image="vday-guide/giftguide_homebodyCA.jpg"
      imageWidth="600"
      imageHeight="425"
      brand="The Homebody"
      title="Fall in love with quality food and drink - without ever having to leave the couch."
      link="https://b.ewd.io/12DaysHimUS"
      button="Shop All"
      divider={false}
    />
    <Link
      href="{{  indigo  }}"
      label="1. Gravity Weighted Blanket - "
    >
      Indigo
    </Link>
    <Link
      href="{{  indigo  }}"
      label="2. Soulmates Mug - "
    >
      Indigo
    </Link>
    <Link
      href="{{  giftagram  }}"
      label="3. Zenato Amarone della Valpolicella Classico - "
    >
      Giftagram
    </Link>
    <Link
      href="{{  indigo  }}"
      label="4. Illume Elemental Candle, Rosewood Cassis - "
    >
      Indigo
    </Link>
    <Link
      href="{{  indigo  }}"
      label="5. The 5 Love Languages by Gary Chapman - "
    >
      Indigo
    </Link>
    <Link
      href="{{  hellofresh  }}"
      label="6. Date night in with "
    >
      HelloFresh
    </Link>
    <Link
      href="{{  giftagram  }}"
      label="7. Sugarfina Pop the Champagne Gift Set — "
    >
      Giftagram
    </Link>

   <Offer
    button={false}
    />

    <Offer
      image="vday-guide/giftguide_experientalistCA.jpg"
      imageWidth="600"
      imageHeight="425"
      brand="The Experientialist"
      title="Love means never having to sit still. Our top heart-fuelled outings to carry you thru February (SOs optional)."
      link="https://b.ewd.io/12DaysWorkUS"
      button="Shop All"
      divider={false}
    />
    <Link
      href="{{  groupon  }}"
      label="1. Make your own wine with "
    >
      Groupon
    </Link>
    <Link
      href="{{  groupon  }}"
      label="2. Skate circles around your partner with "
    >
      Groupon
    </Link>

    <Link
      href="{{  groupon  }}"
      label="3. Indulge in a massage at your local spa with "
    >
      Groupon
    </Link>
    <Link
      href="{{  seatgeek  }}"
      label="4. Nab tickets to the big game with "
    >
      SeatGeek
    </Link>
    <Link
      href="{{  seatgeek  }}"
      label="5. Take in a concert with "
    >
      SeatGeek
    </Link>
    <Link
      href="{{  groupon  }}"
      label="6. Enjoy at night at the theatre with "
    >
      Groupon
    </Link>
    <Link
      href="{{  groupon  }}"
      label="7. Sip cocktails of your own creation with "
    >
      Groupon
    </Link>

    <Offer
    button={false}
    />


    <Offer
      image="vday-guide/giftguide_petloverCA.jpg"
      imageWidth="600"
      imageHeight="425"
      brand="The Pet Lover"
      title="For the ruff relationship in your life. Don't forget Fido."
      link="https://b.ewd.io/12DaysStockingUS"
      button="Shop All"
      divider={false}
    />
    <Link
      href="{{  indigo  }}"
      label="1. Fringe Studio Pet Cuddler Bed, Celestial - "
    >
      Indigo
    </Link>
    <Link
      href="{{  indigo  }}"
      label="2. Fringe Studio Nosey Dog Spot Bowl - "
    >
      Indigo
    </Link>
    <Link
      href="{{  indigo  }}"
      label="3. Fringe Studio Ceramic Good Doggie Treat Jar -  "
    >
      Indigo
    </Link>
    <Link
      href="{{  groupon  }}"
      label="4. Burts Bees Brush for Dogs - "
    >
      Groupon
    </Link>
    <Link
      href="{{  groupon  }}"
      label="5. Marvel Comics-Themed Squeaky Rope Knot Toy - "
    >
      Groupon
    </Link>
    <Link
      href="{{  barkbox  }}"
      label="6. Valentine's Day box - "
    >
      BarkBox
    </Link>

  </DefaultTemplate>
)

export default CasperEmail
