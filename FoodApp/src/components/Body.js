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
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const getData = async () => {
    try {
      setShow(true);
      const { data } = await axios.get(`${mainUrl}?offset=${offset}`);
      
      setAllRestaurants((prevData) => [
        ...prevData,
        ...data?.data?.cards.flatMap((res) => (res?.card?.card?.gridElements?.infoWithStyle?.restaurants)!==undefined ? res?.card?.card?.gridElements?.infoWithStyle?.restaurants:[]),
      ]);

      setFilteredRestaurants((prevData) => [
        ...prevData,
        ...data?.data?.cards.flatMap((res) => (res?.card?.card?.gridElements?.infoWithStyle?.restaurants)!==undefined ? res?.card?.card?.gridElements?.infoWithStyle?.restaurants:[]),
      ])

      setTotal(data?.data?.totalSize);
      setShow(false);
    } catch (e) {
      console.log(e);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setOffset((prevOffset) => {
        if (prevOffset === 0) return 15;
        return prevOffset + 16;
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log(total, offset);
    if (total > offset + 16 || total===0) {
      getData();
    }
  }, [offset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (filteredRestaurants.length === 0 || allRestaurants.length === 0)
    return <Shimmer />;

  let restaurantCards;

  if (show) {
    let cards = filteredRestaurants.map((restaurant, idx) => (
      <Link
        to={`/restaurant/${restaurant.info.id}`}
        key={restaurant.info.id + idx}>
        <RestaurantCard {...restaurant.info} />
      </Link>
    ));
    let shimmerCards = Array(10)
      .fill('')
      .map((el, idx) => (
        <div
          key={idx}
          className='w-[250px] p-2 m-2 shadow-lg rounded bg-white hover:border-2 border-gray-300 '>
          <div className='m-2 p-5 w-[220px] h-[150px] bg-gray-200 shadow-md rounded animate-pulse'></div>
          <div className='mt-5 ml-2 p-1 w-[180px] h-0 bg-gray-200 animate-pulse'></div>
          <div className='mt-2 ml-2 p-1 w-[150px] h-0 bg-gray-200 animate-pulse'></div>
          <div className='mt-2 ml-2 mb-5 p-1 w-[120px] h-0 bg-gray-200 animate-pulse'></div>
        </div>
      ));
    restaurantCards = [...cards, ...shimmerCards];
  } else {
    restaurantCards = filteredRestaurants.map((restaurant, idx) => {
      return ( <Link
        to={`/restaurant/${restaurant.info.id}`}
        key={restaurant.info.id + idx}>
        <RestaurantCard {...restaurant.info} />
      </Link>
    )})
  }

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
            restaurantCards
          ) : (
            <>No Restaurants Found!</>
          )}
          {show ? <Shimmer /> : null}
        </div>
      ) : (
        <Shimmer />
      )}
    </>
  );
};
export default Body;
