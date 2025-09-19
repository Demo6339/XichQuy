import React from 'react'
import { Link } from 'react-router-dom'
import './item.css'
import LogoMain from '../../Library/Image/logo.png'

function Logo() {
    return (
        <div className="logo">
            <div className="image">
                <Link to="/review">
                    <img src={LogoMain} alt="Xích Quỷ"/>
                </Link>
            </div>
            <div className="text">
                <Link to="/review">
                    <span>Xích Quỷ</span>
                </Link>
            </div>
        </div>
    )
}

export default Logo