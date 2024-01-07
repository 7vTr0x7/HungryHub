import { useState } from "react";
import logo from "../../utils/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [log, setLog] = useState("LogIn");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link className="link-style" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link-style" to="/about">
              About US
            </Link>
          </li>
          <li>
            <Link className="link-style" to="/contact">
              Contact US
            </Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              log === "LogIn" ? setLog("LogOut") : setLog("LogIn");
            }}>
            {log}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
