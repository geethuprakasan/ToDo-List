import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useHistory } from "react-router";

import "./Navbar.css";

export default function Navbar({ pageName }) {
  const history = useHistory();

  return (
    <div className="top-nav">
      <div
        style={{ marginRight: "15px", cursor: "pointer" }}
        onClick={() => {
          history.goBack();
        }}
      >
        <AiOutlineArrowLeft />
      </div>
      <div> {pageName} </div>
    </div>
  );
}
