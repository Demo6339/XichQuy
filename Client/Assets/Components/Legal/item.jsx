import React from 'react'
import PrivacyPolicy from './PrivacyPolicy/item.jsx'
import TermsOfUse from './TermsOfUse/item.jsx'
import '../../Global/Styles/root.css'
import './item.css'

function Legal() {
  return (
    <div className="container">
      <PrivacyPolicy />
      <TermsOfUse />
    </div>
  )
}

export default Legal
