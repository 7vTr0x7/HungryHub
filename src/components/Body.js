import { RestaurantCard } from "./index";
import { useState } from "react";
import restaurants from "../../utils/restaurants.json";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const newList = listOfRestaurants.filter(
              (res) => res.info.rating.aggregate_rating > 4
            );
            console.log(newList);

            setListOfRestaurants(newList);
          }}>
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
