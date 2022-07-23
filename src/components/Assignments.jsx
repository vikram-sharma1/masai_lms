import React, { useEffect } from 'react'
import { useState} from 'react';
import { useNavigate } from 'react-router';
// import Header from './Header'
import { useParams } from 'react-router';
import Header from './otherPages/Header';
import axios from 'axios';

const Assignments = () => {


  
  const [assign, setAssign] = useState([])
  const [page, setpage] = useState(1)

  const [totalPage, setTotalPage] = useState() 

  const navigate = useNavigate()


  useEffect(()=>{
    assignFetch()
  },[page])
  

  const assignFetch = () => {

    axios.get(`https://masai-lms.herokuapp.com/assignment?page=${page}`).then((res)=>{
      // console.log(res.data)
      setAssign(res.data.user)
      setTotalPage(res.data.totalpage)
    }).catch((error)=>{
      console.log(error)
    })

  }


  const dataPass = (data) => {
    console.log(data)

    localStorage.setItem('AssignmentData', JSON.stringify(data))

    navigate('/Assignments/AssigDetailspage')

  }


   

  return (
    <>
        
        <Header/>
        <div className='secondBox'>
                <div>
                    <p className='todays'>Assignments</p>
                </div>
                

        </div>
        <div className='dataLecture'>

              {assign.map((data)=>{
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

export default Assignments