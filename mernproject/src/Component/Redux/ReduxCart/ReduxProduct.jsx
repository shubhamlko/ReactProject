import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { addProduct , removeProduct} from "./ReduxCartSlice"

const ReduxProduct = ({post}) => {

    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addProduct(post));
        toast.success("item Added successfully")
    }
    const removeFromCart = () => {
        dispatch(removeProduct(post.id));
        toast.warning("item removed successfully")
    }
  return (
    <div className='col-md-4 col-sm-6 mb-2'>
        <div className='card p-2'>

        
            <div className='title'>   
                {post.title}
            </div>
            <div className='decription'>
                {post.description}
            </div>
            <div className='img-box'>
            <img src={post.image} alt="text" />
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
  )
}

export default ReduxProduct