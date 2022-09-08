import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmailList from './components/EmailList';
import Mail from './components/Mail';
import SendMail from './components/SendMail';
import { selectSendMessageIsOpen } from './features/mailSlice';
import Login from './components/Login'
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './components/firebase';



function App() {
  const SendMessageIsOPen = useSelector(selectSendMessageIsOpen)
  // const user = useSelector(selectUser) //user value from redux
  const user = 3
  const dispatch = useDispatch()

  useEffect(
    () => {
      auth.onAuthStateChanged((userAuth) => {
        if (userAuth) {
          //Logged in
          dispatch(login({
            displayName: userAuth.displayName,
            email: userAuth.email,
            photoUrl: userAuth.photoURL,
          }))
        }
        else {
          //Logout in
          dispatch(logout())
        }
      })
    }
    , [dispatch]
  )

  return (



    < BrowserRouter >
      {!user ? <Login /> :
        <Routes>
          <Route path="*" element={<EmailList />} />
          <Route path="/" element={<EmailList />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/emaillist" element={<EmailList />} />
        </Routes>

      }
      {SendMessageIsOPen && <SendMail />}
    </BrowserRouter >

  );
}

export default App;
