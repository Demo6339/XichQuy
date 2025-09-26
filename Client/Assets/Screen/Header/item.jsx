import React from 'react'

// Import Header components
import Logo from '../../Components/Logo/item.jsx'
import Menu from '../../Components/Menu/item.jsx'
import Feature from '../../Components/Feature/item.jsx'

// Import CSS
import './item.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <Logo />
        </div>
        
        {/* Menu */}
        <div className="header-menu">
          <Menu />
        </div>
        
        {/* Feature */}
        <div className="header-feature">
          <Feature />
        </div>
      </div>
    </header>
  )
}

export default Header