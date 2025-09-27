import React, { useState } from 'react'
import 'flag-icons/css/flag-icons.min.css';
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
            <div className='language-option' onClick={() => selectLanguage('vi')}>
              <span class="fi fi-vn"></span>
              <p>Tiếng Việt</p>
            </div>
            <div className='language-option' onClick={() => selectLanguage('en')}>
              <span class="fi fi-us"></span>
              <p>Tiếng Anh</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="wrapper account">
        <div onClick={() => toggleDropdown('account')}>
          <Icons.CircleUser className="icon" />
        </div>
        {openDropdown === 'account' && (
          <div className="account-dropdown">
            <div className='account-option' onClick={handleProfile}>
              <Icons.User className="icon" />
              <p>Hồ Sơ</p>
            </div>
            <div className='account-option' onClick={handleLogout}>
              <Icons.LogOut className="icon" />
              <p>Đăng Xuất</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Feature