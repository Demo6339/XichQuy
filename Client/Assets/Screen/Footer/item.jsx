import React from 'react'

// Import Footer components
import Information from '../../Components/Information/item.jsx'
import Legal from '../../Components/Legal/item.jsx'

// Import CSS
import './item.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Information */}
        <div className="footer-information">
          <Information />
        </div>
        
        {/* Legal */}
        <div className="footer-legal">
          <Legal />
        </div>
      </div>
    </footer>
  )
}

export default Footer