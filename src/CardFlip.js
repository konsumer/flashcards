import React from 'react'

import './CardFlip.css'

export const CardFlip = ({card}) => (
  <div className='CardFlip'>
    <div className='flipper'>
      <img className='front' src={require(`./mockups/${card}/front.jpg`)} alt={card} />
      <img className='back' src={require(`./mockups/${card}/back.jpg`)} alt={card} />
    </div>
  </div>
)
