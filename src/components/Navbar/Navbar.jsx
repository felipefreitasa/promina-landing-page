import React from 'react'
import './Navbar.scss'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

const Navbar = () => {
   return (
      <header className="navbar">
         <h1>Promina</h1>
         <ul>
            <li><a href="#serviços">SERVICES</a></li>
            <li><a href="#sobre-nos">ABOUT US</a></li>
            <li><a href="#projetos">PROJECTS</a></li>
            <li><a href="#contatos">CONTACTS</a></li>
            <li><a href="#localizaçao">LOCATION</a></li>
         </ul>
         <HamburgerMenu/>
      </header>
   )
}

export default Navbar
