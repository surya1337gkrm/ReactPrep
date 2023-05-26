import { useState, useEffect } from 'react';
import axios from 'axios';
import { menuUrl, menuApiURL } from '../config';
const useRestaurant = (menuId) => {
  const [menuData, setMenuData] = useState(null);
  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const { data } = await axios.get(menuUrl + menuId);
    setMenuData(data?.data);
  }
  return menuData;
};
export default useRestaurant;
