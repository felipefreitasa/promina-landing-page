import React from 'react'
import './WorkCard.scss'
import { Icon } from '@iconify/react';


const WorkCard = ({ card_image, card_image_alt, card_title }) => {
   return (
      <div className="work-card" data-aos="fade-right">
         <img src={card_image} alt={card_image_alt} />
         <div>
            <strong>{card_title}</strong>
            <p>llum porro? Molestias corrupti sequi culpa, laudantium aperiam alias, vel maiores minus reprehenderit incidunt tempore minima.</p>
            <button>Explore More <Icon alt="Seta ícone" icon="akar-icons:arrow-right" color="#fd5b0d" width="18" height="18" /></button>
         </div>
      </div>
   )
}

export default WorkCard
