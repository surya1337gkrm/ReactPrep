//filter function
export const filterData = (searchtext, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchtext.toLowerCase())
  );
};
