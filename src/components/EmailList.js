import { Checkbox, IconButton } from '@mui/material'
import React, { useState, useEffect } from 'react'
import './EmailList.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import Section from './Section';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from './EmailRow';
import Header from './Header'
import Sidebar from './Sidebar'
import { db } from './firebase';
import { useDispatch } from 'react-redux';
import { mailData } from '../features/mailSlice';

function EmailList() {
    const dispatch = useDispatch()

    const [emails, setEmails] = useState([])

    useEffect(() => {
        db.collection("outboxMessages")
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot =>
                setEmails(snapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        data: doc.data(),
                    }
                })))

        dispatch(mailData({
            emailInboxCount: emails.length
        }))



    }, [dispatch, emails.length])

    return (
        <div>
            <Header />
            <div className='emailList--body'>
                <Sidebar />
                <div className='emailList'>
                    <div className="emailList--settings">
                        <div className="emailList--settingsLeft">
                            <Checkbox />
                            <IconButton>
                                <ArrowDropDownIcon />
                            </IconButton>
                            <IconButton>
                                <RedoIcon />
                            </IconButton>
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        </div>
                        <div className="emailList--settingsRight">
                            <IconButton>
                                <ChevronLeftIcon />
                            </IconButton>
                            <IconButton>
                                <ChevronRightIcon />
                            </IconButton>
                            <IconButton>
                                <KeyboardHideIcon />
                            </IconButton>
                            <IconButton>
                                <SettingsIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div className="emailList--sections">
                        <Section Icon={InboxIcon} title="Primary" color="red" selected />
                        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
                        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
                    </div>

                    <div className="emailList--list">
                        <div>
                            {emails.map(({ id, data: { to, subject, message, timestamp } }) => {
                                return (<EmailRow
                                    id={id}
                                    key={id}
                                    title={to}
                                    subject={subject}
                                    description={message}
                                    time={new Date(timestamp?.seconds * 1000).toLocaleTimeString() + " " + new Date(timestamp?.seconds * 1000).toDateString()}
                                />)
                            })}
                            <EmailRow title="Hello" subject="This is a Test" description="Firebase was used for the backend" time="2022 August 6th 6:00" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailList
