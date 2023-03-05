import { IMG_CDN_URL } from '../config';
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  lastMileTravelString,
}) => {
  return (
    <div className='w-[250px] p-2 m-2 shadow-lg rounded h-full bg-white'>
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <h2 className='font-bold'>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <p className='flex bg-green-500 w-14 px-2 mt-1 text-white justify-center items-center'>
        <span className='pr-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='12'
            height='12'
            fill='white'
            class='bi bi-star-fill'
            viewBox='0 0 16 16'>
            <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
          </svg>
        </span>
        {avgRating}
      </p>
      <small>{lastMileTravelString}</small>
    </div>
  );
};
export default RestaurantCard;
