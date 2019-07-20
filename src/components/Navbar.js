import React from 'react'
import './Navbar.css'
import Upper from './Upper'
import Under from './Under';

export default ({openMenu}) => {
    return(
        <nav id='navbar'>
            <Upper openMenu={openMenu} />
            <Under />
        </nav>
    )
}