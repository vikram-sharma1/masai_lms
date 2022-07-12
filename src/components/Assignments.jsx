import React from 'react'
import Header from './Header'
import { useParams } from 'react-router';

const Assignments = () => {

   

  return (
    <>
        <Header/>
        
        <div className='secondBox'>
                <div>
                    <p className='todays'>Assignments</p>
                </div>
                {/* <div>
                    <button className='button'>BOOKMARKS</button>
                    <button className='button'>REFER & EARN</button>
                </div> */}

        </div>
    </>
  )
}

export default Assignments