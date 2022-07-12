import React from 'react'
import logo from '../images/logo2.png'
import './Login.css'

const Login = () => {
  return (
    <>
        <div className='LoginMainBox'>
            <img src={logo} alt="" className='MasaiLogo' />
            <div className='idPassBox'>
                <label>Email</label>
                    <br />
                <input type="text" className='inputBar' />
                    <br />
                <label>Password</label>
                    <br />
                <input type="text" className='inputBar'/>
                    <br />
                <input type="checkbox" name="" id="" />
                <label>Remember Me</label>
                <div className='buttonBox'>
                    <p className='forget'>Forgot your password?</p>
                    <button>LOG IN</button>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Login