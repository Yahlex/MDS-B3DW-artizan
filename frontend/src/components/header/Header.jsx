import React from 'react'
import Button from '../forms/buttons/Button'
import './Header.css'

 function Header() {
  return (
    <header className='main'>
        <h2>Menu</h2>
        <nav>
            <a href="/">Accueil</a>
            <a href="/artisans">Artisans</a>
            <a href="/about">A propos</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
        </nav>
        <a href="/authentication">
        <Button>Connexion</Button>
        </a>
    </header>
  )
}

export default Header
