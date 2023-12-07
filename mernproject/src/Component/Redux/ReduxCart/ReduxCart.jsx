import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ReduxCartItem from './ReduxCartItem';
import { Link } from 'react-router-dom';

const ReduxCart = () => {
    const { cart } = useSelector((state) => state);
    const [totoalamount, setTotalAmount] = useState(0);
    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart])

    return (
        <div>
            {
                cart.length > 0 ?
                    (<div>
                        {
                            cart.map((item, index) => {
                                return <ReduxCartItem key={item.id} item={item} itemIndex={index} />
                            })
                        }
                    </div>) :
                    <div >
                        <div>no record found </div>
                        <Link to="/reduxcart">
                                <button>Continue Shopping</button>
                        </Link>
                    </div>
            }
        </div>
    )
}

export default ReduxCart