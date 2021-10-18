import React from 'react'
import './Navbar.scss'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

const Navbar = () => {
   return (
      <header className="navbar">
         <h1>Promina</h1>
         <ul>
            <li><a href="#serviços">SERVIÇOS</a></li>
            <li><a href="#sobre-nos">SOBRE NÓS</a></li>
            <li><a href="#projetos">PROJETOS</a></li>
            <li><a href="#contatos">CONTATOS</a></li>
            <li><a href="#localizaçao">LOCALIZAÇÃO</a></li>
         </ul>
         <HamburgerMenu/>
      </header>
   )
}

export default Navbar
