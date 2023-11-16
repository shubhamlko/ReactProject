import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const BlogPagination = () => {
  const {page , handlePageCgange , totalpages} = useContext(AppContext)
  return (
    <>
     <div className='d-flex border-top bg-dark text-white position-fixed bottom-0 w-100 p-1'>
    <div>

        {
          page > 1 && (
            <button onClick={() => handlePageCgange(page - 1)}>
              Previous
            </button>
          )
        }
         {
          page < totalpages && (
            <button onClick={() => handlePageCgange(page + 1)}>
              Next
            </button>
          )
        }
        </div>
        <div>
                Page {page} of {totalpages}
        </div>
        </div>
    </>
  )
}

export default BlogPagination