import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom';
const Logout = () => {
    const navigate = useNavigate()
    const [isLoggedIn,setIsLoggedIn]= useState(false);
    localStorage.removeItem('isLoggedIn');
    //localStorage.setItem('isLoggedIn','false');
    setIsLoggedIn(false);
    
    
  return (
   (1 && navigate('/bikes')) 
   

  )
}

export default Logout