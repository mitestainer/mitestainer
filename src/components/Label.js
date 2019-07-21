import React from 'react'
import './Label.css'

export default ({feature, active, handleSort}) => {
    const label = feature[0]
    const name = feature[1]
    return (
        <div id={`label-${label}`} className={`filter-label ${active.includes(label) && `feature-${label}`}`} onClick={() => handleSort(label)}>
            {active.includes(label) ? <i className="far fa-check-square"></i> : <i className="far fa-square"></i>}
            <span>&nbsp;{name}</span>
        </div>
    )
}