import React, { useEffect } from 'react'
import { useState} from 'react';
import Header from './otherPages/Header';
import { useNavigate } from 'react-router';
import './styles/Lecture.css'

import axios from 'axios';

const Lectures = () => {

  const [lect, setlect] = useState([])

  const navigate = useNavigate()


  useEffect(()=>{
    lectureFetch()
  },[])
  

  const lectureFetch = () => {

    axios.get('https://masai-lms.herokuapp.com/lecture').then((res)=>{
      // console.log(res.data)
      setlect(res.data)
    }).catch((error)=>{
      console.log(error)
    })

  }


  const dataPass = (data) => {
    // console.log(data)

    localStorage.setItem('lectureData', JSON.stringify(data))

    navigate('/LecDetailspage')

  }

 
  return (
    <>
        <Header/>
        
        <div className='secondBox'>
                <div>
                    <p className='todays'>Lectures</p>
                </div>
        </div>
        <div className='dataLecture'>

        {lect.map((data)=>{
            return(
              <div key={data.id} className='singleBox' onClick={()=>{
                  dataPass(data)
                }}>
                <p className='one'>{data.name}</p>
                <p className='two'><b>{data.creator}</b> Scheduled <b>{data.topic}</b> at {data.date}, - {data.time}</p>
              </div>
            )
        })}

        </div>
    </>
  )
}

export default Lectures