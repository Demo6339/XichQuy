import React from 'react'
import Logo from '../../Components/Logo/item.jsx'
import Menu from '../../Components/Menu/item.jsx'
import Feature from '../../Components/Feature/item.jsx'
import '../../Global/Styles/root.css'
import './item.css'

function Header() {
  return (
    <div className="container">
      <Logo />
      <Menu />
      <Feature />
    </div>
  )
}

export default Header