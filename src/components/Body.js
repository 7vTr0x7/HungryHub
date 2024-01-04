import { RestaurantCard } from "./index";
import restaurants from "../../utils/restaurants.json";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("yoo");
          }}>
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
