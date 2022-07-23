import React, { useEffect } from 'react'
import { useState} from 'react';
import Header from './otherPages/Header';
import { useNavigate } from 'react-router';
import './styles/Lecture.css'

import axios from 'axios';

const Lectures = () => {

  const [lect, setlect] = useState([])
  const [page, setpage] = useState(1)

  const [totalPage, setTotalPage] = useState() 

  const navigate = useNavigate()


  // useEffect(()=>{
  //   lectureFetch()
  // },[])
  useEffect(()=>{
    lectureFetch()
  },[page])
  

  const lectureFetch = () => {

    
    console.log(page)
    axios.get(`https://masai-lms.herokuapp.com/lecture?page=${page}`).then((res)=>{
      console.log(res.data.user)
      setlect(res.data.user)
      setTotalPage(res.data.totalpage)
    }).catch((error)=>{
      console.log(error)
    })

  }


  const dataPass = (data) => {
    console.log(data)
    console.log('yes')
    localStorage.setItem('lectureData', JSON.stringify(data))

    navigate('/Lectures/LecDetailspage')

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
        <div className='buttonDiv'>
        <button  className='button-4' onClick={()=>{
          if(page != 1 ){
            setpage(page - 1)
            // console.log(page)
          }
        }}>Prev</button>
        <button className='button-4' onClick={()=>{
          if(page != totalPage){
            setpage(page + 1)
            // console.log(page)
          }
        }}>Next</button>
        </div>
    </>
  )
}

export default Lectures