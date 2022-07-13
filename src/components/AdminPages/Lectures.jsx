import React from 'react'
import { useState } from 'react'

const Lectures = () => {

    const [lecture, setLecture] = useState(
        {
            topic:"",
            creator:"",
            codingDSA:"",
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
    }


  return (
    <>
        <div className='mainBox'>
            <h1 className='nameHead'>Lectures</h1>
              <form onSubmit={handleSubmit}>

                <div className='divideInput'>
                  <div><label>Topic Name :</label></div>
                  <div><input type="text" id='topic' className='inpBox' onInput={handleChange}/></div>
                </div>

                <div className='divideInput'> 
                  <div><label>Creator Name</label></div>
                  <div><input type="text" id='creator' className='inpBox'  onInput={handleChange}  /></div>
                </div>
                <div className='divideInput'>
                  <div><label>Topic ( Coding / DSA )</label></div>
                  <div><input type="text" id='codingDSA' className='inpBox'  onInput={handleChange} /></div>
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