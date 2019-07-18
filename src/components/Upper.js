import React from 'react'
import './Upper.css'
import MenuList from './MenuList'
import profilePic from '../images/profile.jpg'

export default () => {
    return (
        <div id='upper'>
            <img src={profilePic} alt='My portrait (ok, quite not)' title='My portrait (ok, quite not)' />
            <p><span>mitestainer's</span><br />Portfolio Page</p>
            <div className='hamburger'>
                <input type="checkbox" id="menu" />
                <label htmlFor='menu'><i className='fas fa-caret-down'></i></label>
                    <MenuList items={[
                        ['#welcome-section', 'Home'],
                        ['#about-me', 'About Me'],
                        ['#projects', 'Portfolio'],
                        ['#contact', 'Contact']
                    ]} />
            </div>
        </div>
    )
}