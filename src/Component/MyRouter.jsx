import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignIn } from './sign-in'
import { Signup } from './sign-up'
export const MyRouter = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/signin' element={<SignIn />} />
    </Routes>
    </div>
  )
}
