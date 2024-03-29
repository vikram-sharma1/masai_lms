import React from 'react'
import Login from '../components/Login'
import { Route, Routes } from 'react-router-dom'
// import Header from '../components/otherPages/Header'
import Home from '../components/Home'
import Lectures from '../components/Lectures'
import Assignments from '../components/Assignments'
import Quizzes from '../components/otherPages/Quizzes'
import Tickets from '../components/otherPages/Tickets'
import Discussions from '../components/otherPages/Discussions'
import Notifications from '../components/otherPages/Notifications'
import Electives from '../components/otherPages/Electives'
import Admin from '../components/Admin'
import AssDetailPage from '../components/AssDetailPage'
// import LecDetailsPage from '../components/lecDetailsPage'
import LecDetailsPage from '../components/LecDetailsPage'

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
            <Route exact path='/Lectures/LecDetailspage' element={<LecDetailsPage/>} />
            {/* <Route exact path='/LecDetailspage' element={<LecDetailsPage/>} /> */}
            <Route exact path='/Assignments/AssigDetailspage' element={<AssDetailPage/>} />
            {/* <Route exact path='/AssigDetailspage' element={<AssDetailPage/>} /> */}
        </Routes>
    
    </>
  )
  }

export default AllRoutes