import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignIn } from './sign-in'
import { Signup } from './sign-up'
import { Profile } from './view-profile'
import { Myerror } from './error'
import { Authenticated } from './Authenticated'

export const MyRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route element={<Authenticated />}>
          <Route path='/' element={<Signup />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/error' element={<Myerror />} />
        </Route>
      </Routes>
    </div>
  )
}
