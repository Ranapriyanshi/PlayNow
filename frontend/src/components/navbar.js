import React, { useLocation, useNavigate } from "react-router-dom";
import profile from "../images/profile.png";

const Navbar = () => {
  const location = useLocation();
  const googleUser = location.state;

  const logout = () => {
    navigate("/", { state: null });
  }

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div className="nav">
      <h1>DemoHome</h1>
      <div className="links">
        <ul className="link">
          <li>
            <a href="/">How it Works</a>
          </li>
          <li>
            <a href="/">Custom Event</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
        </ul>
      </div>
      {!googleUser && <button onClick={handleClick}>Login</button>}

      {googleUser && (
        <div className="prof">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img style={{ width: "45px" }} src={profile} alt="" />
            Hey, {googleUser.name}
          </div>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
