import React from 'react'
import Header from './Header/item.jsx'
import Footer from './Footer/item.jsx'
import '../Global/Styles/root.css'

function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout