import { IMG_URL } from "../../utils/url";
const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, avgRating, costForTwo, sla, cuisines } =
    resData?.info;

  return (
    <div className="m-4 p-4  w-[300] bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        className="rounded-lg h-60 size-full"
        alt="res-logo"
        src={IMG_URL + cloudinaryImageId}
      />
      <h2 className="font-bold py-3 text-lg">{name}</h2>
      <h4>{` Cuisines : ${cuisines}`}</h4>
      <h4>{` price : ${costForTwo}`}</h4>
      <h4>{` deliveryTime : ${sla.slaString}`}</h4>

      <h4>{` Rating : ${avgRating}`}</h4>
    </div>
  );
};

export default RestaurantCard;
