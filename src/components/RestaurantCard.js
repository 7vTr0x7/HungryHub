import { IMG_URL } from "../../utils/url";
const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, avgRating, costForTwo, sla, cuisines } =
    resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={IMG_URL + cloudinaryImageId}
      />
      <h2>{name}</h2>
      <h4>{` Cuisines : ${cuisines}`}</h4>
      <h4>{` price : ${costForTwo}`}</h4>
      <h4>{` deliveryTime : ${sla.slaString}`}</h4>

      <h4>{` Rating : ${avgRating}`}</h4>
    </div>
  );
};

export default RestaurantCard;
