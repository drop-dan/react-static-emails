import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="Brands we ❤️ founded by females. Discover the stories behind ClassPass, 23andMe, and more."
    heroLink="https://b.ewd.io/SleepUS"
    hero="womens-day/womensday_emailbanner_ca.gif"
    title="Across the globe, women are making waves."
    body="This week (and every week), we're celebrating female founders of brands we're so proud to have on Drop."
    button={<Button href="https://b.ewd.io/SleepUS">Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set classpass = root ~ '631&suid=' ~ suid %}"}
    {"{% set paula = root ~ '642&suid=' ~ suid %}"}
    {"{% set indigo = root ~ '454&suid=' ~ suid %}"}
    {"{% set twentyandme = root ~ '799&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set classpass = 'https://b.ewd.io/IWDClassPassCAN' %}"}
    {"{% set paula = 'https://b.ewd.io/IWDPaulaCAN' %}"}
    {"{% set indigo = 'https://b.ewd.io/IWDIndigo' %}"}
    {"{% set twentyandme = 'https://b.ewd.io/IWD23andMeCAN' %}"}
    {'{% endif %}'}

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
      brand="Indigo"
      tagline="30 POINTS PER $1"
      image="womens-day/heather.png"
      body="Created by book lovers for book lovers, Indigo is the brainchild of Heather Reisman, who now serves as Chair and CEO. Founded in 1996, Indigo is Canada's largest book, gift, and specialty toy retailer, with over 200 locations countrywide. But Reisman's lifelong passion for books and culture doesn't stop at print. The McGill alumni went on to co-found Kobo, a leading global eReading company, in 2009. As far as female founders go, Reisman is one to know."
      link="{{ indigo }}"
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
