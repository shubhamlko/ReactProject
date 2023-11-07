import React, { useState } from 'react'
import data from "./JsonData"
import TourPackege from './TourPackege';
 
const TourPlan = () => {

const [tours , setTours] = useState(data);
const removeTour = (id) =>{
    const newTours = tours.filter( tour => tour.id !==id);
    setTours(newTours)
}

if(tours.length === 0){
  return(
      <div className='col-md-12 bg-light p-5 text-center'>
          <h3>No Record</h3>
          <button className='btn btn-dark' onClick={() => setTours(data)}>
                Refresh
          </button>
      </div>
  )
}

  return (
    <>
          <div className='container-fluid'>
           
            <TourPackege tours={tours} removeTour={removeTour}/>
            </div>   
            
    </>
  )
}

export default TourPlan