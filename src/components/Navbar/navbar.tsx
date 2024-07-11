import React from "react";
import { Label } from "@radix-ui/react-label";

import { Box, Button } from "@radix-ui/themes";
import Image from "next/image";
import * as Menubar from "@radix-ui/react-menubar";
const Navbar = () => {
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
        <Box className="profile-notification">
          <Menubar.Root>
            <Menubar.Menu>
              <Menubar.Trigger>
                <Image src="./images/bell.svg" alt="" width={18} height={18} />
              </Menubar.Trigger>
            </Menubar.Menu>
            <Menubar.Menu>
              <Menubar.Trigger>
                <Image
                  src="./images/profile-4.svg"
                  alt=""
                  width={40}
                  height={40}
                />
              </Menubar.Trigger>
            </Menubar.Menu>
          </Menubar.Root>
        </Box>
      </Box>
    </Box>
  );
};
export default Navbar;
