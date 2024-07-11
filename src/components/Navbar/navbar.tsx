import React from "react";
import { Label } from "@radix-ui/react-label";
import { Box, Button } from "@radix-ui/themes";
import Image from "next/image";
import * as Menubar from "@radix-ui/react-menubar";

const Navbar = () => {
  // Define an array of menu items
  const menuItems = [
    {
      imageSrc: "./images/bell.svg",
      alt: "Notification Bell",
      width: 18,
      height: 18
    },
    {
      imageSrc: "./images/profile-4.svg",
      alt: "Profile Avatar",
      width: 40,
      height: 40
    }
  ];

  return (
    <Box className="navbar">
      <Box className="navbar-sidebar-btn">
        <Button className="sidebar-btn">
          <Image
            src="./images/chevron-left.svg"
            alt=""
            width={18}
            height={18}
          />
        </Button>
        <Button className="navbar-btn">
          <Image
            src="./images/hamburger-menu.svg"
            alt=""
            width={18}
            height={18}
          />
        </Button>
      </Box>
      <Box className="navbar-menu">
        {/* Render search box */}
        <Box className="search-box">
          <Box className="search-icon">
            <Image
              src="./images/magnifying-glass.svg"
              alt=""
              width={16}
              height={16}
            />
          </Box>
          <Box className="search-input">
            <Label htmlFor="search" className="search-label"></Label>
            <input
              id="search"
              type="search"
              placeholder="Search ShowOps"
              className="search-field"
            />
          </Box>
          <Box className="search-button">
            <Button>
              <Image
                src="./images/ShiftTab.svg"
                alt=""
                width={27}
                height={24}
              />
            </Button>
          </Box>
        </Box>

        {/* Render profile and notification menus */}
        <Box className="profile-notification">
          <Menubar.Root>
            {menuItems.map((item, index) => (
              <Menubar.Menu key={index}>
                <Menubar.Trigger>
                  <Image
                    src={item.imageSrc}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                  />
                </Menubar.Trigger>
              </Menubar.Menu>
            ))}
          </Menubar.Root>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
