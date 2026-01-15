import "./App.css";
import { SiFramer } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span className="logo-icon">
          <SiFramer />
        </span>
        <span className="logo-text">Finpay</span>
      </div>
      <ul className="nav-list">
        <li>Products</li>
        <li>Customers</li>
        <li>Pricing</li>
        <li>Learn</li>
      </ul>

      <div className="nav-buttons">
        <button className="btn login-btn">Login</button>
        <button className="btn signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
