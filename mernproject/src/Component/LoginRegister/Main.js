import React from 'react'
import Navbar from './Navbar'


const Main = ({setIsLoggedIn, isLoggedIn}) => {



  return (
    

<>
       
<Navbar isLoggedIn={isLoggedIn}  setIsLoggedIn={setIsLoggedIn} />
  
</>


  )
}

export default Main