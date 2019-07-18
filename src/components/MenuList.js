import React from 'react'
import './MenuList.css'

export default ({items}) => {
    return (
        <div className='hamburger-content'>
            <ul>
                {items.map((el, i) => {
                    return (
                        <li key={i}>
                            <a className='nav-link' href={el[0]}>
                                {el[1]}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}