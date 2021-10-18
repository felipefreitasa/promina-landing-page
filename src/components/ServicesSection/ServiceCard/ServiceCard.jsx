import React from 'react'
import './ServiceCard.scss'
import { Icon } from '@iconify/react';

const ServiceCard = ({ icon_card, icon_card_alt, card_title, card_text }) => {
   return (
      <div className="service-card"  data-aos="fade-right">
         <img src={icon_card} alt={icon_card_alt} />
         <strong>{card_title}</strong>
         <p>{card_text}</p>
         <button>Read more <Icon alt="Seta ícone" icon="akar-icons:arrow-right" color="white" width="22" height="22" />
         </button>
      </div>
   )
}

export default ServiceCard
