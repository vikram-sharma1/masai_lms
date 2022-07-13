import React from 'react'
import Login from '../components/Login'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'
import Lectures from '../components/Lectures'
import Assignments from '../components/Assignments'
import Quizzes from '../components/Quizzes'
import Tickets from '../components/Tickets'
import Discussions from '../components/Discussions'
import Notifications from '../components/Notifications'
import Electives from '../components/Electives'
import Admin from '../components/Admin'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/Home' element={<Home/>} />



            <Route exact path='/Lectures' element={<Lectures/>} />
            <Route exact path='/Assignments' element={<Assignments/>} />
            <Route exact path='/Quizzes' element={<Quizzes/>} />
            <Route exact path='/Tickets' element={<Tickets/>} />
            <Route exact path='/Discussions' element={<Discussions/>} />
            <Route exact path='/Notifications' element={<Notifications/>} />
            <Route exact path='/Electives' element={<Electives/>} />
            <Route exact path='/Admin' element={<Admin/>} />
        </Routes>
    
    </>
  )
  }

export default AllRoutes