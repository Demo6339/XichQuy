import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './item.css'

function Menu() {
    return (
        <div className="menu">
            <div className="item">
                <Link to="/home">
                    <p>Trang chủ</p>
                </Link>
            </div>
            <div className="item">
                <Link to="/store">
                    <p>Cửa hàng</p>
                </Link>
            </div>
            <div className="item">
                <Link to="/event">
                    <p>Sự kiện</p>
                </Link>
            </div>
            <div className="item">
                <Link to="/forum">
                    <p>Diễn đàn</p>
                </Link>
            </div>
            <div className="item">
                <Link to="/about">
                    <p>Về chúng tôi</p>
                </Link>
            </div>
        </div>
    )
}

export default Menu