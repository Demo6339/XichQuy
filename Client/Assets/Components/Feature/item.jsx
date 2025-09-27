import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'flag-icons/css/flag-icons.min.css';
import Icons from '../../Library/Icon/lucide.jsx'
import '../../Global/Styles/root.css'
import './feature.css'

function Feature() {
  const navigate = useNavigate()
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
    navigate('/profile')
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
        <div onClick={() => toggleDropdown('language')} className="language-wrapper">
          <Icons.Globe className="icon" />
          <span className="language-indicator">{currentLanguage.toUpperCase()}</span>
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