import React from "react";
import { Link } from "react-router-dom";

import logo from "../img/logo.png";

const Logo = () => {
  return (
    <Link style={{ color: "black", textDecoration: "none" }} to="/">
      {" "}
      <div className="logo">
        <img src={logo} />
        <h1>Edge LMS</h1>
      </div>
    </Link>
  );
};

export default Logo;
