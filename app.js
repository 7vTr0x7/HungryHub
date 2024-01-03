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



const AppLayout = () => {
  return (
    <div className="app">
      <Header />

    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
