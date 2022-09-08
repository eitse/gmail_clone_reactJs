import { Button, IconButton } from '@mui/material'
import React, { useState } from 'react'
import './Sidebar.css'
import { useDispatch } from 'react-redux'
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { openSendMessage } from '../features/mailSlice';
import { Link, useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [sidebarSelected, setSidebarSelected] = useState({
        setInbox: false,
        setStarred: false,
        setSnoozed: false,
        setImportant: false,
        setSent: false,
        setDrafts: false,
        setMore: false,
    })

    const sidebarInboxSelected = () => {
        navigate("/emaillist")

        setSidebarSelected(prevState => {
            return {
                prevState,
                setInbox: !prevState.setInbox,
            }
        })
    }
    const sidebarStarredSelected = () => {
        setSidebarSelected(prevState => {
            return {
                prevState,
                setStarred: !prevState.setStarred,
            }
        })
    }
    const sidebarSnoozedSelected = () => {
        setSidebarSelected(prevState => {
            return {
                prevState,
                setSnoozed: !prevState.setSnoozed,
            }
        })
    }

    const sidebarImportantSelected = () => {
        setSidebarSelected(prevState => {
            return {
                prevState,
                setImportant: !prevState.setImportant,
            }
        })
    }
    const sidebarSentSelected = () => {
        setSidebarSelected(prevState => {
            return {
                prevState,
                setSent: !prevState.setSent,
            }
        })
    }
    const sidebarDraftsSelected = () => {
        setSidebarSelected(prevState => {
            return {
                prevState,
                setDrafts: !prevState.setDrafts,
            }
        })
    }
    const sidebarMoreSelected = () => {
        setSidebarSelected(prevState => {
            return {
                prevState,
                setMore: !prevState.setMore,
            }
        })
    }

    function showCompose() {
        dispatch(openSendMessage())
    }


    return (
        <div className='sidebar'>
            <Button startIcon={<AddIcon fontSize="large" />}
                className='sidebar--compose'
                onClick={showCompose} >
                Compose
            </Button>
            <SidebarOption handleClick={sidebarInboxSelected} Icon={InboxIcon} title={"Inbox"} number={34} selected={sidebarSelected.setInbox} />
            <SidebarOption handleClick={sidebarStarredSelected} Icon={StarIcon} title={"Starred"} number={6} selected={sidebarSelected.setStarred} />
            <SidebarOption handleClick={sidebarSnoozedSelected} Icon={AccessTimeIcon} title={"Snoozed"} number={67} selected={sidebarSelected.setSnoozed} />
            <SidebarOption handleClick={sidebarImportantSelected} Icon={LabelImportantIcon} title={"Important"} number={77} selected={sidebarSelected.setImportant} />
            <SidebarOption handleClick={sidebarSentSelected} Icon={NearMeIcon} title={"Sent"} number={4} selected={sidebarSelected.setSent} />
            <SidebarOption handleClick={sidebarDraftsSelected} Icon={NoteIcon} title={"Drafts"} number={43} selected={sidebarSelected.setDrafts} />
            <SidebarOption handleClick={sidebarMoreSelected} Icon={ExpandMoreIcon} title={"More"} number={1} selected={sidebarSelected.setMore} />


            <div className="sidebar--footer">
                <div className="sidebar--footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div >
    )
}

export default Sidebar