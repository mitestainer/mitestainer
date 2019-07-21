import React from 'react'
import './Card.css'

export default ({content}) => {
    const {title, pics, features, lastUpdate, links} = content
    const featureFix = (input) => {
        switch (input) {
            case 'html':
            case 'css':
                return input.toUpperCase()
            case 'js':
                return 'JavaScript'
            case 'fcc':
                return 'fCC'
            default: 
                return input.replace(input[0], input[0].toUpperCase())
        }
    }
    const pictures = (input) => {
        if (input.length === 2) {
            return pics.map((pic, i) => <img src={pic} alt={title} className={`slide${i + 4}`} />)
        } else if (input.length === 3) {
            return pics.map((pic, i) => <img src={pic} alt={title} className={`slide${i + 1}`} />)
        } else {
            return input.map(pic => <img src={pic} alt={title} />)
        }
    }
    return (
            <div className='project-tile'>
                <a className='project-img' href={links.url} target='_blank' rel='noopener noreferrer'>
                    {pictures(pics)}
                </a>
                <div className='features-box'>
                    {features.map((item, i) => <span key={i} className={`feature feature-${item}`}>{featureFix(item)}</span>)}
                </div>
                <a className='project-name name-fix' href={links.url} target='_blank' rel='noopener noreferrer'>{title}</a>
                <p className='update'><span>Last uptade:</span> {lastUpdate}. </p>
                <hr className='dash' />
                <div className='project-tab'>
                    <a href={links.github} title='Check the source code on Github' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-github-square fa-2x'></i>
                    </a>
                </div>
            </div>
    )
}