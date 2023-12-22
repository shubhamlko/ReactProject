import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from "../Redux/Cartslice"
import { toast } from 'react-toastify';
import { AppContext } from '../Appcontext';

const Product = ({ post }) => {

    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();
    const {isLoggedIn} = useContext(AppContext)

    const addToCart = () => {
        if(isLoggedIn){
            dispatch(addProduct(post));
            toast.success("item added successfully")
        }
        else{
            alert("You have not Logged yet Please Login First")
        }
       
    }
    const removeFromCart = () => {
        dispatch(removeProduct(post.id));
        toast.error("item removed successfully");
    }

    return (
        <>

            <div className='col-md-4 col-sm-6 mb-2'>
                <div className='card p-2'>

                    <div className='img-box mb-3'>
                        <img src={post.image} alt="text" />
                    </div>
                    <div className='title fw-bold' >
                        {post.title}
                    </div>
                    <div className='decription'>
                        {post.description}
                    </div>


                    <div className='price'>
                        {post.price}

                    </div>
                    <div className='btn'>
                        {
                            cart.some((p) => p.id === post.id) ?
                                (<button onClick={removeFromCart}>
                                    remove Item
                                </button>)
                                :
                                (<button onClick={addToCart}>
                                    add Item
                                </button>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product