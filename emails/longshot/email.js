import React from 'react'
import { Offer, DefaultTemplate, Button } from '../../src/components'

const CasperEmail = () => (
  <DefaultTemplate
    preheaderText="Tax season can be taxing. But it doesn't have to be. File H&R Block under: fast, easy & stress-free."
    hero="longshot/longshot_emailbanner_updated.jpg"
    title="Hit us with your best (long) shot "
    body="In partnership with eOne, to celebrate the release of Long Shot, we're giving you + ten (10) friends a private screening in your city!"
  >

    <Offer
      title="But that's not all."
      body="Ever feel like the cat always has your tongue when it comes time to speak in public? Up your confidence game with a FREE improv class of your choosing. Work with the greats to banish your nerves and tickle a funny bone or two."
      button="Enter Now"
      note="Contest ends May 3, 2019. Full details in app."
    >

    <p>
    Enter for your chance to win now! 
    </p>
    
  </Offer>

    <Offer
      body="Fred Flarsky is a talented - albeit eccentric - journalist. Charlotte Field is the Secretary of State, campaigning to become the next President of the United States. She needs a speech writer. He's still harbouring a crush from childhood."
      button="View Trailer"
      divider={false}
    >

    <p>
    What could possibly go wrong? 
    </p>
    
  </Offer>

  </DefaultTemplate>
)

export default CasperEmail
