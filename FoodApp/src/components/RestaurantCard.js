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
      <h4>{avgRating}</h4>
      <small>{lastMileTravelString}</small>
    </div>
  );
};
export default RestaurantCard;
