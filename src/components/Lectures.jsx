import React from 'react'
import Header from './otherPages/Header';
import { useParams } from 'react-router';
import './styles/Lecture.css'

const Lectures = () => {

 
  return (
    <>
        <Header/>
        
        <div className='secondBox'>
                <div>
                    <p className='todays'>Lectures</p>
                </div>
        </div>
        <div className='dataLecture'>
            <div className='singleBox'>
              <p className='one'>Thrive Regular Standup [ Week 4 ]</p>
              <p className='two'><b>Swanand</b> Scheduled <b>Coding</b> at 13 Jul, 22 - 12:00 pm</p>
            </div>
            <div className='singleBox'>
              <p className='one'>Thrive Regular Standup [ Week 4 ]</p>
              <p className='two'><b>Swanand</b> Scheduled <b>Coding</b> at 13 Jul, 22 - 12:00 pm</p>
            </div>
            <div className='singleBox'>
              <p className='one'>Thrive Regular Standup [ Week 4 ]</p>
              <p className='two'><b>Swanand</b> Scheduled <b>Coding</b> at 13 Jul, 22 - 12:00 pm</p>
            </div>
        </div>
    </>
  )
}

export default Lectures