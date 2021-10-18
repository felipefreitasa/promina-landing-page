import React from 'react'
import './Iframe.scss'
import { Icon } from '@iconify/react';

const Iframe = () => {
   return (
      <section className="iframe" id="localizaçao">
         <iframe data-aos="zoom-in" title="Brooklyn, Nova York" alt="Mapa localizado em Brooklyn, Nova York" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193746.90108179237!2d-74.08508360809579!3d40.64541987828988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1634559482179!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
         <div data-aos="zoom-in">
            <Icon  alt="Mapa ícone" icon="dashicons:location-alt" color="#fd5b0d" width="55" height="55" />
            <strong>Locations</strong>
            <h6>London Office</h6>
            <p>09886 Beverley Rd Brooklyn, New York</p>
            <p>promina@outlook.com</p>
            <p>Mon-Fri: 8am - 7pm</p>
         </div>
      </section>
   )
}

export default Iframe
