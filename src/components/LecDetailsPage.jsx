import React from 'react'
import Header from './otherPages/Header'
import './styles/LecDetailspage.css'

const LecDetailsPage = () => {
  return (
    <>
        <Header/>
        <div className='secondBox'>
            <div>
                <p className='todays'>Lectures</p>
            </div>
        </div>
        <div className='mainDetailsPage'>
            <p className='classLink'>Class Link</p>
            <br />
            <a  className='classLink2' href='https://us06web.zoom.us/j/87854993117?pwd=K2h6VlZGcHVuZjIxbU5nY2FUSVJzZz09' target="_blank">https://us06web.zoom.us/j/87854993117?pwd=K2h6VlZGcHVuZjIxbU5nY2FUSVJzZz09</a>
        </div>
        
    </>
  )
}

export default LecDetailsPage