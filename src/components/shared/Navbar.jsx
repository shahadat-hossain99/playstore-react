import React from "react";
import logoImg from "../../assets/logo.png";
// import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
// import MyNavLink from "./MyNavLink";
import { NavLink } from "react-router";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/apps",
      text: "Apps",
    },
    {
      path: "/installApps",
      text: "Installation",
    },
    {
      path: "/dashboard",
      text: "Dashboard",
    },
  ];

  return (
    <nav className="shadow-2xl sticky top-0 z-10 bg-gray-100">
      <div className="flex justify-between gap-4 items-center  py-3 container mx-auto">
        <NavLink to="/">
          <div className="flex justify-between items-center gap-1">
            {" "}
            <img src={logoImg} alt="" className="w-14" />
            <h6 className="font-semibold text hidden md:flex">HeroStore</h6>
          </div>
        </NavLink>
        <ul className="flex justify-between gap-3 items-center">
          {navItems.map((item, index) => (
            <MyNavLink key={index} to={item.path}>
              {item.text}
            </MyNavLink>
          ))}
          {/* !!! it was first */}

          {/* <MyNavLink to={"/"}>Home</MyNavLink>
          <MyNavLink to={"/apps"}>Apps</MyNavLink>
          <MyNavLink className={""} to={"/installApps"}>
            InstallApps
          </MyNavLink> */}
        </ul>
        <button className="hidden md:flex btn bg-linear-to-r from-[#b944c4] to-[#9514FA] text-white">
          <FaGithub />
          Contribute
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
