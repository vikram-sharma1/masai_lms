import React from 'react'

const Assignments = () => {
  return (
    <>
        <div className='mainBox'>
          <h1 className='nameHead'>Assignments</h1>
              <form>

                <div className='divideInput'>
                  <div><label>Topic Name :</label></div>
                  <div><input type="text" className='inpBox' /></div>
                </div>

                <div className='divideInput'> 
                  <div><label>Creator Name</label></div>
                  <div><input type="text" className='inpBox'  /></div>
                </div>
                <div className='divideInput'>
                  <div><label>Topic</label></div>
                  <div><input type="text" className='inpBox' /></div>
                </div>
                <div className='divideInput'>
                  <div><label>Date</label></div>
                  <div><input type="Date" className='inpBox'  /></div>
                </div>
                <div className='divideInput'>
                  <div><label>Time</label></div>
                  <div><input type="text" className='inpBox'  /></div>
                </div>
                <div className='divideInput'>
                  <div><label>Link</label></div>
                  <div><input type="text" className='inpBox'  /></div>
                </div>
                <div className='divideInput'>
                  <div><label>Password</label></div>
                  <div><input type="text" className='inpBox' /></div>
                </div>

                <input type="submit" value="Submit" className='submitBtn' />

  
              </form>
            </div>
    </>
  )
}

export default Assignments