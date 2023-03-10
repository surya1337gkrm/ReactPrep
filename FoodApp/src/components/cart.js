import React, { useState } from 'react';
import { emptyCartURl } from '../config';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Cart() {
  // const [cart, setCart] = useState(null);
  const cart = useSelector((store) => store.cart.items);

  return cart.length !== 0 ? (
    <div className='flex justify-center items-center '>cart</div>
  ) : (
    <>
      <div className='flex justify-center items-center '>
        <div className='flex-col'>
          <img
            src={emptyCartURl}
            className='w-72 h-72 mx-10 mt-10 mb-4 opacity-60'
          />
          <h4 className='font-bold text-center text-xl'>Your cart is empty</h4>
          <p className='opacity-50 text-center my-4'>
            You can go to home page to view more restaurants
          </p>
          <div className='flex justify-center items-center'>
            <Link to='/' className='bg-orange-400 font-bold text-white p-2'>
              SEE RESTAURANTS NEAR YOU
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
