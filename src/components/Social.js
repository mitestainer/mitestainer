import React from 'react'
import './Social.css'
import socialList from '../db/socialList'

export default () => {
    const list = Object.values(socialList)
    const setIcon = (input) => {
        if (input.stacked) {
            return (
                <span className="fa-stack fa-1x dummy">
                    <i className="fas fa-stop fa-stack-2x"></i>
                    <i className={`${input.value} fa-stack-1x fa-inverse fix`}></i>
                </span>
            )
        } else {
            return <i className={`${input.value} fa-2x dummy`}></i>
        }
    }
    return (
        <p className="social">
            {list.map((item, i) => {
                return (
                    <a href={item.link} title={item.title} target='_blank' rel='noopener noreferrer' key={i}>
                        {setIcon(item.icon)}
                    </a>
                )
            })}
        </p>
    )
}