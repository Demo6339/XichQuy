import React from 'react'
import Logo from '../../Components/Logo/item.jsx'
import Menu from '../../Components/Menu/item.jsx'
import Feature from '../../Components/Feature/item.jsx'
import Icons from '../../Library/Icon/lucide.jsx'
import '../../Global/Styles/root.css'
import './header.css'

function Header() {
  return (
    <div className="header">
      <div className="wrapper logo">
        <Logo />
      </div>
      <div className="wrapper menu">
        <Menu />
      </div>
      <div className="wrapper feature">
        <Feature />
      </div>
    </div>
  )
}

export default Header