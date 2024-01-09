import { RestaurantCard, Shimmer } from "./index";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { useOnlineStatus } from "../../utils/useOnlineStatus";
import { useResData } from "../../utils/useResData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

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
      <div className="filter">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
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
            className="search-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurants(filteredList);
            }}>
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const newList = filteredListOfRestaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            setFilteredListOfRestaurants(newList);
          }}>
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRestaurants.map((res) => (
          <Link
            key={res.info.id}
            to={"/restaurants/" + res.info.id}
            className="link-style">
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
