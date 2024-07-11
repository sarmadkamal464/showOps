import React, { useState } from 'react';
const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <div className="sidebar">
        <div className="navigation-bar">
          <div>
            <div className="navbar-logo">
              <img src="./images/Logo.svg" alt="Logo" />
            </div>
            <div className="navigation-menu-wrapper">
              <ul className="navigation-menu">
                <li className="active">
                  <a href="#">
                    <img src="./images/dashboard.svg" alt="Dashboard" />
                    <h1>Dashboard</h1>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./images/calendar.svg" alt="Calendar" />
                    <h1>Calendar</h1>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./images/bookmark.svg" alt="Events" />
                    <h1>Events</h1>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./images/backpack.svg" alt="Offers & Deals" />
                    <h1>Offers & Deals</h1>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./images/mixer-horizontal.svg" alt="Settings" />
                    <h1>Settings</h1>
                  </a>
                </li>
              </ul>
            </div>
            <div className="today-events">
              <div className="todays-event-head">
                <h1>Todays Events</h1>
              </div>
              <ul className="today-events-profile">
                <li>
                  <img src="./images/profile-1.svg" alt="Profile" />
                  <div className="profile-content">
                    <label>Tourist</label>
                    <h1>The Viper Room</h1>
                  </div>
                </li>
                <li>
                  <img src="./images/profile-2.svg" alt="Profile" />
                  <div className="profile-content">
                    <label>Jason Isbell</label>
                    <h1>The Wiltren</h1>
                  </div>
                </li>
                <li>
                  <img src="./images/profile-3.svg" alt="Profile" />
                  <div className="profile-content">
                    <label>Brenn!</label>
                    <h1>The Troubadour</h1>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-footer">
            <div className={darkMode? "dark-mode": "light-mode"}>
              <div onClick={()=>{
                document.body.className = darkMode ? 'dark-theme' : 'light-theme';
                setDarkMode(!darkMode)}
            }>
                <span></span>
              </div>
              <label>Dark Mode</label>
            </div>
            <div className="terms-policy">
              <a href="#">Terms of Use</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
