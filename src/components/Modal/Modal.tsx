import React, { useState } from "react";
import { Box, Button, Link } from "@radix-ui/themes";
import Image from "next/image";
import * as Menubar from "@radix-ui/react-menubar";
import SwitchDemo from "../Switch/switch";
import { navigationItems, profileItems } from "../../constants/index.js";

const Modal = () => {
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <Box className="EventModalWrapper">
        <Box className="EventModal">
            <h1>Event created on March 14, 2025!</h1>
            <Button>Edit event</Button>
            <Image src="./images/cross-2.svg" alt="Event" width={200} height={200} />
        </Box>
    </Box>
  );
};

export default Modal;
