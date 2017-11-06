import React from 'react'

import './CardFlip.css'

export const CardFlip = ({card, children}) => {
  if (!children || !children[0] || !children[1]) {
    children = [
      <img className='card front' src={require(`./mockups/${card}/front.jpg`)} alt={card} />,
      <img className='card back' src={require(`./mockups/${card}/back.jpg`)} alt={card} />
    ]
  }
  return (
    <div className='CardFlip'>
      <div className='flipper'>
        {children}
      </div>
    </div>
  )
}
