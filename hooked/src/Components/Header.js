import { logo } from "../utilis/constant";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us </li>
          <li>Ratings</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
