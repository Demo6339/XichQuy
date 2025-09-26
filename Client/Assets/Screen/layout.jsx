import React from 'react'

// Import Header và Footer components
import Header from './Header/item.jsx'
import Footer from './Footer/item.jsx'

// Import CSS
import '../Global/Styles/root.css'
import './Header/item.css'
import './Footer/item.css'

function Layout({ children }) {
  return (
    <div className="layout">
      {/* Header chứa: Logo, Menu, Feature */}
      <Header />
      
      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>
      
      {/* Footer chứa: Information, Legal */}
      <Footer />
    </div>
  )
}

export default Layout