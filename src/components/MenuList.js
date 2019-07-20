import React from 'react'
import './MenuList.css'

export default ({items}) => {
    const menu = Object.values(items)
    return (
        <div className='hamburger-content'>
            <ul>
                {menu.map((el, i) => {
                    return (
                        <li key={i}>
                            <a className='nav-link' href={el.link}>
                                {el.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}