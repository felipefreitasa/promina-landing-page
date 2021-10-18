import React from 'react'
import './FormSection.scss'
import { Icon } from '@iconify/react';

const FormSection = () => {
   return (
      <section className="form-section" id="contatos">
         <div className="form-section-infos" data-aos="zoom-in">
            <div>
               <strong>Our location</strong>
               <p>2043 Beverly Rd Brooklyn, New York</p>
            </div>
            <div>
               <strong>Our location</strong>
               <p>2043 Beverly Rd Brooklyn, New York</p>
            </div>
            <p>We will get back to your within 24 hours, or call us everyday, 9:00 AM - 12:00 PM</p>
            <strong><Icon icon="bx:bxs-phone" color="#fff" width="28" height="28" /> 55 85 9578-9087</strong>
         </div>
         <div className="form-section-form">
            <h5 data-aos="fade-down">Request a quote</h5>
            <p data-aos="fade-down">Complete control over products allow us to ensure our costumers receive the best quality prices and service. We take great pride in everything that we do in our factory.</p>
            <div>
               <input data-aos="fade-right" type="text" placeholder="Name" />
               <input data-aos="fade-right" type="email" placeholder="Email" />
            </div>
            <div>
               <input data-aos="fade-right" type="tel" placeholder="Phone" />
               <select data-aos="fade-right">
                  <option>Select your industry</option>
               </select>
            </div>
            <div className="text-area">
               <textarea data-aos="fade-right" id="" cols="30" rows="10" placeholder="Additional details!"></textarea>
               <button data-aos="fade-right">Submit request <Icon alt="Telefone ícone" icon="akar-icons:arrow-right" color="#fff" width="18" height="18" /></button>
            </div>
         </div>

      </section>
   )
}

export default FormSection
