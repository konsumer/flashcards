import React from 'react'
import { storiesOf } from '@storybook/react'

import { CardFlip } from './CardFlip'
import { IconDna } from './IconDna'

const stories = storiesOf('Card Flip (image)', module)

const cards = [
  '1-Trichome',
  '2-Vascular Tissue',
  '3-Xylem',
  '4-Genotype',
  '5-Linalool',
  '6-CBD',
  '7-Apigenin'
]

cards.forEach(card => {
  stories.add(card, () => (
    <CardFlip card={card} />
  ))
})

storiesOf('Card Flip (manual)', module)
  .add('4-Genotype', () => (
    <CardFlip>
      <div className='card front CardFront1'>
        <h2>GENOTYPE</h2>
        <div>&nbsp;</div>
        <div>
          <div className='pronounce1'>
            gen·o·type
          </div>
          <div className='pronounce2'>
            /ˈjēnəˌtīp/
          </div>
        </div>
      </div>
      <div className='card back CardBack1'>
        <div>
          <IconDna />
        </div>
        <div>
          the genetic information of an organism
          <div className='dna'>(DNA)</div>
        </div>
      </div>
    </CardFlip>
  ))
