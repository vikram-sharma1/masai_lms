import React from 'react'
import Login from '../components/Login'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route exact path='/' element={<Login />} />
        </Routes>
    
    </>
  )
  }

export default AllRoutes