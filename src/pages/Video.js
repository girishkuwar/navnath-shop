import React from 'react'
import '../assets/css/style.css'
import '../assets/css/font-awesome.css'
import '../assets/css/bootstrap.min.css'
import video from '../assets/images/video1.mp4'
const Video = () => {
  return (
    
    <video autoPlay muted loop id="bg-video" >
      <source src={video} type="video/mp4" />
    </video>
  
  )
}

export default Video