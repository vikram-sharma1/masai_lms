import React from 'react'
import { useState } from 'react'
import Assignments from './AdminPages/Assignments'
import Lectures from './AdminPages/Lectures'
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import './styles/Admin.css'

const Admin = () => {

  const [assignment, setAssignment] = useState(true)

  const [showLogout, setShowLogout] = useState(true)

  const navigate = useNavigate()

  const {userName, token, handleLogout} = useContext(AuthContext);

  const handleMouseOver = () => {
      setShowLogout(false)
  }

  const mouseLeave = () => {
      setShowLogout(true)
  }

  const Logout = () => {
      handleLogout()
      navigate('/')
  }


  const changeValue = (value) => {

    if(value == 0){
      setAssignment(true)
    }
    else{
      setAssignment(false)
    }

  }


  return (
    <>
        <h1 className='heading'>Admin Portal</h1>
        <div className='userBox' onClick={Logout} onMouseOver={handleMouseOver} onMouseLeave={mouseLeave}>
                    <p className='showName'>Logout</p>
                    {showLogout ? "" : <p className='adminLogout'>Click to Logout</p> }
                    
        </div>
        <div className='AssignmentBox'>
          <div className='addAssig' onClick={()=>{
            changeValue(0)
          }}>Add Assignments</div>
          <div className='addAssig' onClick={()=>{
            changeValue(1)
          }}>Add Lectures</div>
            {/* <Assignments/> */}
        </div>
        {(assignment) ? <Assignments/> : <Lectures/>}
    </>
  )
}

export default Admin