import React from 'react'
import { useState } from 'react'
import Assignments from './AdminPages/Assignments'
import Lectures from './AdminPages/Lectures'
import './styles/Admin.css'

const Admin = () => {

  const [assignment, setAssignment] = useState(true)


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