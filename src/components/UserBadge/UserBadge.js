import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import "./UserBadge.css";

export default function UserBadge() {
  return (
    <div className="user-badge">
      <div className="user">
        <FaUserGraduate />
      </div>
      <div>
        <div>Jonas Khanwald</div>
        <div className="user-badge-email">jonas@todo.com</div>
      </div>
    </div>
  );
}
