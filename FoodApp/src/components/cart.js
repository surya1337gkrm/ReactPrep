import React, { useState, useEffect } from 'react';
import { emptyCartURl } from '../config';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

function Cart() {
  // const [cart, setCart] = useState(null);
  const cart = useSelector((store) => store.cart.items);
  const [cartTotal, setCartTotal] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    setCartTotal(total / 100);
  });

  return cart.length !== 0 ? (
    <div className='flex justify-center items-center '>
      <div className='flex-col'>
        <h1 className='text-2xl font-bold py-2 my-2'>Cart</h1>
        {cart.map((item) => (
          <div key={item.id} className='bg-slate-100 shadow p-2 my-2'>
            {item.name}
          </div>
        ))}
        Cart Total:
        <small className="font-bold before:content-['\20B9']">
          {cartTotal}
        </small>
        <br />
        <button
          className='bg-red-400 p-2 my-2 rounded text-white font-bold'
          onClick={() => dispatch(clearCart())}>
          Clear Cart
        </button>
      </div>
    </div>
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
