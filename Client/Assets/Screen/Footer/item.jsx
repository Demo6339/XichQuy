import React from 'react'
import Information from '../../Components/Information/item.jsx'
import Legal from '../../Components/Legal/item.jsx'
import Icons from '../../Library/Icon/lucide.jsx'
import '../../Global/Styles/root.css'
import './footer.css'

function Footer() {
  return (
    <div className="container">
      <Information />
      <Legal />
    </div>
  )
}

export default Footer