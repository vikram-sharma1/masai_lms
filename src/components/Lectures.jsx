import React from 'react'
import Header from './Header'
import { useParams } from 'react-router';

const Lectures = () => {

 
  return (
    <>
        <Header/>
        
        <div className='secondBox'>
                <div>
                    <p className='todays'>Lectures</p>
                </div>
                {/* <div>
                    <button className='button'>BOOKMARKS</button>
                    <button className='button'>REFER & EARN</button>
                </div> */}

        </div>
    </>
  )
}

export default Lectures