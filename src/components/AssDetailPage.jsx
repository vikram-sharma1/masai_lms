import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Header from './otherPages/Header'
import './styles/LecDetailspage.css'

const AssDetailPage = () => {


    const data = JSON.parse(localStorage.getItem("AssignmentData"))
    console.log('data:', data.password)


 
  
  return (
    <>
        <Header/>
        <div className='secondBox'>
            <div>
                <p className='todays'>{data.creator}</p>
            </div>
        </div>
        <div className='mainDetailsPage'>
            <p className='classLink'>{data.name}</p>
            <br />
            <span>Link for the Assignment</span>
            <br /><a  className='classLink2' href={data.link} target="_blank">Click to Open Link</a>
            <br />
            <span>Password :</span><p>{data.password}</p>
        </div>
        
    </>
  )
}

export default AssDetailPage