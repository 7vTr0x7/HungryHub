import { IMG_URL } from "../../utils/url";
const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, avgRating, costForTwo, sla, cuisines } =
    resData?.info;

  return (
    <div className="m-4 p-4  w-[300] rounded-lg hover:bg-gray-100">
      <img
        className="rounded-lg h-60 size-full"
        alt="res-logo"
        src={IMG_URL + cloudinaryImageId}
      />
      <h2 className="font-bold py-3 text-lg">{name}</h2>

      <h4>{` Cuisines : ${
        cuisines.length > 2 ? `${cuisines.slice(0, 2)} . . .` : cuisines
      }`}</h4>
      <h4>{` price : ${costForTwo}`}</h4>
      <h4>{` deliveryTime : ${sla.slaString}`}</h4>

      <h4>{` Rating : ${avgRating}`}</h4>
    </div>
  );
};

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;

    const discountUpTo = `${resData.info?.aggregatedDiscountInfoV3?.header} ${resData.info?.aggregatedDiscountInfoV3?.subHeader}`;

    return (
      <div>
        <label className="relative p-2 top-64 left-8 text-white text-2xl font-extrabold  ">
          {discountUpTo}
        </label>

        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
