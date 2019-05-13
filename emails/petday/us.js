import React from 'react'
import { Offer, DefaultTemplate, Button } from '../../src/components'

const CasperEmail = () => (
 <DefaultTemplate
   preheaderText="A round-up of our top deals just for Man's Best Friend."
   hero="petday/pet_day_email.png"
   title="You can't teach an old dog new tricks."
   body="But you can buy them new treats. Go on, show your furry best friend some love today."
   button={false}
 >
   {'{% set suid = userAttribute.suid %}'}
   {'{% if suid is defined %}'}
   {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
   {"{% set superchewer = root ~ '836&suid=' ~ suid %}"}
   {"{% set rover = root ~ '600&suid=' ~ suid %}"}
   {"{% set farmersdog = root ~ '501&suid=' ~ suid %}"}
   {'{% else %}'}
   {"{% set superchewer = 'https://b.ewd.io/petdaysuperchewerUS' %}"}
   {"{% set rover = 'https://b.ewd.io/petdayroverUS' %}"}
   {"{% set farmersdog = 'https://b.ewd.io/petdayfarmersdogUS' %}"}
   {'{% endif %}'}

   <Offer
     brand="Super Chewer"
     image="petday/superchewer.jpg"
     pointRate="10,000"
     tagline={false}
     title="When light and fluffy doesn't quite cut it, get durable dog stuff from Super Chewer every month."
     body="Every box comes with:"
     button="Sign Up Now"
     link="{{  superchewer  }}"
   >
   <ul>
     <li>2 Tough Toys (tested by only the toughest pups)</li>
    <li>2 Full-size bags of treats</li>
     <li>2 Meaty Chews (always all-natural)</li>
   </ul>

   <p>
   Each month has a different theme, and shipping is always free. Get your first box for just $29, filled to the brim with over $45 of premium dog stuff.
   </p>

    </Offer>

   <Offer
     brand="Rover"
     pointRate="20,000"
     image="petday/rover1.jpg"
     tagline={false}
     title={false}
     body="Life gets busy - but your pup doesn't need to know that. For on-the-go dog owners trying to make it all work, look to Rover: the nation's largest network of 5-star pet sitters and dog walkers. Book house-sitting services, doggy day care, and on-demand walks safely and securely through the Rover app, and never worry about your dog's well-being again."
     button="Sign Up Now"
     link="{{  rover  }}"
   />


   <Offer
     brand="The Farmer's Dog"
     pointRate="50,000"
     image="petday/farmersdog1.jpg"
     tagline={false}
     title={false}
     body="You don't eat overly processed foods, so why serve them to your dog? For Fido-approved fare, turn to The Farmer's Dog: the farm-to-bowl company that delivers fresh, homemade dog food made by pet lovers, for pet lovers. Find a personalized meal plan that works for you and your pup - totally hassle-free."
     button="Order Now"
     link="{{  farmersdog  }}"
     divider={false}
   />

 </DefaultTemplate>
)

export default CasperEmail
