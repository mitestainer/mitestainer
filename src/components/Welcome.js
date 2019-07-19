import React from 'react'
import './Welcome.css'

export default () => {
    return (
        <div id="welcome-section" className="cp">
            <div className="box">
                <h1>mitestainer<span className="title-vp">'s</span></h1>
                <p className="title-lp title-vp">Portfolio Page</p>
                <p>An average guy learning new things.</p>
                <hr />
                <p id="another">just another <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">fCC</a> project</p>
            </div>
        </div>
    )
}