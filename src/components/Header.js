import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';
import { logout, selectUser } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';



function Header() {
    const navigate = useNavigate()
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    function signOut() {

        auth.signOut().then(() => {
            dispatch(logout())
        })

    }
    return (
        <div className='header'>
            < div className="header--left" >
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <div onClick={() => navigate("/emaillist")}>
                    <img src='https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg'
                        alt=''
                    />
                </div>
            </div >

            <div className='header--middle'>
                <SearchIcon />
                <input type="text" placeholder='Search Mail' />
                <ArrowDropDownIcon className='header--input--charet' />
            </div>
            <div className="header--right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl} sx={{ cursor: "pointer" }} />
            </div>

        </div >
    )
}

export default Header

