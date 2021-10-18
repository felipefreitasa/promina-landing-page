import React from 'react'
import './Footer.scss'

const Footer = () => {
   return (
      <footer>
         <div className="footer-content">
            <div className="footer-menu" data-aos="fade-down">
               <strong>Promina</strong>
               <p>A leading developer of a grade commercial, industrial and residential projects in USA. Since its foundation the company has doubled its turnover year on year with its staff</p>
            </div>
            <div className="footer-menu" data-aos="fade-down">
               <strong>Services</strong>
               <ul>
                  <li>Construction Manage</li>
                  <li>Construction Consultants</li>
                  <li>Architecture & Building</li>
                  <li>Home Renovations</li>
                  <li>Interior Design</li>
               </ul>
            </div>
            <div className="footer-menu" data-aos="fade-down">
               <strong>Company</strong>
               <ul>
                  <li>Services</li>
                  <li>About Us</li>
                  <li>Projects</li>
                  <li>Contacts</li>
                  <li>Location</li>
               </ul>
            </div>  
            <div className="footer-menu" data-aos="fade-down">
               <strong>Newsletter</strong>
               <p>Sign up for industry alerts, our latest news, thoughts, and insights from Promina</p>
               <input type="mail" placeholder="Your email address"/>
            </div>  
         </div>
         <div className="footer-copyright" >
            <p >&copy; 2020 Promina, with love by <strong>Felipe Freitas</strong></p>
         </div>
      </footer>
   )
}

export default Footer
