import React from 'react'
import './TestimonialSection.scss'

const TestimonialSection = () => {
   return (
      <section className="testimonial-section">
         <div className="client-text">
            <strong data-aos="fade-down">What out clients say</strong>
            <p data-aos="fade-down">"They are the best and expertly trained team members who take the extra step and go the extra mile, all to fulfill our promise to deliver innovative and dynamic solutions to our customers to fit the needs of a rapidly changing global enviroment which was perfect for out needs!"</p>
         </div>
         <div data-aos="fade-down" className="client">
            <img  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="John Peter" />
            <p>John Peter</p>
         </div>
         
      </section>
   )
}

export default TestimonialSection
