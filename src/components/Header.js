import { useState, useContext } from "react";
import logo from "../../utils/logo.png";
import cartIcon from "../../utils/cart-icon.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserContext from "../../utils/UserContext";

const Header = () => {
  const [log, setLog] = useState("LogIn");

  const { loggedInUser } = useContext(UserContext);

  //subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between shadow-lg m-2 ">
      <div className="logo-container">
        <img className="h-24" src={logo} />
      </div>
      <div className="nav-items font-bold">
        <ul className="flex m-4 p-4  items-center">
          <li className="px-4">
            <Link className="link-style" to="/">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link className="link-style" to="/about">
              About US
            </Link>
          </li>
          <li className="px-4">
            <Link className="link-style" to="/contact">
              Contact US
            </Link>
          </li>
          <li className="px-4">
            <Link className="link-style" to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="px-4">
            <Link className="link-style" to="/cart">
              <span className="absolute text-xl pl-8">{cartItems.length}</span>
              <img src={cartIcon} alt="cart-icon" className="  h-10" />
            </Link>
          </li>
          <button
            className="px-4"
            onClick={() => {
              log === "LogIn" ? setLog("LogOut") : setLog("LogIn");
            }}>
            {log}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
