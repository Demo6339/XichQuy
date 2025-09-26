import React from 'react'
import { Link } from 'react-router-dom'

// Import CSS
import './item.css'

function Menu() {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/review">Review</Link></li>
        <li><Link to="/store">Store</Link></li>
        <li><Link to="/forum">Forum</Link></li>
        <li><Link to="/event">Event</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  )
}

export default Menu