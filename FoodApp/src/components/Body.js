import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { restaurantList } from '../config';

//filter function
const filterData = (searchtext) => {
  return restaurantList.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchtext.toLowerCase())
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [restaurants, setRestaurants] = useState(restaurantList);
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
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
            setRestaurants(filterData(searchText));
            // setSearchText('');
          }}>
          Search
        </button>
      </div>
      <div className='restaurant-list'>
        {/* <RestaurantCard {...restaurantList[0].data} />
        <RestaurantCard {...restaurantList[1].data} />
        <RestaurantCard {...restaurantList[2].data} />
        <RestaurantCard {...restaurantList[3].data} /> */}
        {/* instead of writing same code multiple times, we can use map to iterate through the data */}
        {restaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
        ))}
      </div>
    </>
  );
};
export default Body;
