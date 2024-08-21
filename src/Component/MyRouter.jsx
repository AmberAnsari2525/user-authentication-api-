import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignIn } from './sign-in'
import { Signup } from './sign-up'
import {Profile} from './view-profile'

export const MyRouter = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/profile' element={<Profile />} />

    </Routes>
    </div>
  )
}
