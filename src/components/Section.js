import React from 'react'
import './Section.css'

function Section({ Icon, title, color, selected }) {
    const sectionStyled = {
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`
    }

    return (
        <div style={sectionStyled} className={`section ${selected && "section--selected"}`}>
            <Icon />
            <h4>{title}</h4>
        </div>
    )
}

export default Section
