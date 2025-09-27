import React from 'react'
import logo from '../../Library/Image/logo.png'
import Icons from '../../Library/Icon/lucide.jsx'
import './item.css'

function Logo() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="text">
        <h1>Xích Quỷ</h1>
      </div>
    </div>
  )
}

export default Logo