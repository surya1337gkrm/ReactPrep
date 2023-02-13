import { IMG_CDN_URL } from '../config';
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  lastMileTravelString,
}) => {
  return (
    <div className='card'>
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <h2>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{avgRating}</h4>
      <small>{lastMileTravelString}</small>
    </div>
  );
};
export default RestaurantCard;
