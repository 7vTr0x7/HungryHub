import { useState, useEffect } from "react";

import { RES_URL } from "./url";
export const useResData = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_URL);
    const json = await data.json();

    const extractedData = await json?.data?.success?.cards?.[1]?.card?.card
      ?.gridElements?.infoWithStyle?.restaurants;

    await setListOfRestaurants(extractedData);
    await setFilteredListOfRestaurants(extractedData);
  };



  return [listOfRestaurants, filteredListOfRestaurants];
};
