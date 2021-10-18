import React, { useState } from 'react'
import './HamburgerMenu.scss'
import { Icon } from '@iconify/react';

const HamburgerMenu = () => {

   const [open, setOpen] = useState(false)

   console.log(open);
   return (
      <aside>
         <button
            className={open ? "hamburger hamburger--spring is-active" : "hamburguer hamburger--spring"}
            type="button"
            onClick={() => setOpen(!open)}>
            <span class="hamburger-box">
               <span class="hamburger-inner"></span>
            </span>
         </button>
         <div className={open ? "menu-mobile before" : "menu-mobile after"}>
            <nav>
               <ul>
                  <li><a href="#serviços"><Icon icon="carbon:settings-services" color="#fd5b0d" width="30" height="30" />SERVICES</a></li>
                  <li><a href="#sobre-nos"><Icon icon="bi:people" color="#fd5b0d" width="30" height="30" />ABOUT US</a></li>
                  <li><a href="#projetos"><Icon icon="clarity:building-line" color="#fd5b0d" width="30" height="30" />PROJECTS</a></li>
                  <li><a href="#contatos"><Icon icon="akar-icons:phone" color="#fd5b0d" width="30" height="30" />CONTACTS</a></li>
                  <li><a href="#localizaçao"><Icon icon="akar-icons:location" color="#fd5b0d" width="30" height="30" />LOCATION</a></li>
               </ul>
            </nav>
         </div>
      </aside>
   )
}

export default HamburgerMenu
