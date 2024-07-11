import React, { useState } from "react";
import { Box } from "@radix-ui/themes";
import Image from "next/image";
import * as Menubar from "@radix-ui/react-menubar";

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigationItems = [
    {
      imageSrc: "./images/dashboard.svg",
      alt: "Dashboard",
      text: "Dashboard",
    },
    {
      imageSrc: "./images/calendar.svg",
      alt: "Calendar",
      text: "Calendar",
    },
    {
      imageSrc: "./images/bookmark.svg",
      alt: "Events",
      text: "Events",
    },
    {
      imageSrc: "./images/backpack.svg",
      alt: "Offers & Deals",
      text: "Offers & Deals",
    },
    {
      imageSrc: "./images/mixer-horizontal.svg",
      alt: "Settings",
      text: "Settings",
    },
  ];
  const profileItems = [
    {
      imageSrc: "./images/profile-1.svg",
      alt: "Profile",
      label: "Tourist",
      text: "The Viper Room",
    },
    {
      imageSrc: "./images/profile-2.svg",
      alt: "Profile",
      label: "Jason Isbell",
      text: "The Wiltren",
    },
    {
      imageSrc: "./images/profile-3.svg",
      alt: "Profile",
      label: "Brenn!",
      text: "The Troubadour",
    },
  ];
  return (
    <Box>
      <Box className="sidebar">
        <Box className="navigation-bar">
          <Box>
            <Box className="navbar-logo">
              <Image
                width={150}
                height={27}
                src="./images/Logo.svg"
                alt="Logo"
              />
            </Box>
            <Box className="navigation-menu-wrapper">
              <Menubar.Root className="navigation-menu">
                {navigationItems.map((item, index) => (
                  <Menubar.Menu key={index}>
                    <Menubar.Trigger>
                      <Image
                        width={16}
                        height={16}
                        src={item.imageSrc}
                        alt={item.alt}
                      />
                      <h1>{item.text}</h1>
                    </Menubar.Trigger>
                  </Menubar.Menu>
                ))}
              </Menubar.Root>
            </Box>
            <Box className="today-events">
              <Box className="todays-event-head">
                <h1>Todays Events</h1>
              </Box>
              <Menubar.Root className="today-events-profile">
                {profileItems.map((item, index) => (
                  <Menubar.Menu key={index}>
                    <Menubar.Trigger>
                      <Image
                        width={40}
                        height={40}
                        src={item.imageSrc}
                        alt={item.alt}
                      />
                      <Box className="profile-content">
                        <label>{item.label}</label>
                        <h1>{item.text}</h1>
                      </Box>
                    </Menubar.Trigger>
                  </Menubar.Menu>
                ))}
              </Menubar.Root>
            </Box>
          </Box>
          <Box className="sidebar-footer">
            <Box className={darkMode ? "dark-mode" : "light-mode"}>
              <Box
                onClick={() => {
                  document.body.className = darkMode
                    ? "dark-theme"
                    : "light-theme";
                  setDarkMode(!darkMode);
                }}>
                <span></span>
              </Box>
              <label>Dark Mode</label>
            </Box>
            <Box className="terms-policy">
              <a href="#">Terms of Use</a>
              <a href="#">Privacy Policy</a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
