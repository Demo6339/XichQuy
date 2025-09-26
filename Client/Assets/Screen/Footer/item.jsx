import React from 'react'
import Information from '../../Components/Information/item.jsx'
import Legal from '../../Components/Legal/item.jsx'
import '../../Global/Styles/root.css'
import './item.css'

function Footer() {
  return (
    <div className="container">
      <Information />
      <Legal />
    </div>
  )
}

export default Footer