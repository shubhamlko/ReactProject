import React, { useEffect, useState } from 'react'
import Spinner from './Pages/Spinner'
import Product from './Pages/Product';

const Main = () => {
  const apiUrl = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([])

  async function getProductData() {
    setLoading(true)
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setPosts(data);

    }
    catch {
      console.log("error aa rha h data fetch krne me");
      setPosts([])
    }
    setLoading(false)
  }

  useEffect(() => {
    getProductData()
  }, [])

  return (
    <>

      {
        loading ? <Spinner /> : posts.length > 0 ?
          (
            <div className='row'>
              {
                posts.map((post) => {
                  return <Product key={post.id} post={post} />
                })
              }
            </div>
          ) :
          <div>
            No record Found
          </div>
      }


    </>
  )
}

export default Main