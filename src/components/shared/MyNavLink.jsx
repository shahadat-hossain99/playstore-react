import React from "react";
import { NavLink } from "react-router";

const MyNavLink = ({ to, children, className }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `font-semibold ${className} ${isActive ? "btn btn-primary bg-purple-500 border-none" : ""}`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
