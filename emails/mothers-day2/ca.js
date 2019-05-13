import React from 'react'
import { Offer, DefaultTemplate, Button, Link } from '../../src/components'

const CasperEmail = () => (
  <DefaultTemplate
    preheaderText="Gifts for every budget and style inside."
    hero="mothers-day2/mothersday_giftguide_emailbanner.jpg"
    title="You got it from your Momma. "
    body="Now give her a little something back. Shop top gift ideas for her & earn points when you do."
    button={<Button>Spoil Mom</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set rona = root ~ '532&suid=' ~ suid %}"}
    {"{% set giftagram = root ~ '319&suid=' ~ suid %}"}
    {"{% set indigo = root ~ '454&suid=' ~ suid %}"}
    {"{% set sephora = root ~ '649&suid=' ~ suid %}"}
    {"{% set colourpop = root ~ '877&suid=' ~ suid %}"}
    {"{% set paula = root ~ '642&suid=' ~ suid %}"}
    {"{% set source = root ~ '521&suid=' ~ suid %}"}
    {"{% set costco = root ~ '668&suid=' ~ suid %}"}
    {"{% set staples = root ~ '679&suid=' ~ suid %}"}
    {"{% set adidas = root ~ '464&suid=' ~ suid %}"}
    {"{% set banana = root ~ '498&suid=' ~ suid %}"}
    {"{% set sunglasshut = root ~ '530&suid=' ~ suid %}"}
    {"{% set casper = root ~ '203&suid=' ~ suid %}"}
    {"{% set well = root ~ '473&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set rona = 'https://b.ewd.io/MothersDayGiftRonaCA' %}"}
    {"{% set giftagram = 'https://b.ewd.io/MothersDayGiftGiftagramCA' %}"}
    {"{% set indigo = 'https://b.ewd.io/MothersDayGiftIndigoCA' %}"}
    {"{% set sephora = 'https://b.ewd.io/MothersDayGiftSephoraCA' %}"}
    {"{% set colourpop = 'https://b.ewd.io/MothersDayGiftColourPopCA' %}"}
    {"{% set paula = 'https://b.ewd.io/MothersDayGiftPaulasChoiceCA' %}"}
    {"{% set source = 'https://b.ewd.io/MothersDayGiftTheSourceCA' %}"}
    {"{% set costco = 'https://b.ewd.io/MothersDayGiftCostcoCA' %}"}
    {"{% set staples = 'https://b.ewd.io/MothersDayGiftStaplesCA' %}"}
    {"{% set adidas = 'https://b.ewd.io/MothersDayGiftAdidasCA' %}"}
    {"{% set banana = 'https://b.ewd.io/MothersDayGiftBananaRepublicCA' %}"}
    {"{% set sunglasshut = 'https://b.ewd.io/MothersDayGiftSunglassHutCA' %}"}
    {"{% set well = 'https://b.ewd.io/MothersDayGiftWellCA' %}"}
    {"{% set casper = 'https://b.ewd.io/MothersDayGiftCapserCA' %}"}
    {'{% endif %}'}

    <Offer
      image="mothers-day2/flowers_ca.png"
      link="https://b.ewd.io/MothersDayFlowersCA"
      button={false}
      divider={false}
    />

    <Link
      href="{{  rona  }}"
      label="1. Mandevilla Rio Arrangement - "
    >
      Rona
    </Link>
    <Link
      href="{{  giftagram  }}"
      label="2. Present Day Floral Spa Gift Box — "
    >
      Giftagram
    </Link>
    <Link
      href="{{  indigo  }}"
      label="3. Geo Planter-Mint Marble — "
    >
     Indigo
    </Link>
    <Offer
    button="Shop All"
    />

      <Offer
      image="mothers-day2/beauty_us.png"
      link="https://b.ewd.io/MothersDayBeautyCA"
      button={false}
      divider={false}
    />

    <Link
      href="{{  sephora  }}"
      label="1. Chloé Deluxe Mini Duo - "
    >
      Sephora
    </Link>
    <Link
      href="{{  colourpop  }}"
      label="2. Sweet Talk Shadow Palette — "
    >
      ColourPop
    </Link>
    <Link
      href="{{  paula  }}"
      label="3. Dry Skin Wishlist — "
    >
      Paula's Choice
    </Link>
    <Offer
    button="Shop All"
    />
          <Offer
      image="mothers-day2/electronics_us.png"
      link="- https://b.ewd.io/MothersDayElectronicsCA"
      button={false}
      divider={false}
    />

    <Link
      href="{{  source  }}"
      label="1. Beats Powerbeats 3 Wireless Earphones - "
    >
      The Source
    </Link>
    <Link
      href="{{  costco  }}"
      label="2. iPad Mini — "
    >
      Costco
    </Link>
    <Link
      href="{{  staples  }}"
      label="3. Inspire HR Lilac — "
    >Staples
    </Link>
    <Offer
    button="Shop All"
    />
          <Offer
      image="mothers-day2/shoes_ca.png"
      link="https://b.ewd.io/MothersDayShoesCA"
      button={false}
      divider={false}
    />

    <Link
      href="{{  banana  }}"
      label="1. Sparkle Circle Bracelet  - "
    >
      Banana Republic
    </Link>
    <Link
      href="{{  adidas  }}"
      label="2. eam Bag Medium — "
    >
    adidas
    </Link>
    <Link
      href="{{  sunglasshut  }}"
      label="3. Ray-Ban Wayfarer Classic — "
    >
      Sunglass Hut
    </Link>
    <Offer
    button="Shop All"
    />
          <Offer
      image="mothers-day2/home_ca.png"
      link="https://b.ewd.io/MothersDayHomeCA"
      button={false}
      divider={false}
    />

    <Link
      href="{{  casper  }}"
      label="1. The Pillow - "
    >
      Casper
    </Link>
    <Link
      href="{{  well  }}"
      label="2. Umbra Prisma Photo Display Copper — "
    >
      Well.ca
    </Link>
    <Link
      href="{{  indigo  }}"
      label="3. Mama Needs Coffee and Wine Set — "
    >
      Indigo
    </Link>
    <Offer
    button="Shop All"
    divider={false}
    />

  </DefaultTemplate>
)

export default CasperEmail
