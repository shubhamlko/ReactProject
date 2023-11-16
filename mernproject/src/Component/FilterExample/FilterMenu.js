import React from 'react'

const FilterMenu = (props) => {
  let filterdata = props.filterdata;
   let category = props.category;
   let setCategory = props.setCategory;
   function filterHandler(title) {
     setCategory(title);
   }

  return (

    <>

      <div className="filters-controls">

        {

          filterdata.map((data) => (

            <button type="button" className="filter-control" key={data.id} 
            onClick = {() => filterHandler(data.title)}
            >
              {data.title}
            </button>

            // <button type="button" class="filter-control" key={data.id}>
            //   {data.title}
            // </button>

          ))

        }
      </div>

    </>
  )
}

export default FilterMenu