import React from 'react'
import WorkCard from './WorkCard/WorkCard'
import './WorkSection.scss'
import Work1 from '../../assets/images/work1.jpg'
import Work2 from '../../assets/images/work2.jpg'
import Work3 from '../../assets/images/work3.jpg'

const WorkSection = () => {
   return (
      <section className="work-section" id="projetos">
         <strong data-aos="fade-down">Featured Projects</strong>
         <h5 data-aos="fade-down">Our recent Works</h5>
         <div>
            <WorkCard
               card_title={'The Fallingwater House'}
               card_image={Work1}
               card_image_alt={"The fallingwater house"}
            />
             <WorkCard
               card_title={'The Guggenheim'}
               card_image={Work3}
               card_image_alt={"The Guggenheim"}
            />
            <WorkCard
               card_title={'Neue National Galerie'}
               card_image={Work2}
               card_image_alt={"Neue National Galerie"}
            />

         </div>
      </section>
   )
}

export default WorkSection

