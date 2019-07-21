import React from 'react'
import './MenuMobile.css'
import menuList from '../db/menuList'

export default ({closeMenu, menuMode, movement}) => {
    const menu = Object.values(menuList)
    return (
        <div id='menu-mobile' className={`display ${menuMode}`}>
            <div id="wrapper">
                <button id='close' onClick={closeMenu} className={movement}><i class="fas fa-times"></i></button>
                <ul>
                    {menu.map((item, i) => {
                        return (
                            <li key={i} className={movement}>
                                <a onClick={closeMenu} href={item.link}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}