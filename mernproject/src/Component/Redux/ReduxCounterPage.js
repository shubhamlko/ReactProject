import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from './ReduxCounter';

const ReduxCounterPage = () => {

    //const count = useSelector((state) => state.counter.value);
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();

  return (
    <>
        <div className='d-flex gap-3'>
               
                <button onClick={ () => {
                  
                  if(count > 0){
                    dispatch(decrement())
                  }
                }}>Decreament</button>
                
                <div className='bg-danger p-2 text-white'>
                    {count}
                </div>

                <button onClick={ () => dispatch(increment())}>Increament</button>
        </div>
    
    </>
  )
}

export default ReduxCounterPage