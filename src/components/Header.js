import { useState } from "react";
import logo from "../../utils/logo.png";
const Header = () => {
  const [log, setLog] = useState("LogIn");

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
