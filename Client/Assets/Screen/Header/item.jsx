import React from 'react'
import '../../Global/Styles/root.css'
import Logo from '../../Components/Logo/item.jsx'
import Menu from '../../Components/Menu/item.jsx'
import Feature from '../../Components/Feature/item.jsx'
import './item.css'

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <Logo />
            </div>
            <div className="menu">
                <Menu />
            </div>
            <div className="feature">
                <Feature />
            </div>
        </div>
    )
}

export default Header
