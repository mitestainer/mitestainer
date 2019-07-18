import React from 'react'
import './Under.css'
import Social from './Social';

export default () => {
    const displayYear = () => {
        let year = new Date()
        return year.getFullYear()
    }
    return (
        <div id='under'>
            <Social />
            <p className='footer'>
                &copy; mitestainer <span className='year'>{displayYear()}</span>
            </p>
        </div>
    )
}