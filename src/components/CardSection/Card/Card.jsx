import React from 'react'
import './Card.scss'
import { Icon } from '@iconify/react';

const Card = ({ card_icon, card_alt, card_title, card_text }) => {
   return (
      <div className="card"  data-aos="fade-right">
         <div className="card-icon">
            <Icon alt={card_alt} icon={card_icon} color="#fff" width="25" height="25" />
         </div>
         <div className="card-content">
            <strong>{card_title}</strong>
            <p>{card_text}</p>
         </div>
      </div>
   )
}

export default Card
