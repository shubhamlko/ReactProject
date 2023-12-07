import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import {  removeProduct} from "./ReduxCartSlice"
const ReduxCartItem = ({item,index}) => {
    const dispatch = useDispatch();
    const removeFromCart = () => {
        dispatch(removeProduct(item.id));
        toast.warning("item removed successfully")
    }
  return (
    <div>
            <div className='title'>
                    {item.title}
            </div>
            <div className='description'>
                {item.description}
            </div>
            <div className='price d-flex justyfy-content-between'>
              <span>{item.price}</span>  
              <span onClick={removeFromCart}>delete</span>
            </div>


    </div>
  )
}

export default ReduxCartItem