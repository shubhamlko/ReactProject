import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import Spinners from '../FilterExample/Spinners'


const Blog = () => {
    const {posts , loading} = useContext(AppContext)
  return (
    <>
        {
            loading ? (<Spinners />) :
             (
                posts.length === 0 ? 
                (<div className='no-record'>Post Not Availble</div>)
                    : 
                (
                    posts.map( (post) => (
                    <div key={post.id} className='border-bottom w-50 mx-auto mb-5 py-3 '>
                        <p className='fw-bolder'>{post.title}</p>
                        <p>by <span>{post.auther} on <span>{post.category}</span></span>
                         </p>
                         <p>
                            posted on {post.date}
                         </p>
                         <p>
                            {post.content}
                         </p>
                         <div>
                            {
                                post.tags.map((tag, index) =>{
                                    return <span key={index}>  {`#${tag}`} </span>
                                })
                            }
                         </div>
                    </div>
                )))
            )
        } 
    </>
  )
}

export default Blog