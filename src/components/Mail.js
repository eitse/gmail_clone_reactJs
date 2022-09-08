import React from 'react'
import './Mail.css'
import Header from './Header'
import Sidebar from './Sidebar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PrintIcon from '@mui/icons-material/Print';
import { useNavigate } from 'react-router-dom';
import { selectMail } from '../features/mailSlice';
import { useSelector } from 'react-redux';


function Mail() {
    const navigate = useNavigate()
    const getMail = useSelector(selectMail)

    return (
        <div className='mail'>
            <Header />
            <div className="mail--body">
                <Sidebar />
                <div className="mail--mainContainer">
                    <div className="mail--tools">
                        <div className="mail--toolsLeft">
                            <IconButton onClick={() => navigate("/EmailList")}>
                                <ArrowBackIcon />
                            </IconButton>
                            <IconButton>
                                <MoveToInboxIcon />
                            </IconButton>
                            <IconButton>
                                <ErrorIcon />
                            </IconButton>
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton>
                                <EmailIcon />
                            </IconButton>
                            <IconButton>
                                <WatchLaterIcon />
                            </IconButton>
                            <IconButton>
                                <CheckCircleIcon />
                            </IconButton>
                            <IconButton>
                                <LabelImportantIcon />
                            </IconButton>
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        </div>
                        <div className="mail--toolsRight">
                            <IconButton>
                                <UnfoldMoreIcon />
                            </IconButton>
                            <IconButton>
                                <PrintIcon />
                            </IconButton>
                            <IconButton>
                                <ExitToAppIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div className="mail--messageContainer">
                        <div className="mail--messageHeader">
                            <h2>{getMail?.subject}</h2>
                            <LabelImportantIcon sx={{ color: "#e8ab02" }} />
                            <p>{getMail?.title}</p>
                            <p className="mail--messageHeader--time">{getMail?.time}</p>
                        </div>
                        <div className="mail--message--body">
                            <p>{getMail?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Mail