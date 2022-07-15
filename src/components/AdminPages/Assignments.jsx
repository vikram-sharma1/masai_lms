import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Assignments = () => {

  const [assignment, setAssignment] = useState(
    {
        name:"",
        creator:"",
        type:"",
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

    // console.log('yes')
    console.log(assignment)



    axios.post('https://masai-lms.herokuapp.com/assignment', assignment).then((res)=>{
      // console.log("res" + res.data)
      alert('Assignment added')
    }).catch((e)=>{
      console.log(e)
    })
}


  return (
    <>
        <div className='mainBox'>
          <h1 className='nameHead'>Assignments</h1>
              <form onSubmit={handleSubmit}>

                <div className='divideInput'>
                  <div><label>Name :</label></div>
                  <div><input type="text" className='inpBox' id='name' onInput={handleChange} /></div>
                </div>

                <div className='divideInput'> 
                  <div><label>Creator Name</label></div>
                  <div><input type="text" className='inpBox' id='creator'  onInput={handleChange}  /></div>
                </div>
                <div className='divideInput'>
                  <div><label>Type</label></div>
                  <div><input type="text" className='inpBox' id='type'  onInput={handleChange} /></div>
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