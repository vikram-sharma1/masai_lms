import React from 'react'
import { useState } from 'react'

const Assignments = () => {

  const [assignment, setAssignment] = useState(
    {
        topic:"",
        creator:"",
        codingDSA:"",
        date:"",
        time:"",
        link:"",
        password:""
    }
)

const handleChange = (e) => {
    const {id, value} = e.target
   
    setAssignment({...assignment, [id]:value})
}

const handleSubmit = (e) => {
    e.preventDefault()

    console.log('yes')
    console.log(assignment)
}


  return (
    <>
        <div className='mainBox'>
          <h1 className='nameHead'>Assignments</h1>
              <form onSubmit={handleSubmit}>

                <div className='divideInput'>
                  <div><label>Topic Name :</label></div>
                  <div><input type="text" className='inpBox' id='topic' onInput={handleChange} /></div>
                </div>

                <div className='divideInput'> 
                  <div><label>Creator Name</label></div>
                  <div><input type="text" className='inpBox' id='creator'  onInput={handleChange}  /></div>
                </div>
                <div className='divideInput'>
                  <div><label>Topic  ( Coding / DSA )</label></div>
                  <div><input type="text" className='inpBox' id='codingDSA'  onInput={handleChange} /></div>
                </div>
                <div className='divideInput'>
                  <div><label>Date</label></div>
                  <div><input type="Date" className='inpBox' id='date' onInput={handleChange}  /></div>
                </div>
                <div className='divideInput'>
                  <div><label>Time</label></div>
                  <div><input type="text" className='inpBox' id='time' onInput={handleChange}  /></div>
                </div>
                <div className='divideInput'>
                  <div><label>Link</label></div>
                  <div><input type="text" className='inpBox' id='link' onInput={handleChange}  /></div>
                </div>
                <div className='divideInput'>
                  <div><label>Password</label></div>
                  <div><input type="text" className='inpBox' id='password'  onInput={handleChange} /></div>
                </div>

                <input type="submit" value="Submit" className='submitBtn' />

  
              </form>
            </div>
    </>
  )
}

export default Assignments