import React from 'react'
import Login from '../components/Login'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/header' element={<Header/>} />
        </Routes>
    
    </>
  )
  }

export default AllRoutes