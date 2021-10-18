import React from 'react'
import './Banner3Section.scss'
import { Icon } from '@iconify/react';

const Banner3Section = () => {
   return (
      <section className="banner3-section">
         <div className="banner3-content">
            <strong data-aos="fade-down">Leading the way in building and civil construction</strong>
            <h4 data-aos="fade-down">Ready to bring bigger, better, faster and stronger projects than ever before</h4>
            <ul>
               <li data-aos="fade-down"><Icon alt="Check ícone" icon="akar-icons:check" color="#fd5b0d" width="22" height="22" />Quality control system, 100% satisfaction guarantee</li>
               <li data-aos="fade-down"><Icon alt="Check ícone" icon="akar-icons:check" color="#fd5b0d" width="22" height="22" />Highly professional staff, accurate testing processes</li>
               <li data-aos="fade-down"><Icon alt="Check ícone" icon="akar-icons:check" color="#fd5b0d" width="22" height="22" />Unrivalled workmanship, professional and qualified</li>
            </ul>
         </div>
      </section>
   )
}

export default Banner3Section
