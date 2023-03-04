import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Shimmer from './shimmer';
import { IMG_CDN_URL } from '../config';
import useRestaurant from '../utils/useRestaurant';

function RestaurantMenu() {
  const params = useParams();
  // const [menuData, setMenuData] = useState(null);
  const menuData = useRestaurant(params.menuId);

  //early-return
  return menuData ? (
    <>
      <div className='flex'>
        <div className='flex sticky top-0'>
          <img
            src={IMG_CDN_URL + menuData.cloudinaryImageId}
            alt={menuData.name}
            className='w-[200] h-[200] object-contain mx-2 p-1'
          />
          <div className='m-5 p-5'>
            <h1 className='font-bold text-3xl '>{menuData.name}</h1>
            <p>
              {menuData.area}, {menuData.city}
            </p>
            <p>{menuData.avgRatingString}</p>
          </div>
        </div>
        <div>
          <h3 className='font-bold text-3xl mt-5 pt-5'>Menu</h3>
          <ul>
            {Object.values(menuData.menu.items).map((ele, idx) => {
              console.log(menuData);
              return (
                <li key={ele.id}>
                  <div className='flex justify-between w-[500px] p-2 bg-slate-50 my-2 shadow'>
                    <div className='flex-col p-2 w-[350px]'>
                      <h3>{ele.name}</h3>
                      <small className='opacity-50'>{ele.description}</small>
                      <br />
                      <small className="font-bold before:content-['\20B9']">
                        {ele.price / 100}
                      </small>
                    </div>
                    <div className='w-[118px] h-[100px] m-1 p-1'>
                      <img
                        src={IMG_CDN_URL + ele.cloudinaryImageId}
                        alt={ele.name}
                        className='h-full object-cover rounded-md'
                      />
                      <button className='relative -top-4 left-5 bg-white px-5 font-bold text-green-700 border-2 border-gray-200 '>
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
    </>
  ) : (
    <Shimmer />
  );
}

export default RestaurantMenu;
