import React from "react";
import { Label } from "@radix-ui/react-label";

import {Box} from "@radix-ui/react-box";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-sidebar-btn">
        <button className="sidebar-btn">
          <img src="./images/chevron-left.svg" alt="" />
        </button>
        <button className="navbar-btn">
          <img src="./images/hamburger-menu.svg" alt="" />
        </button>
      </div>
      <div className="navbar-menu">
        <div className="search-box">
          <div className="search-icon">
            <img src="./images/magnifying-glass.svg" alt="" />
          </div>
          <div className="search-input">
            <Label htmlFor="search" className="search-label">
            </Label>
              <input
                id="search"
                type="search"
                placeholder="Search ShowOps"
                className="search-field"
              />
          </div>
          <div className="search-button">
            <button>
              <img src="./images/ShiftTab.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="profile-notification">
          <ul>
            <li>
              <img src="./images/bell.svg" alt="" />
            </li>
            <li>
              <img src="./images/profile-4.svg" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
