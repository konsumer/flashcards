import React from 'react'
import { storiesOf } from '@storybook/react'

import { CardFlip } from './CardFlip'

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
