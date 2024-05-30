//filter function
export const filterData = (searchtext, restaurants) => {
  
  return restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchtext.toLowerCase())
  );
};
