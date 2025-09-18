import React from 'react'
import Logo from '../../Components/Logo/item.jsx'
import Menu from '../../Components/Menu/item.jsx'
import Feature from '../../Components/Feature/item.jsx'
import './item.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Logo />
        <Menu />
        <Feature />
      </div>
    </header>
  )
}

export default Header
