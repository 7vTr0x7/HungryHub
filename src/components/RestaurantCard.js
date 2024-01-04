const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, image, cft, rating } = resData?.info;
  const { deliveryTime } = resData?.order;
  const { rating_text } = rating;
  const { text } = cft;

  const cuisine = resData.info.cuisine;
  let cuisines = [];

  for (let i of cuisine) {
    cuisines.push(i.name);
  }

  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={image.url} />
      <h3>{name}</h3>

      <h5>{` Cuisines : ${cuisines.join(",")}`}</h5>
      <h5>{` Delivery Time : ${deliveryTime}`}</h5>
      <h5>{` price : ${text}`}</h5>
      <h5>{` Rating : ${rating_text}`}</h5>
    </div>
  );
};

export default RestaurantCard;
