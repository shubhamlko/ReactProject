import React from 'react'
import TourContent from './TourContent'

const TourPackege = ({tours, removeTour}) => {
  return (
    
    <>
    <h1 className='bg-light text-center p-3 mb-5'>Our Plans</h1>
   <div className='container'>
    <div className='row'>
        {
        tours.map( (tour) =>{
            return <TourContent {...tour} removeTour={removeTour}  />
        })
    }
    </div>
    </div>
    </>
  )
}


export default TourPackege