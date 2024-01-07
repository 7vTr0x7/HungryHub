import { useState, useEffect } from "react";
import { Shimmer } from "./index";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../../utils/url";
const ResMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);

    const json = await data.json();

    setResInfo(json.data);
    console.log(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  // Check if info is defined before destructuring
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[0]?.card?.card?.info;

  const items =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards;
  return (
    <div className="menu">
      <h1>{name}</h1>

      <h3>
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      {items.map((item) => (
        <p key={item?.card?.info?.id}>
          {item?.card?.info?.name} - RS.{item?.card?.info?.price / 100}
        </p>
      ))}
    </div>
  );
};

export default ResMenu;
