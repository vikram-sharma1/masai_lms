import React from 'react'
import logo from '../images/logo2.png'
import './styles/Header.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate()

  return (
    <>
        <div>
            <div className='topBox'>
                {/* Masai Logo */}
                <div className='masaiLogo'>
                <img src={logo} alt="" className='logo' onClick={()=>{navigate('/:Home')}} />

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
                <div className='userBox'>
                    Name of the User
                </div>
            </div>
            
        </div>
        
    </>
  )
}

export default Header