import React from 'react'

// Import Legal components
import PrivacyPolicy from './PrivacyPolicy/item.jsx'
import TermsOfUse from './TermsOfUse/item.jsx'

// Import CSS
import './item.css'

function Legal() {
  return (
    <div className="legal">
      <div className="legal-container">
        {/* Privacy Policy */}
        <div className="legal-privacy">
          <PrivacyPolicy />
        </div>
        
        {/* Terms of Use */}
        <div className="legal-terms">
          <TermsOfUse />
        </div>
      </div>
    </div>
  )
}

export default Legal
