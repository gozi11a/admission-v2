import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import './course.scss'
export const Sirtqi = () => {
  return (
    <div className="img-wrapper">
      <div className="btn-wrapper">
        <button onClick={() => window.history.back()} className="back-button">
        <FaArrowLeft/>
        </button>
      </div>
      <div className='img-wrapper'>
      <img
          className="d-block"
          src={slide4}
          alt="Second slide"
        />
      </div>
     
    </div>
  )
}
