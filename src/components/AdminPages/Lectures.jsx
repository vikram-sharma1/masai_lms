import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Lectures = () => {

    const [lecture, setLecture] = useState(
        {
            name:"",
            creator:"",
            topic:"",
            date:"",
            time:"",
            link:""
        }
    )

    const handleChange = (e) => {
        const {id, value} = e.target
       
        setLecture({...lecture, [id]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // console.log('yes')
        console.log(lecture)

        axios.post('https://masai-lms.herokuapp.com/lecture', lecture).then((res)=>{
      console.log("res : " + res.data)
          alert('Lecture added')
        }).catch((e)=>{
          console.log(e)
        })
    }


  return (
    <>
        <div className='mainBox'>
            <h1 className='nameHead'>Lectures</h1>
              <form onSubmit={handleSubmit}>

                <div className='divideInput'>
                  <div><label>Topic Name :</label></div>
                  <div><input type="text" id='name' className='inpBox' onInput={handleChange}/></div>
                </div>

                <div className='divideInput'> 
                  <div><label>Creator Name</label></div>
                  <div><input type="text" id='creator' className='inpBox'  onInput={handleChange}  /></div>
                </div>
                <div className='divideInput'>
                  <div><label>Topic ( Coding / DSA )</label></div>
                  <div><input type="text" id='topic' className='inpBox'  onInput={handleChange} /></div>
                </div>
                <div className='divideInput'>
                  <div><label>Date</label></div>
                  <div><input type="Date" id='date' className='inpBox'  onInput={handleChange}  /></div>
                </div>
                <div className='divideInput'>
                  <div><label>Time</label></div>
                  <div><input type="text" id='time' className='inpBox' onInput={handleChange}  /></div>
                </div>
                <div className='divideInput'>
                  <div><label>Link</label></div>
                  <div><input type="text" id='link' className='inpBox'  onInput={handleChange} /></div>
                </div>

                <input type="submit" value="Submit" className='submitBtn'  />

  
              </form>
            </div>
    </>
  )
}

export default Lectures