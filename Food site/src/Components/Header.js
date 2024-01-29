import { useState } from "react";
import { logo } from "../utilis/constant";
import { Link } from "react-router-dom";
import Usestatus from "../utilis/Usestatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const status = Usestatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo " src={logo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Grocery">Grocery </Link>
          </li>

          <li>Online status : {status ? "✔" : "🔴"}</li>
          <li>
            <button
              className="login"
              onClick={() => {
                btnName === "Login"
                  ? setbtnName("LogOut")
                  : setbtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
