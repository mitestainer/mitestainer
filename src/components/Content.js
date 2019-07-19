import React from 'react'
import './Content.css'
import Welcome from './Welcome';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Under from './Under';

export default () => {
    return(
        <div className="content">
            <Welcome />
            <About />
            <Projects />
            <Contact />
            <Under />
        </div>
    )
}