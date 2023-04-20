import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import { mainUrl, mainUrl2 } from '../config';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Shimmer from './shimmer';
import { filterData } from '../utils/helper';

const Body = () => {
  const [searchText, setSearchText] = useState('');
  // const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const getData = async () => {
    try {
      const { data } = await axios.get(`${mainUrl}?offset=${offset}`);
      setAllRestaurants((prevData) => [
        ...prevData,
        ...data?.data?.cards.map((res) => res.data),
      ]);
      setFilteredRestaurants((prevData) => [
        ...prevData,
        ...data?.data?.cards.map((res) => res.data),
      ]),
        setTotal(data?.data?.totalSize);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getData();
  }, [offset]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight &&
      total - offset >= 0
    ) {
      setOffset((prevOffset) => {
        if (prevOffset === 0) return 15;
        return prevOffset + 16;
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  if (filteredRestaurants.length === 0 || allRestaurants.length === 0)
    return <Shimmer />;

  return (
    <>
      <div className='flex justify-center p-2 bg-white my-2 w-full'>
        <input
          type='search'
          name='search'
          placeholder='Search'
          className='rounded-md bg-gray-200 p-1 focus:outline-none'
          value={searchText}
          onChange={(e) => handleChange(e)}
          data-testid='searchInput'
        />
        <button
          className='px-2 mx-1 bg-orange-500 text-white rounded hover:bg-green-800'
          onClick={() => {
            setFilteredRestaurants(filterData(searchText, allRestaurants));
            // setSearchText('');
          }}
          data-testid='searchBtn'>
          Search
        </button>
      </div>
      {total !== 0 ? (
        <>
          <h1 className='font-bold text-2xl px-5 mx-5' data-testid='totalRes'>
            {total} Restaurants
          </h1>
          <hr className='border-gray-400 w-auto mx-5' />
        </>
      ) : null}
      {allRestaurants.length !== 0 ? (
        <div className='flex flex-wrap gap-5 pl-5 m-5' data-testid='resList'>
          {filteredRestaurants.length !== 0 ? (
            //add link to each card with path to slug and also pass id to card as prop to send req to the restaurant menu endpoint
            filteredRestaurants.map((restaurant, idx) => (
              <Link
                to={`/restaurant/${restaurant.data.id}`}
                key={restaurant.data.id + idx}>
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
