import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="Brands we ❤️ founded by females. Discover the stories behind Birchbox, ClassPass, and more inside."
    heroLink="https://b.ewd.io/SleepUS"
    hero="womens-day/womensday_emailbanner_us.gif"
    title="Across the globe, women are making waves."
    body="This week (and every week), we're celebrating female founders of brands we're so proud to have on Drop."
    button={<Button href="https://b.ewd.io/SleepUS">Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% set name = userAttribute.firstName %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set birchbox = root ~ '550&suid=' ~ suid %}"}
    {"{% set classpass = root ~ '630&suid=' ~ suid %}"}
    {"{% set paula = root ~ '659&suid=' ~ suid %}"}
    {"{% set stitchfix = root ~ '425&suid=' ~ suid %}"}
    {"{% set twentyandme = root ~ '708&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set birchbox = 'https://b.ewd.io/IWDBirchbox' %}"}
    {"{% set classpass = 'https://b.ewd.io/IWDClassPassUS' %}"}
    {"{% set paula = 'https://b.ewd.io/IWDPaulaUS' %}"}
    {"{% set stitchfix = 'https://b.ewd.io/IWDStitchfixUS' %}"}
    {"{% set twentyandme = 'https://b.ewd.io/IWD23andmeUS' %}"}
    {'{% endif %}'}

    <p>{"{{ name }}"}</p>

    <Offer
      brand="Birchbox"
      image="womens-day/katia_hayley.png"
      tagline="Up to 12,000 POINTS"
      body="Birchbox cofounders Katia Beauchamp and Hayley Barna met at Harvard Business School (NBD) in 2009, where they first pioneered the idea behind delivering quality, sample-size beauty products to shoppers just like themselves. The pair shipped their first Birchbox back in 2010, and now, million of boxes later, Beauchamp and Barna's mission remains the same: to help women (and men!) find products they love."
      link="{{ birchbox }}"
      note="Availabe only for new Birchbox members."
    />
    <Offer
      brand="ClassPass"
      image="womens-day/payal.png"
      tagline="10,000 POINTS"
      body="ClassPass was founded in 2013 after dance enthusiast Payal Kadakia couldn't find a class to take post-work in New York City. A million and one sigh-inducing Google searches later, Kadakia didn't make it to class - but she did find a major gap in the fitness market. What started as an app that made finding and booking classes easy, is now a global phenomenon that's changing the way people live their lives."
      link="{{ classpass }}"
      note="Available only for new ClassPass members."
    />
    <Offer
      image="womens-day/paula.png"
      brand="Paula's Choice" 
      tagline="80 POINTS PER $1"
      body="Paula Begoun founded radical skin care company Paula's Choice in 1995 with one main guiding principle: women deserve the truth, no matter what. After realizing she was actually making her skincare woes of acne and eczema worse by applying the wrong ingredients to her face, Begoun set out to learn everything she could about the science of skin care - with the goal of sharing that knowledge with others. 20 bestselling beauty books and countless talkshow appearances later, Begoun kept her promise: to date, Paula's Choice offers only the honest, straightforward truth about skin care, day in, day out."
      link="{{ paula }}"
    />
    <Offer
      brand="Stitch Fix"
      tagline="7,500 POINTS"
      image="womens-day/katrina.png"
      body="Harvard alum Katrina Lake founded Stitch Fix in 2011 to combine the human touch of personal styling with the digital realm of proprietary algorithms. She shipped the first Stitch Fix out of her Cambridge apartment 8 years ago, and since then has established a cult following of millions of fashion-forward men and women across the United States looking for their next favorite outfit (plus sized offerings now available, too!)"
      link="{{ stitchfix }}"
      note="Available only for new Stitch Fix members."
    />
    <Offer
      brand="23andMe"
      tagline="Up to 10,000 POINTS"
      image="womens-day/anne.png"
      body="Anne Wojcicki cofounded 23andMe in 2006 to help people access, understand, and benefit from the human genome. Simple enough mission statement, right? Since then, 23andMe has gained serious global traction, having built one of the world's largest databases of individual genetic information that's redefining how commercial and academic researchers develop new drugs and diagnostics. Wojcicki is bringing personalized medicine directly to the public, and helping participants understand their genetic makeup - one saliva kit at a time."
      link="{{ twentyandme }}"
      divider={false}
    />
  </DefaultTemplate>
)

export default BlackFridayEmail
