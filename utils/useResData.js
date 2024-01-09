import { useState, useEffect } from "react";

import { RES_URL } from "./url";
export const useResData = () => {
  const [jsonData, setJsonData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_URL);
    const json = await data.json();

    setJsonData(json);
  };

  return jsonData;
};
