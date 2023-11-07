import React, { useState } from 'react'

const TourContent = ({ id, image, info, price, name , removeTour }) => {
    const [readmore, setReadmore] = useState(false);
    const description =  readmore ? info : `${info.substring(0,100)}....`;
    const readmorehandler  = () =>{
        setReadmore(!readmore)
    }

 
    return (
        <>

            <div className='col-lg-3 col-md-4 col-sm-6' key={id}>
                <div className='card mb-3'>
                    <div className='img-box'>
                    <img className="card-img-top" src={image} alt="Card image cap" />   
                    </div>
                      
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text text-danger fw-bold">
                                {price}
                            </p>
                            <p className="card-text">
                                {description}
                            
                            <span className="text-danger fw-bolder" onClick={readmorehandler}>
                                {readmore ? `show less` : `read more` }
                            </span>
                            </p>
                            <button type='button' className="btn btn-danger shadow w-100 text-uppercase" onClick={() => removeTour(id)}>
                               not intrested
                            </button>
                        </div>
                </div>
            </div>

        </>

    )
}

export default TourContent