import React from 'react'
import BlogHeader from './BlogHeader'
import { useNavigation } from 'react-router-dom'

const TagPage = () => {
  const navigation = useNavigation();
  
  return (
    
    <>
      <BlogHeader/>
      <div>
          <button onClick={() =>{
            navigation(-1)
          }}>Back</button>
          <h1>blog taggged</h1>
      </div>
    </>

  )
}

export default TagPage