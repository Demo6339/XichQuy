import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Globe, Palette, User } from 'lucide-react'
import '../../Global/Styles/root.css'
import './item.css'

function Feature() {
    const [state, status] = useState(null)
    function ConvertOpen(menuName) {
        status(state === menuName ? null : menuName)
    }
    function ConvertClose() {
        status(null)
    }
    return (
        <div className="feature">
            <div className="item" onClick={() => ConvertOpen("theme")}>
                <Palette />
                {state === "theme" && (
                    <div className="dropdown">
                        <div onClick={ConvertClose} className='box'>
                            <button className='Light'>
                                <p>Light</p>
                            </button>
                        </div>
                        <div onClick={ConvertClose} className='box'>
                            <button className='Dark'>
                                <p>Dark</p>
                            </button>
                        </div>
                        <div onClick={ConvertClose} className='box'>
                            <button className='System'>
                                <p>System</p>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="item" onClick={() => ConvertOpen("language")}>
                <Globe />
                {state === "language" && (
                    <div className="dropdown">
                        <div onClick={ConvertClose} className='box'>
                            <button className='EnglishTranslate'>
                                <p>English</p>
                            </button>
                        </div>
                        <div onClick={ConvertClose} className='box'>
                            <button className='VietnameseTranslate'>
                                <p>Tiếng Việt</p>
                            </button>
                        </div>
                        <div onClick={ConvertClose} className='box'>
                            <button className='JapaneseTranslate'>
                                <p>日本語</p>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="item" onClick={() => ConvertOpen("account")}>
                <User />
                {state === "account" && (
                    <div className="dropdown">
                        <div onClick={ConvertClose} className='box'>
                            <Link to="/profile">
                                <p>Profile</p>
                            </Link>
                        </div>
                        <div onClick={ConvertClose} className='box'>
                            <Link to="/settings">
                                <p>Settings</p>
                            </Link>
                        </div>
                        <div onClick={ConvertClose} className='box'>
                            <button className='Logout'>
                                <p>Logout</p>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Feature