import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="2019 travel hotspots for EVERY budget."
    heroLink="https://b.ewd.io/SleepUS"
    hero="spring-travel/travel_emailbanner4.gif"
    title="Winter, you're cancelled."
    body="Our best February blues tip? Plan something to look forward to. (Book a trip.)"
    button={<Button href="https://b.ewd.io/SleepUS">Shop All Travel</Button>}
  >

    <Offer
      image="spring-travel/singapore.png"
      tagline="Best time to travel: February - May"
      button="Book Now"
    >
      <p>
        <b>Go for the:</b> Stunning architecture, made all the more jaw-dropping in the metropolitan city's famed Marina Bay. 
      </p>
      <p>
        <b>Stay for the:</b> Bustling nightlife in Chinatown, picturesque greenery in Bukit Timah Nature Reserve, and shopping mecca on Orchard Road.
      </p>
    </Offer>

    <Offer
      image="spring-travel/albania.png"
      tagline="Best time to travel: April-June"
      button="Book Now"
    >
      <p>
        <b>Go for the:</b> UNESCO world heritage sites of Berat and Gjirokastra, featuring ancient castles, churches, and mosques. 
      </p>
      <p>
        <b>Stay for the:</b> Barely-touched white sand beaches in Dhërmi and Himarë. Mark your calendar for the week of June 12th — the annual Kala boutique music festival in Dhërmi is expected to draw a serious crowd of EDM lovers.
      </p>
    </Offer>
   
    <Offer
      image="spring-travel/norway.png"
      tagline="Best time to travel: June-August"
      button="Book Now"
    >
      <p>
        <b>Go for the:</b> Hiking through Sognefjord, aka King of the Fjords. It's the largest (and deepest) fjord in Norway, so you're guaranteed to get a great 'gram out of the deal. 
      </p>
      <p>
        <b>Stay for the:</b> Lofoten islands. The breathtaking scenery will make the 10+ hour flight well worth it.
      </p>
    </Offer>
    
    <Offer
      image="spring-travel/portland.png"
      tagline="Best time to travel: June-August"
      button="Shop Now"
      >
      <p>
        <b>Go for the:</b> Quaintness of Casco Bay, adored by locals and tourists alike. 
      </p>
      <p>
        <b>Stay for the:</b> Crazy unique eats (be sure to stop by Voodoo Doughnut, it's open 24 hours!), and “Keep Portland Weird” sign.
      </p>
    </Offer>
    <Offer
      image="spring-travel/banff.png"
      tagline="Best time to travel: June-September"
      button="Book Now"
      >
      <p>
        <b>Go for the:</b> Turquoise waters of Lake Louise. Google images don't do the gorgeous hotspot justice. 
      </p>
      <p>
        <b>Stay for the:</b> Canoeing + hiking combo on Moraine Lake. Bonus points if you ask Banff National Park staff how the iconic lake gets its color.
      </p>
    </Offer>
    <Offer
      image="spring-travel/east_africa.png"
      tagline="Best time to travel: July-October"
      button="Book Now"
      divider={false}
      note="Photos from Unsplash.com"
    >
      <p>
        <b>Go for the:</b> G Adventures 9-day Serengeti Safari through Ngorongoro Crater, Serengeti National Park, and beyond to track the “Big Five” (lions, leopards, rhinoceros, elephants, and Cape buffalos - no big deal).
      </p>
      <p>
        <b>Stay for the:</b> Contiki Tour, featuring morning and afternoon game drives in the Masai Mara and Serengeti. The 13-day trip across Kenya and Tanzania will have you staying in African lodges, visiting an orphanage for elephants, and marvelling at an ancient Maasai volcano.
      </p>
    </Offer>
  </DefaultTemplate>
)

export default BlackFridayEmail
