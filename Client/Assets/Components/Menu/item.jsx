import React from 'react'
import { Link } from 'react-router-dom'
import Icons from '../../Library/Icon/lucide.jsx'
import '../../Global/Styles/root.css'
import './menu.css'

function Menu() {
  return (
    <div className="container">
      <div className="item">
        <Link to="/home">Trang Chủ</Link>
      </div>
      <div className="item">
        <Link to="/store">Cửa Hàng</Link>
      </div>
      <div className="item">
        <Link to="/event">Sự Kiện</Link>
      </div>
      <div className="item">
        <Link to="/forum">Diễn Đàn</Link>
      </div>
      <div className="item">
        <Link to="/about">Về Chúng Tôi</Link>
      </div>
    </div>
  )
}

export default Menu