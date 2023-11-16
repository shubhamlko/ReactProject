import React, { useEffect, useState } from 'react'
import FilterMenu from './FilterMenu'
import FilterData from './FilterData'
import { apiUrl, filterdatafromMenu } from './FilterMenuData'
import { toast } from 'react-toastify'
import Spinners from './Spinners'
import Card from './Card'

const Filter = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterdatafromMenu[0].title);

  console.log(category);
  async function fetchData() {
    setLoading(true)
    try {
      let res = await fetch(apiUrl);
      let output = await res.json();
      //console.log("data coming from filter.js")
      //console.log(output);
      setCourses(output.data)

    }
    catch (error) {
      toast.error("something went wrong")
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchData();
  }, [])


  return (
    <>

      <FilterMenu filterdata={filterdatafromMenu} category={category} setCategory={setCategory} /> 
      
      
      <div className='bg-red p-5'>


        {
          loading ? (<Spinners />) : (<Card courses={courses} category={category}  />)   //not working for button
          //loading ? (<Spinners />) : (<Card courses={courses} />)
        }

      </div>
    </>
  )
}

export default Filter