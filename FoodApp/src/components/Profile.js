import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../utils/cartSlice';

function Profile() {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.cart.todos);
  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <>
      <div>Profile</div>
      <div className='flex flex-wrap'>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className='p-2 m-2 bg-orange-200 rounded-sm shadow-lg w-fit hover:scale-95 ease-in-out duration-300'>
            {todo.title}
          </div>
        ))}
      </div>
    </>
  );
}
export default Profile;
