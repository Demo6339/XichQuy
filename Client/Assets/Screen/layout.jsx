import React from 'react'
import '../Global/Styles/root.css'
import Header from './Header/item.jsx'
import Footer from './Footer/item.jsx'
import './Header/item.css'
import './Footer/item.css'

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout