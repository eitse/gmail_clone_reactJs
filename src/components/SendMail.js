import React from 'react'
import './SendMail.css'
import { useDispatch } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton } from '@mui/material';
import { useForm } from "react-hook-form"
import { closeSendMessage } from '../features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase/compat/app';


function SendMail() {
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm()

    function onSubmit(formData) {
        dispatch(closeSendMessage())

        db.collection("outboxMessages").add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

    }

    function hideCompose() {
        dispatch(closeSendMessage())
    }



    return (
        <div className='sendMail'>
            <div className="sendMail--header">
                <h3>New Message</h3>
                <IconButton onClick={hideCompose}><CloseIcon className="sendMail--clone" /></IconButton>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input name='to'
                    type="email"
                    placeholder='To'
                    {...register('to', { required: true })} />

                {errors.to && <p className='sendMail--error'>To is Required</p>}

                <input name='subject'
                    type="text"
                    placeholder='Subject'
                    {...register('subject', { required: true })}
                />

                {errors.subject && <p className='sendMail--error'>Subject is Required</p>}

                <input
                    name='message'
                    type="text"
                    placeholder='Message...'
                    className='sendMail--message'
                    {...register('message', { required: true })}
                />

                {errors.message && <p className='sendMail--error'>Message is Required</p>}

                <div className="sendMail--options">
                    <Button variant='contained' type="submit" className="sendMail--send" >Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail