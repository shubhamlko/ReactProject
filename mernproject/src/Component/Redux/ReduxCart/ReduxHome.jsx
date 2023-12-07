import React, { useEffect, useState } from 'react'
import Spinners from '../../FilterExample/Spinners'
import ReduxProduct from './ReduxProduct';
import { Link } from 'react-router-dom';
export const ReduxHome = () => {
    const apiUrl = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([])

    async function fetchProductData() {
        setLoading(true)
        try {
            const res = await fetch(apiUrl);
            const data = await res.json();
            setPosts(data);
        }
        catch {
            console.log("Error aa rha h Product Data me")
            setPosts([])
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchProductData();
    }, [])


    return (
        <>
            <Link to="/reduxcartItem">
                <div className='bg-red text-white p-2'>
                    go to cart
                </div>
            </Link>
            <div className='container'>
                {
                    loading ? <Spinners /> :
                        posts.length > 0 ?
                            (<div className='row'>
                                {
                                    posts.map((post) => {
                                        return <ReduxProduct key={post.id} post={post} />
                                    })
                                }
                            </div>) :
                            <div>
                                no data found
                            </div>
                }
            </div>
        </>
    )
}
