import { Shimmer } from "./index";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const ResMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const close = () => {
    setShowIndex(null);
  };

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  // Check if info is defined before destructuring
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[0]?.card?.card?.info;

  const categories =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center ">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>

      <h3 className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          close={() => close()}
        />
      ))}
    </div>
  );
};

export default ResMenu;
