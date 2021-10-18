import React from 'react'
import './Banner2Section.scss'
import Banner2Image from '../../assets/images/engineer3.jpg'


const Banner2Section = () => {
   return (
      <section className="banner2-section" id="sobre-nos">
         <div className="banner2-content">
            <strong data-aos="fade-down">World's leading industry corporation</strong>
            <h4 data-aos="fade-down">Best a grade commercial & residential services</h4>
            <p data-aos="fade-down">The world is changing fast than ever before, business is no exception, yet those that embrace change are thriving, building bigger, better, faster & stronger products than ever.</p>
         </div>
         <img data-aos="zoom-in" src={Banner2Image} alt="Engenheiros na obra, analisando projeto" />
      </section>
   )
}

export default Banner2Section
