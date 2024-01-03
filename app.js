import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";

import restaurants from "./utils/restaurants.json";

/*


# Header
  - Logo
  - Nav Items
# Body
  - Search
  - RestaurantContainer
    - RestaurantCard
      -img
      - name of res,star rating , cuisines, delivery time 
# Footer
  - Copyrights
  - Links
  - Address
  - Contact

*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, image, cft, rating } = resData?.info;
  const { deliveryTime } = resData?.order;

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
      <h5>{` price : ${cft.text}`}</h5>
      <h5>{` Rating : ${rating.rating_text}`}</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
