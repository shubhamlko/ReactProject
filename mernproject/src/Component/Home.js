import React  from 'react';
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
        <div className='bg-dark text-white p-3 text-center fs-3'>
                React Application
        </div>
        
	<div class="buttons">
        <Link to="/home" className="button2">Home</Link>
		<Link to="/databinding" className="button2">Data Binding</Link>
        <Link to="/filter-example" className="button2">Filter Example </Link>
        <Link to="/form-basic" className="button2">Form</Link>

	
	</div>

    </>
  )
}

export default Home