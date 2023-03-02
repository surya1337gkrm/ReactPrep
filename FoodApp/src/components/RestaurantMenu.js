import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Shimmer from './shimmer';
import { IMG_CDN_URL } from '../config';
import useRestaurant from '../../utils/useRestaurant';

function RestaurantMenu() {
  const params = useParams();
  // const [menuData, setMenuData] = useState(null);
  const menuData = useRestaurant(params.menuId);

  //early-return
  return menuData ? (
    <>
      <div className='menu'>
        <div>
          <h1>{menuData.name}</h1>
          <img
            src={IMG_CDN_URL + menuData.cloudinaryImageId}
            alt={menuData.name}
          />
          <p>
            {menuData.area}, {menuData.city}
          </p>
          <p>{menuData.avgRatingString}</p>
        </div>
        <div>
          <h3>Menu</h3>
          <ul>
            {Object.values(menuData.menu.items).map((ele, idx) => {
              return <li key={ele.id}>{ele.name}</li>;
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
