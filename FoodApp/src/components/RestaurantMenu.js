import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Shimmer from './shimmer';
import { IMG_CDN_URL } from '../config';
import useRestaurant from '../utils/useRestaurant';
import FillerImage from './FillerImage';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

function RestaurantMenu() {
  const params = useParams();
  // const [menuData, setMenuData] = useState(null);
  const menuData = useRestaurant(params.menuId);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  //early-return
  return menuData ? (
    <div className='lg:flex'>
      <div className='flex justify-center w-full h-fit px-5 mx-5 bg-white z-40 md:sticky top-28 lg:max-w-md'>
        <img
          src={IMG_CDN_URL + menuData.cloudinaryImageId}
          alt={menuData.name}
          loading='lazy'
          className='w-[200px] h-[200px] object-contain mx-2 p-1 f'
        />
        <div className='m-5 p-5'>
          <h1 className='font-bold text-3xl'>{menuData.name}</h1>
          <p className='opacity-50'>{menuData.cuisines.join(', ')}</p>
          <p className='opacity-50'>
            {menuData.area}, {menuData.city}
          </p>
          <small className='font-bold py-2 my-2'>
            {menuData.costForTwoMsg}
          </small>
          <br />
          <p className='flex'>
            {menuData.avgRatingString}
            <span className='mt-1 pt-[0.2rem] pl-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='12'
                fill='green'
                className='bi bi-star-fill'
                viewBox='0 0 16 16'>
                <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
              </svg>
            </span>
          </p>
          <hr />
          <small>{menuData.totalRatingsString}</small>
        </div>
      </div>
      <div className='px-5 mx-5'>
        <h3 className='font-bold text-3xl mt-5 pt-5' data-testid='menuTitle'>
          Menu
        </h3>
        <ul data-testid='menuList'>
          {Object.values(menuData.menu.items).map((ele, idx) => {
            // console.log(menuData);
            return (
              <li key={ele.id}>
                <div className='flex justify-between w-fit p-2 bg-slate-50 my-2 shadow'>
                  <div className='flex-col p-2 w-[350px] '>
                    <h3>{ele.name}</h3>
                    {ele.description.trim() ? (
                      <small className='opacity-50'>{ele.description}</small>
                    ) : (
                      <small className='opacity-30'>
                        Description Not Available.
                        <br />
                        Contact Restaurant for any information related to the
                        item.
                      </small>
                    )}
                    <br />
                    <small className="font-bold before:content-['\20B9']">
                      {ele.price === 0 || !ele.price
                        ? ele.defaultPrice / 100
                        : ele.price / 100}
                    </small>
                  </div>
                  <div className='w-[118px] h-[100px] m-1 p-1'>
                    {ele.cloudinaryImageId ? (
                      <img
                        src={IMG_CDN_URL + ele.cloudinaryImageId}
                        alt={ele.name}
                        loading='lazy'
                        className='h-full object-cover rounded-md'
                      />
                    ) : (
                      <FillerImage className='w-full' />
                    )}
                    <button
                      className='relative -top-4 left-5 bg-white px-5 font-bold text-green-700 border-2 border-gray-200'
                      onClick={() => {
                        console.log(ele);
                        dispatch(addItem(ele));
                      }}
                      data-testid='addBtn'>
                      Add
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  ) : (
    <Shimmer />
  );
}

export default RestaurantMenu;
