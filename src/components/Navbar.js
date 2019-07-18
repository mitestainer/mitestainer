import React from 'react'
import './Navbar.css'
import Upper from './Upper'
import Under from './Under';

export default () => {
    return(
        <nav id='navbar'>
            <Upper />
            <Under />
        </nav>
    )
}