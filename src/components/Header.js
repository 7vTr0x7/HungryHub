import { useState, useContext } from "react";
import logo from "../../utils/logo.png";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";

const Header = () => {
  const [log, setLog] = useState("LogIn");

  const { loggedInUser } = useContext(UserContext);

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
          <li className="px-4">Cart</li>
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
