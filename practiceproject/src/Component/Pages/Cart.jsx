import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalamount, setTotalamount] = useState(0);
  
  useEffect(() => {
    setTotalamount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <>
      <div >
        {
          cart.length > 0 ? (<div className='row'>
            <div className='col-md-8'>
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>
            <div className='col-md-4 bg-secondary p-2 text-white'>
              <div className='bg-dark p-2'>your cart </div>
              <div className=''>total item  :    {cart.length} </div>
              <div className=''>total ammount : <span className='text-warning'> {totalamount} </span></div>
            </div>
          </div>
          ) : (
            <div>
              <h1>Cart is Empty</h1>
              <Link to={"/"}>
                <button>
                  Continue shopping
                </button>
              </Link>
            </div>
          )
        }

      </div>

    </>
  )
}

export default Cart