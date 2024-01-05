import { RestaurantCard, Shimmer } from "./index";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );

  const [searchText, setSearchText] = useState("");
  // on each key press in search its updating state variable and re-rendering component
  console.log("re-rendered");
  // whenever state variable updates react trigger reconciliation cycle (re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/api/seo/getListing?lat=18.621055599465002&lng=73.8306423049214"
    );
    const jsonData = await data.json();

    const extractedData =
      jsonData?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(extractedData);
    setFilteredListOfRestaurants(extractedData);
  };

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
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
