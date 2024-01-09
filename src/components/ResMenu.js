import { Shimmer } from "./index";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../../utils/useRestaurantMenu";

const ResMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

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
          {item?.card?.info?.name} - RS.{item?.card?.info?.defaultPrice / 100}
        </p>
      ))}
    </div>
  );
};

export default ResMenu;
