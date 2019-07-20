import React from 'react'
import './Upper.css'
import MenuList from './MenuList'
import profilePic from '../images/profile.jpg'
import {menuList} from './utils'

export default ({openMenu}) => {
    return (
        <div id='upper'>
            <img src={profilePic} alt='My portrait (ok, quite not)' title='My portrait (ok, quite not)' />
            <p><span>mitestainer's</span><br />Portfolio Page</p>
            <div className='hamburger'>
                <button id='menu' onClick={openMenu}><i className='fas fa-bars'></i></button>
                    <MenuList items={menuList} />
            </div>
        </div>
    )
}