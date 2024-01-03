import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";

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

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://b.zmtcdn.com/data/pictures/chains/9/6507609/9b51e3f85654b9588558b2a11ece5d27_o2_featured_v2.jpg?output-format=webp"
      />
      <h3>Cheesiano pizza</h3>
      <h4>Pizza, Pasta, Momos </h4>
      <h4>4.4 stars</h4>
      <h4>20 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
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
