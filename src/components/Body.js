import { RestaurantCard, Shimmer } from "./index";
import { useState, useEffect } from "react";
import { withDiscountLabel } from "./RestaurantCard";

import { Link } from "react-router-dom";

import { useOnlineStatus } from "../../utils/useOnlineStatus";
import { useResData } from "../../utils/useResData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

  const DiscountItems = withDiscountLabel(RestaurantCard);

  const jsonData = useResData();

  useEffect(() => {
    if (jsonData) {
      const extractedData =
        jsonData?.data?.success?.cards?.[1]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants;

      setListOfRestaurants(extractedData);

      setFilteredListOfRestaurants(extractedData);
    }
  }, [jsonData]);

  const status = useOnlineStatus();

  if (status === false) return <h1>no internet</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search-box m-4 p-4">
          <input
            type="text"
            className="border border-solid  border-black rounded-lg"
            value={searchText} // on each key press in search its updating state variable and re-rendering component whenever state variable updates react trigger reconciliation cycle (re-renders the component)
            onChange={(e) => {
              setSearchText(e.target.value);
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurants(filteredList);
            }}
          />
          <button
            className="search-btn px-4 py-2 m-4 bg-green-100 rounded-xl"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurants(filteredList);
            }}>
            search
          </button>
        </div>
        <div className="search-box  m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-xl"
            onClick={() => {
              const newList = filteredListOfRestaurants.filter(
                (res) => res.info.avgRating >= 4
              );
              setFilteredListOfRestaurants(newList);
            }}>
            Top Rated
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredListOfRestaurants.map((res) => (
          <Link
            key={res.info.id}
            to={"/restaurants/" + res.info.id}
            className="link-style">
            {res.info?.aggregatedDiscountInfoV3?.header ? (
              <DiscountItems resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
