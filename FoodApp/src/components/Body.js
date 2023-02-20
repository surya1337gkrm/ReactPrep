import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import { restaurantList } from '../config';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Shimmer from './shimmer';

//filter function
const filterData = (searchtext, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchtext.toLowerCase())
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState('');
  // const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const getData = async () => {
    try {
      const { data } = await axios.get(
        // 'https://mockapi-swiggy.onrender.com/api'
        'https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING'
      );
      setAllRestaurants(data?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(data?.data?.cards[2]?.data?.data?.cards);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className='search-container'>
        <input
          type='text'
          name='search'
          placeholder='Search'
          value={searchText}
          className='input-container'
          onChange={(e) => handleChange(e)}
        />
        <button
          className='search-btn'
          onClick={() => {
            setFilteredRestaurants(filterData(searchText, allRestaurants));
            // setSearchText('');
          }}>
          Search
        </button>
      </div>
      {allRestaurants.length !== 0 ? (
        <div className='restaurant-list'>
          {filteredRestaurants.length !== 0 ? (
            //add link to each card with path to slug and also pass id to card as prop to send req to the restaurant menu endpoint
            filteredRestaurants.map((restaurant) => (
              <Link
                to={`/restaurant/${restaurant.data.id}`}
                key={restaurant.data.id}>
                <RestaurantCard {...restaurant.data} />
              </Link>
            ))
          ) : (
            <>No Restaurants Found!</>
          )}
        </div>
      ) : (
        <Shimmer />
      )}
    </>
  );
};
export default Body;
