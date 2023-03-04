import { useState, useEffect } from 'react';
import axios from 'axios';
import { menuUrl } from '../config';
const useRestaurant = (menuId) => {
  const [menuData, setMenuData] = useState(null);
  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const { data } = await axios.get(menuUrl + menuId);
    console.log(data?.data);
    setMenuData(data?.data);
  }
  return menuData;
};
export default useRestaurant;
