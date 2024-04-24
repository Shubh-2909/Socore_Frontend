import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { sidebarLinks } from "../constants";
import { BiLogOut } from "react-icons/bi";

const LeftSidebar = () => {
  const { pathname } = useLocation();
  const user = {
    name: "Shubh Shubhanjal",
    username: "Shubh4100",
  };
  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
          <img src="/assets/logo.svg" alt="logo" width={170} height={36} />
        </Link>
        <Link to={`profile/${user.id}`} className="flex gap-3 items-center">
          <img
            src={user.imageUrl || "/assets/profile.jpg"}
            alt="profile"
            className="h-14 w-14 rounded-full"
          />
          <div className="flex flex-col">
            <p>{user.name}</p>
            <p className="small-regular text-light-3">@{user.username}</p>
          </div>
        </Link>

        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.route;
            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive && "bg-primary-500"
                }`}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4"
                >
                  <img
                    src={link.imageUrl}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-4" onClick={() => {
            console.log("Signed Out");
          }}>
        <BiLogOut
          size={30}
          
        />
        <p className="small-medium lg:base-medium mt-1">Logout</p>
      </div>
    </nav>
  );
};

export default LeftSidebar;
