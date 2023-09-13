import React from 'react'
import vedio from "../Assets/MBA Chai Wala.mp4"


const Introvedio = () => {
  return (
    <div className='intro'>
      
      <video src={vedio} muted autoPlay loop controlsList="nodownload"></video>
    <div></div>
    </div>
  )
}

export default Introvedio
