import React, { useContext, useEffect } from 'react'
import BlogHeader from './BlogHeader'
import Blog from './Blog'
import BlogPagination from './BlogPagination'
import { AppContext } from '../../context/AppContext'

const BlogMain = () => {

 const {fetchBlogPosts} = useContext(AppContext);
 useEffect(()=>{
   fetchBlogPosts();
 },[])


  return (
    <>
        <BlogHeader /> 
        <Blog />
        <BlogPagination />
    
    </>
  )
}

export default BlogMain