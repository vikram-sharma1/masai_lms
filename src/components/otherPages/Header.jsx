import React from 'react'
import logo from '../../images/logo2.png'
import '../styles/Header.css'
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useState } from 'react';

const Header = () => {

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



  return (
    <>
        <div>
            <div className='topBox'>
                {/* Masai Logo */}
                <div className='masaiLogo'>
                <img src={logo} alt="" className='logo' onClick={()=>{navigate('/Home')}} />

                </div>
                <div className='typeBoxes'>
                    <div onClick={()=>{navigate('/Lectures')}}>Lectures</div>
                    <div onClick={()=>{navigate('/Assignments')}}>Assignments</div>
                    <div onClick={()=>{navigate('/Quizzes')}}>Quizzes</div>
                    <div onClick={()=>{navigate('/Tickets')}}>Tickets</div>
                    <div onClick={()=>{navigate('/Discussions')}}>Discussions</div>
                    <div onClick={()=>{navigate('/Notifications')}}>Notifications</div>
                    <div onClick={()=>{navigate('/Electives')}}>Electives</div>
                </div>
                <div className='userBox' onClick={Logout} onMouseOver={handleMouseOver} onMouseLeave={mouseLeave}>
                    <p className='showName'>{userName}</p>
                    {showLogout ? "" : <p className='showLogout'>Click to Logout</p> }
                    
                </div>
            </div>
            
        </div>
        
    </>
  )
}

export default Header