import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../Assets/logoName.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeIcon, setActiveIcon] = useState(
    getActiveIcon(location.pathname)
  );

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  const navigateToHomepage = () => {
    navigate("/");
    setActiveIcon("home"); // Set the active icon to 'home' when navigating to the homepage
  };

  // Function to determine the active icon based on the current path
  function getActiveIcon(path) {
    if (path === "/") {
      return "home";
    } else if (path === "/notifications") {
      return "notifications";
    } else if (path === "/bookmark") {
      return "turnedIn";
    } else if (path === "/person-details") {
      return "person";
    }

    return "home"; // Default to home if no match
  }

  return (
    <div className="navbar">
      <Link to="/" className="logo-wrapper" onClick={navigateToHomepage}>
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <div className="navlink-wrapper">
        <Link
          to="/"
          className="icon-wrapper"
          onClick={() => handleIconClick("home")}
        >
          <HomeRoundedIcon
            className={`icon ${activeIcon === "home" ? "active" : ""}`}
            style={{ color: activeIcon === "home" ? "#F05A22" : "#F9DDCF" }}
          />
          {activeIcon === "home" && <span className="active-dot">.</span>}
        </Link>

        <Link
          to="/notifications"
          className="icon-wrapper"
          onClick={() => handleIconClick("notifications")}
        >
          <NotificationsIcon
            className={`icon ${activeIcon === "notifications" ? "active" : ""}`}
            style={{
              color: activeIcon === "notifications" ? "#F05A22" : "#F9DDCF",
            }}
          />
          {activeIcon === "notifications" && (
            <span className="active-dot">.</span>
          )}
        </Link>

        <Link
          to="/bookmark"
          className="icon-wrapper"
          onClick={() => handleIconClick("turnedIn")}
        >
          <TurnedInIcon
            className={`icon ${activeIcon === "turnedIn" ? "active" : ""}`}
            style={{ color: activeIcon === "turnedIn" ? "#F05A22" : "#F9DDCF" }}
          />
          {activeIcon === "turnedIn" && <span className="active-dot">.</span>}
        </Link>

        <Link
          to="/person-details"
          className="icon-wrapper"
          onClick={() => handleIconClick("person")}
        >
          <PersonIcon
            className={`icon ${activeIcon === "person" ? "active" : ""}`}
            style={{ color: activeIcon === "person" ? "#F05A22" : "#F9DDCF" }}
          />
          {activeIcon === "person" && <span className="active-dot">.</span>}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
