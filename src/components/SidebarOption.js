import React from 'react'
import './SidebarOption.css'
// import InboxIcon from '@mui/icons-material/Inbox';

function SidebarOption({ Icon, title, number, selected, handleClick }) {
    return (
        <div onClick={handleClick} className={`sidebar--option ${selected && "sidebar--option--active"}`}>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOption