import React from 'react'
import { Checkbox, IconButton } from '@mui/material'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import './EmailRow.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { mailData } from '../features/mailSlice';


function EmailRow({ id, title, subject, description, time }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const openMail = () => {
        navigate("mail")
        dispatch(mailData({
            title, subject, description, time
        }))
    }

    return (
        <div onClick={openMail} className='emailRow'>
            <div className="emailRow--options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>
            <h4 className="emailRow--title">
                {title}
            </h4>

            <div className="emailRow--message">
                <h4>{subject} {" "} - {" "}
                    <span className="emailRow--description">
                        {description}
                    </span>
                </h4>
            </div>
            <p className="emailRow--time">{time}</p>
        </div>
    )
}

export default EmailRow