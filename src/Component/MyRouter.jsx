import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignIn } from './sign-in'
import { Signup } from './sign-up'
import {Profile} from './view-profile'
import { Myerror } from './error'
export const MyRouter = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/error' element={<Myerror/>} />

    </Routes>
    </div>
  )
}
