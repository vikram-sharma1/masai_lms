import React from 'react'
import Header from './otherPages/Header'

const Home = () => {
  return (
    <>
        <Header/>
        
        <div className='secondBox'>
                <div>
                    <p className='todays'>Today's Schedule</p>
                </div>
                <div>
                    <button className='button'>BOOKMARKS</button>
                    <button className='button'>REFER & EARN</button>
                </div>

        </div>
    </>
  )
}

export default Home