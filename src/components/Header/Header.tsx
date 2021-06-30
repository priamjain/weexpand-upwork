import React from 'react'
import './Header.css'
interface Props {
    
}

export const Header = (props: Props) => {
    return (
        <div className="header-wrapper">
        <div className="header-main">
            <div className="header-s1">
                <div>
                中  |  ENG
                </div>
                <div className="header-s1-social">
                    <img src="/assets/40x40_IG.png" alt="Line Logo" className="header-s1-img"/>
                    <img src="/assets/40x40_FB.png" alt="Line Logo" className="header-s1-img"/>
                    <img src="/assets/40x40_LINE.png" alt="Line Logo" className="header-s1-img"/>
                </div>
            </div>
            <div className="header-s2">
                <img src="/assets/Buymee_logo.png" alt="Line Logo" className="header-img"/>
                <div className="header-s2-search">
                    <input type="text" className="header-s2-input" placeholder="Search Products"/>
                    <img src='/assets/search.svg' alt="Search" className="header-s2-search-svg"/>
                </div>
                <ul className="header-s2-tabs">
                    <li className="header-s2-active-tab">
                        Register
                    </li>
                    <li>
                        Sign In
                    </li>
                    <li>
                        <img src='/assets/orders.svg' alt="Search" className="header-s2-tabs-svg"/>
                        Orders
                    </li>
                    <li>
                        <img src='/assets/cart.svg' alt="Search" className="header-s2-tabs-svg"/>
                        Cart
                    </li>
                </ul>   
            </div>
        </div>
        </div>
    )
}
