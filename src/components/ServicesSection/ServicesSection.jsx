import React from 'react'
import ServiceCard from './ServiceCard/ServiceCard'
import './ServicesSection.scss'
import Service2 from '../../assets/icons/service2.png'
import Service3 from '../../assets/icons/service3.png'
import Service4 from '../../assets/icons/service4.png'

const ServicesSection = () => {
   return (
      <section className="services-section" id="serviços">
         <h2  data-aos="fade-down">The best a grade commercial e residence services</h2>
         <h3  data-aos="fade-down">High quality construction solutions <br/> for residentials e industries!</h3>
         <div>
           
            <ServiceCard
               icon_card={Service4}
               icon_card_alt={'Arquitetura ícone'}
               card_title={'Architecture & building'}
               card_text={'Architecture is both the process and the product of planning, and constructing buildings or any other structures'}
            />
           
            <ServiceCard
               icon_card={Service2}
               icon_card_alt={'Engenheiro ícone'}
               card_title={'Construction consultants'}
               card_text={'Given the increasing complexity of many construction projects it is becoming more commom that a consultant'}
            />
           
            <ServiceCard
               icon_card={Service3}
               icon_card_alt={'Capacete ícone'}
               card_title={'Specialized engineers'}
               card_text={'Professional service uses specialized, project management techniques to oversee the planning, design'}
            />
           
         </div>
      </section>
   )
}

export default ServicesSection

