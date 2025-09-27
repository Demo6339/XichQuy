import React from 'react'
import PrivacyPolicy from './PrivacyPolicy/item.jsx'
import TermsOfUse from './TermsOfUse/item.jsx'
import Icons from '../../Library/Icon/lucide.jsx'
import '../../Global/Styles/root.css'
import './legal.css'

function Legal() {
  return (
    <div className="legal">
      <PrivacyPolicy />
      <TermsOfUse />
    </div>
  )
}

export default Legal
