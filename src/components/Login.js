import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import { auth, provider } from './firebase'
import './Login.css'

function Login() {
    const dispatch = useDispatch()


    const signIn = () => {

        auth.signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL,
                }))
            })
            .catch(err => alert(err.message))
    }


    return (
        <div className='login'>
            <img src='../gmail_banner.jpg' alt='' />
            <Button onClick={signIn} className='btn--login' variant="contained">Login with gmail</Button>
        </div>
    )
}

export default Login