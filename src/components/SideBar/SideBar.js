import React from "react";
import { GrPower } from "react-icons/gr";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import UserBadge from "../UserBadge/UserBadge";
import "./SideBar.css";

export default function SideBar() {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    localStorage.removeItem("login-info");
  };
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <Link to="/" rel="noopener noreferrer">
          <IoLogoAppleAppstore />
        </Link>
        <GrPower className="logout" onClick={handleLogout} />
      </div>
      <div className="sidebar">
        <UserBadge />
        <div className="analytics-btn-wrapper">
          {location.pathname === "/" && (
            <Link to="/analytics" rel="noopener noreferrer">
              <button type="button" className="analytics-btn">
                Analytics
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
