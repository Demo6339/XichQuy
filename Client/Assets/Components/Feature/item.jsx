import React, { useState } from 'react'
import Icons from '../../Library/Icon/lucide.jsx'
import '../../Global/Styles/root.css'
import './feature.css'

function Feature() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('vi')
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  const selectLanguage = (language) => {
    setCurrentLanguage(language)
    setOpenDropdown(null)
  }

  const handleProfile = () => {
    setOpenDropdown(null)
  }

  const handleLogout = () => {
    setOpenDropdown(null)
  }

  return (
    <div className="feature">
      <div className="wrapper toggle-theme" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? <Icons.Moon className="icon" /> : <Icons.Sun className="icon" />}
      </div>
      
      <div className="wrapper toggle-language">
        <div onClick={() => toggleDropdown('language')}>
          <Icons.Globe className="icon" />
        </div>
        {openDropdown === 'language' && (
          <div className="language-dropdown">
            <div className='language-option' onClick={() => selectLanguage('vi')}>Tiếng Việt</div>
            <div className='language-option' onClick={() => selectLanguage('en')}>Tiếng Anh</div>
          </div>
        )}
      </div>
      
      <div className="wrapper account">
        <div onClick={() => toggleDropdown('account')}>
          <Icons.User className="icon" />
        </div>
        {openDropdown === 'account' && (
          <div className="account-dropdown">
            <div className='account-option' onClick={handleProfile}>Hồ Sơ</div>
            <div className='account-option' onClick={handleLogout}>Đăng Xuất</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Feature