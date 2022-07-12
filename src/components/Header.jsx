import React from 'react'
import logo from '../images/logo2.png'
import './styles/Header.css'

const Header = () => {
  return (
    <>
        <div>
            <div className='topBox'>
                {/* Masai Logo */}
                <div className='masaiLogo'>
                <img src={logo} alt="" className='logo' />

                </div>
                <div className='typeBoxes'>
                    <div>Lectures</div>
                    <div>Assignments</div>
                    <div>Quizzes</div>
                    <div>Tickets</div>
                    <div>Discussions</div>
                    <div>Notifications</div>
                    <div>Electives</div>
                </div>
                <div className='userBox'>
                    Name of the User
                </div>
            </div>
            <div className='secondBox'>
                <div>
                    <p className='todays'>Today's Schedule</p>
                </div>
                <div>
                    <button className='button'>BOOKMARKS</button>
                    <button className='button'>REFER & EARN</button>
                </div>

            </div>
        </div>
    </>
  )
}

export default Header