import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Shimmer from './shimmer';
import { IMG_CDN_URL } from '../config';

function RestaurantMenu() {
  const params = useParams();
  const [menuData, setMenuData] = useState(null);
  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const { data } = await axios.get(
      'https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/v4/full?lat=12.9715987&lng=77.5945627&menuId=' +
        params.menuId
    );
    console.log(data.data);
    setMenuData(data?.data);
  }
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
