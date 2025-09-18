import React from 'react'
import Legal from '../../Components/Legal/item.jsx'
import Information from '../../Components/Information/item.jsx'
import './item.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Legal />
        <Information />
      </div>
    </footer>
  )
}

export default Footer
