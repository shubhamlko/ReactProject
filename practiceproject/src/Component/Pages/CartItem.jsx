import React from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {   removeProduct} from "../Redux/Cartslice"
const CartItem = ({item , index}) => {

  const dispatch = useDispatch();
  const removeFromCart = () => {
      dispatch(removeProduct(item.id));
      toast.warning("item removed successfully")
  }
  return (
    <>
        <div className='d-flex'>
            <div className='img-box'>
                <img src={item.image} alt="" />
            </div>
            <div>
                <div>{item.title}</div>
                <div> {item.description}  </div>
                <div> {item.price} </div>
                <div className='btn btn-danger' onClick={removeFromCart}>delete</div>
            </div>
        </div>
    </>
  )
}

export default CartItem