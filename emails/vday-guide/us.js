import React from 'react'
import { Offer, DefaultTemplate, Button, Link } from '../../src/components'

const CasperEmail = () => (
  <DefaultTemplate
    preheaderText="Give the gift of no re-gift with our top picks for everyone on your list."
    hero="vday-guide/valentinesday_emailbanner2.gif"
    title="Our 12 Days of Gifting starts Tuesday!"
    body="Give the gift of no re-gift with our top picks for everyone on your list."
    button={<Button>Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set sephoraus = root ~ '647&suid=' ~ suid %}"}
    {"{% set samsclub = root ~ '322&suid=' ~ suid %}"}
    {"{% set nike = root ~ '580&suid=' ~ suid %}"}
    {"{% set homedepot = root ~ '803&suid=' ~ suid %}"}
    {"{% set harrys = root ~ '801&suid=' ~ suid %}"}
    {"{% set kobous = root ~ '518&suid=' ~ suid %}"}
    {"{% set firstleaf = root ~ '794&suid=' ~ suid %}"}
    {"{% set giftus = 'https://b.ewd.io/12GiftagramUS' %}"}
    {"{% set rocketus = root ~ '666&suid=' ~ suid %}"}
    {"{% set puma = root ~ '800&suid=' ~ suid %}"}
    {"{% set macys = root ~ '674&suid=' ~ suid %}"}
    {"{% set backcountry = root ~ '687&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set sephoraus = 'https://b.ewd.io/12SephoraUS' %}"}
    {"{% set samsclub = 'https://b.ewd.io/12SamsClubUS' %}"}
    {"{% set nike = 'https://b.ewd.io/12NikeUS' %}"}
    {"{% set homedepot = 'https://b.ewd.io/12HomeDepotUS' %}"}
    {"{% set harrys = 'https://b.ewd.io/12HarrysUS' %}"}
    {"{% set kobous = 'https://b.ewd.io/12KoboUS' %}"}
    {"{% set firstleaf = 'https://b.ewd.io/12FirstleafUS' %}"}
    {"{% set giftus = 'https://b.ewd.io/12GiftagramUS' %}"}
    {"{% set rocketus = 'https://b.ewd.io/12RocketmilesUS' %}"}
    {"{% set puma = 'https://b.ewd.io/12PumaUS' %}"}
    {"{% set macys = 'https://b.ewd.io/12MacysUS' %}"}
    {"{% set backcountry = 'https://b.ewd.io/12BackcountryUS' %}"}
    {'{% endif %}'}

    <Offer
      brand="The Traditionalist"
      image="vday-guide/giftguide_traditionalist.jpg"
      imageWidth="600"
      imageHeight="425"
      title="Why mess with a good thing? For the classic love in mind, shop traditional gifts with a modern twist."
      link="https://b.ewd.io/12DaysHerUS"
      divider={false}
      button="Shop All"
    />
<<<<<<< HEAD
=======

    <Offer
      body="1. The Babar with Succulent — Urban Stems"
      link="{{ contacts }}"
      divider={false}
      button={false}
    />
    <Offer
      body="2. Becca’s Ultimate Lipstick Love — Sephora"
      link="{{ contacts }}"
      divider={false}
      button={false}
    />
    <Offer
      body="3. Disc Charm Necklace — Forever 21"
      link="{{ contacts }}"
      divider={false}
      button={false}
    />
    <Offer
      body="4. Teak + Twine The Rose — Giftagram"
      link="{{ contacts }}"
      divider={false}
      button={false}
    />
    <Offer
      body="5. Sugarfina Vice 3 Piece Bento — Giftagram"
      link="{{ contacts }}"
      divider={false}
      button={false}
    />
    <Offer body="6. Ghost Iris — MVMT" link="{{ contacts }}" divider={false} button={false} />
    <Offer
      body="7. Sophie Harper, Front to Back Open Heart Huggies — Rocksbox"
      link="{{ contacts }}"
      divider={false}
      button={false}
    />
    <Offer
      body="8. Valentine’s Day Heart Tin — Godiva"
      link="{{ contacts }}"
      divider={false}
      button={false}
    />
    <Offer
      body="9. Birchbox Subscription - Birchbox"
      link="{{ contacts }}"
      divider={false}
      button={false}
    />
    <Offer body="10. The Bombshell - Urban Stems" link="{{ contacts }}" button={false} />
>>>>>>> 72c0b0b3ca6d4258cf48761e9cba477ca1b5baf0

    <Link
      href="{{  urbanstems  }}"
      label="1. The Babar with Succulent — "
    >
      Urban Stems
    </Link>
    <Link
      href="{{  sephora  }}"
      label="2. Becca’s Ultimate Lipstick Love — "
    >
      Sephora
    </Link>
    <Link
      href="{{  sephora  }}"
      label="3. Disc Charm Necklace — "
    >
      Forever 21
    </Link>
    <Link
      href="{{  sephora  }}"
      label="4. Teak + Twine The Rose — "
    >
      Giftagram
    </Link>
    <Link
      href="{{  sephora  }}"
      label="5. Sugarfina Vice 3 Piece Bento — "
    >
      Giftagram
    </Link>
    <Link
      href="{{  sephora  }}"
      label="6. Ghost Iris Watch — "
    >
      MVMT
    </Link>
    <Link
      href="{{  sephora  }}"
      label="7. Sophie Harper, Front to Back Open Heart Huggies — "
    >
      Rocksbox
    </Link>
    <Link
      href="{{  sephora  }}"
      label="8. Valentine’s Day Heart Tin — "
    >
      Godiva
    </Link>
    <Link
      href="{{  sephora  }}"
      label="9. Birchbox Subscription - "
    >
      Birchbox
    </Link>
    <Link
      href="{{  sephora  }}"
      label="10. The Bombshell - "
    >
      Urban Stems
    </Link>
    
    <Offer
      image="vday-guide/giftguide_homebody.jpg"
      imageWidth="600"
      imageHeight="425"
      brand="The Homebody"
      body="Fall in love with quality food and drink - without ever having to leave the couch."
      link="https://b.ewd.io/12DaysHimUS"
    />
    <Link
<<<<<<< HEAD
      href="{{  surlatable  }}"
=======
      href="https://b.ewd.io/HpnaznWoVR"
>>>>>>> 72c0b0b3ca6d4258cf48761e9cba477ca1b5baf0
      label="1. Staub Ceramic 3 Piece Mini Heart Cocettes Set — "
    >
      Sur La Table
    </Link>
    <Offer
      body="2. The 5 Love Languages by Gary Chapman — Barnes & Noble"
      link="{{ contacts }}"
      divider={false}
      button={false}
    />
    <Offer
      body="3. Josh Cellars North Coast Family Reserve Cabernet Sauvignon - Drizly"
      link="{{ contacts }}"
      divider={false}
      button={false}
    />
    <Offer
      body="4. Je T’aime Mug — Sur La Table"
      link="{{ contacts }}"
      divider={false}
      button={false}
    />
    <Offer
      body="5. OURS Auteur Candle — Giftagram"
      link="{{ contacts }}"
      divider={false}
      button={false}
    />
    <Offer
      body="6. Date night in with Home Chef"
      link="{{ contacts }}"
      divider={false}
      button={false}
    />
    <Offer
      body="7. Sugarfina Pop the Champagne Gift Set — Giftagram"
      link="{{ contacts }}"
      button={false}
    />

    <Offer
      image="vday-guide/giftguide_experientalist.jpg"
      imageWidth="600"
      imageHeight="425"
      brand="The Experientialist"
      body="Love means never having to sit still. Our top heart-fuelled outings to carry you thru February (SOs optional)."
      link="https://b.ewd.io/12DaysWorkUS"
    />
    <Offer
      body="1. Binge watch your fave show with Hulu"
      link="{{ contacts }}"
      divider={false}
      button={false}
    />
    <Offer
      body="2. Skate circles around your partner with Groupon"
      link="{{ contacts }}"
      divider={false}
      button={false}
    />
    <Offer
      body="3. Indulge in a massage at your local spa with Groupon"
      link="{{ contacts }}"
      divider={false}
      button={false}
    />
    <Offer
      body="4. Nab tickets to the big game with Fanxchange"
      link="{{ contacts }}"
      divider={false}
      button={false}
    />
    <Offer
      body="5. Take in a concert with SeatGeek"
      link="{{ contacts }}"
      divider={false}
      button={false}
    />
    <Offer
      body="6. Watch the latest and greatest releases with Fandango"
      link="{{ contacts }}"
      divider={false}
      button={false}
    />
    <Offer
      body="7. Sip cocktails of your own creation with Groupon"
      link="{{ contacts }}"
      button={false}
    />
    <Offer
      image="vday-guide/giftguide_petlover.jpg"
      imageWidth="600"
      imageHeight="425"
      brand="The Pet Lover"
      body="For the ruff relationship in your life. Don't forget Fido."
      link="https://b.ewd.io/12DaysStockingUS"
    />
    <Offer
      body="1. PetLinks Soothing Escape Pet Bed with Gel Memory Foam — Sam’s Club"
      link="{{ contacts }}"
      divider={false}
      button={false}
    />
    <Offer
      body="2. Milk-Bone Soft & Chewy Dog Snacks — Sam’s Club"
      link="{{ contacts }}"
      divider={false}
      button={false}
    />
    <Offer
      body="3. Territory 12” Bone Stuff Toy, Modern Collection — Jet"
      link="{{ contacts }}"
      divider={false}
      button={false}
    />
    <Offer
      body="4. KONG Classic Dog Toy — Jet"
      link="{{ contacts }}"
      divider={false}
      button={false}
    />
    <Offer
      body="5. Hyper Pet Plush Dog Toy Play Pack — Sam’s Club"
      link="{{ contacts }}"
      divider={false}
      button={false}
    />
    <Offer body="6. Valentine's Day BarkBox" link="{{ contacts }}" divider={false} button={false} />
  </DefaultTemplate>
)

export default CasperEmail
