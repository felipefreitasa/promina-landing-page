import React from 'react'
import Card from './Card/Card'
import './CardSection.scss'

const CardSection = () => {
   return (
      <section className="card-section">
            <Card
               card_icon={'carbon:location-filled'}
               card_alt={'Localização ícone'}
               card_title={'Our location'}
               card_text={'22344, Brooklyn'}
            />
            <Card
               card_icon={'dashicons:email'}
               card_alt={'Email ícone'}
               card_title={'Email'}
               card_text={'promina@outlook.com'}
            />
            <Card
               card_icon={'bi:phone-fill'}
               card_alt={'Telefone ícone'}
               card_title={'Phone'}
               card_text={'55 85 8899 9900'}
            />
      </section>
   )
}

export default CardSection
