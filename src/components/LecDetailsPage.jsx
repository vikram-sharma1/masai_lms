import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Header from './otherPages/Header'
import './styles/LecDetailspage.css'

const LecDetailsPage = () => {


    const data = JSON.parse(localStorage.getItem("lectureData"))
    console.log('data:', data)


 
  
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
            <a  className='classLink2' href={data.link} target="_blank">Click to Open Link</a>
        </div>
        
    </>
  )
}

export default LecDetailsPage 