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
    {"{% set bouqs = root ~ '857&suid=' ~ suid %}"}
    {"{% set giftagram = root ~ '320&suid=' ~ suid %}"}
    {"{% set urbanstems = root ~ '827&suid=' ~ suid %}"}
    {"{% set sephora = root ~ '904&suid=' ~ suid %}"}
    {"{% set colourpop = root ~ '876&suid=' ~ suid %}"}
    {"{% set paula = root ~ '659&suid=' ~ suid %}"}
    {"{% set jet = root ~ '513&suid=' ~ suid %}"}
    {"{% set apple = root ~ '624&suid=' ~ suid %}"}
    {"{% set fitbit = root ~ '595&suid=' ~ suid %}"}
    {"{% set adidas = root ~ '884&suid=' ~ suid %}"}
    {"{% set justfab = root ~ '699&suid=' ~ suid %}"}
    {"{% set modcloth = root ~ '570&suid=' ~ suid %}"}
    {"{% set surlatable = root ~ '667&suid=' ~ suid %}"}
    {"{% set etsy = root ~ '704&suid=' ~ suid %}"}
    {"{% set hayneedle = root ~ '743&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set bouqs = 'https://b.ewd.io/MothersDayGiftBouqsUS' %}"}
    {"{% set giftagram = 'https://b.ewd.io/MothersDayGiftGiftagramUS' %}"}
    {"{% set urbanstems = 'https://b.ewd.io/MothersDayGiftUrbanStemsUS' %}"}
    {"{% set sephora = 'https://b.ewd.io/MothersDayGiftSephoraBothUS' %}"}
    {"{% set colourpop = 'ttps://b.ewd.io/MothersDayGiftColourPopUS' %}"}
    {"{% set paula = 'https://b.ewd.io/MothersDayGiftPaulasChoiceUS' %}"}
    {"{% set jet = 'https://b.ewd.io/MothersDayGiftJetUS' %}"}
    {"{% set apple = 'https://b.ewd.io/MothersDayGiftAppleUS' %}"}
    {"{% set fitbit = 'https://b.ewd.io/MothersDayGiftFitbitUS' %}"}
    {"{% set adidas = ' https://b.ewd.io/MothersDayGiftAdidasUS' %}"}
    {"{% set justfab = 'https://b.ewd.io/MothersDayGiftJustFabUS' %}"}
    {"{% set modcloth = ' https://b.ewd.io/MothersDayGiftModClothUS' %}"}
    {"{% set surlatable = 'https://b.ewd.io/MothersDayGiftSurLaTableUS' %}"}
    {"{% set etsy = 'https://b.ewd.io/MothersDayGiftEtsyUS' %}"}
    {"{% set hayneedle = 'https://b.ewd.io/MothersDayGiftHayneedle' %}"}
    {'{% endif %}'}

    <Offer
      image="mothers-day2/flowers_us.png"
      link="https://b.ewd.io/12DaysHerUS"
      button={false}
      divider={false}
    />

    <Link
      href="{{  bouqs  }}"
      label="1. Just Smiles Bouquet - "
    >
      Bouqs
    </Link>
    <Link
      href="{{  giftagram  }}"
      label="2. Present Day Floral Spa Gift Box — "
    >
      Giftagram
    </Link>
    <Link
      href="{{  urbanstems  }}"
      label="3. The Tulum Bouquet — "
    >
     Urban Stems
    </Link>
    <Offer
    button="Shop All"
    />

      <Offer
      image="mothers-day2/beauty_us.png"
      link="https://b.ewd.io/12DaysHerUS"
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
      link="https://b.ewd.io/12DaysHerUS"
      button={false}
      divider={false}
    />

    <Link
      href="{{  jet  }}"
      label="1. Beats Powerbeats 3 Wireless Earphones - "
    >
      Jet
    </Link>
    <Link
      href="{{  apple  }}"
      label="2. iPad Mini — "
    >
      Apple
    </Link>
    <Link
      href="{{  fitbit  }}"
      label="3. Inspire HR Lilac — "
    >Fitbit
    </Link>
    <Offer
    button="Shop All"
    />
          <Offer
      image="mothers-day2/shoes_us.png"
      link="https://b.ewd.io/12DaysHerUS"
      button={false}
      divider={false}
    />

    <Link
      href="{{  adidas  }}"
      label="1. Team Bag Medium - "
    >
      adidas
    </Link>
    <Link
      href="{{  justfab  }}"
      label="2. Noura Heeled Sandal — "
    >
    JustFab
    </Link>
    <Link
      href="{{  modcloth  }}"
      label="3. Withstanding Wow Necklace — "
    >
      ModCloth
    </Link>
    <Offer
    button="Shop All"
    />
          <Offer
      image="mothers-day2/home_us.png"
      link="https://b.ewd.io/12DaysHerUS"
      button={false}
      divider={false}
    />

    <Link
      href="{{  surlatable  }}"
      label="1. Üllo Carafe Set with Wine Purifier - "
    >
      Sur La Table
    </Link>
    <Link
      href="{{  etsy  }}"
      label="2. Custom Engraved Cutting Board — "
    >
      Etsy
    </Link>
    <Link
      href="{{  hayneedle  }}"
      label="3. Eightmood Concrete and Cork Verbena and Mediterranean Citrus Oil Diffuser — "
    >
      Hayneedle
    </Link>
    <Offer
    button="Shop All"
    divider={false}
    />

  </DefaultTemplate>
)

export default CasperEmail
