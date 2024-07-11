import React, { useEffect } from "react";
import { Box, Button } from "@radix-ui/themes";
import Image from "next/image";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onEdit: () => void;
  eventDate: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onEdit, eventDate }) => {
    useEffect(() => {
        if (isOpen) {
          const timer = setTimeout(() => {
            onClose();
          }, 10000);
    
          return () => clearTimeout(timer);
        }
      }, [isOpen, onClose]);
  if (!isOpen) return null;

  return (
<Box className="EventModalWrapper">
<Box className="EventModal">
    <h1>Event created on 10 july 2024</h1>
    <Button onClick={onEdit}>Edit event</Button>
    <Image onClick={onClose} src="./images/cross-2.svg" alt="Event" width={200} height={200} />
</Box>
</Box>
  );
};

export default Modal;

