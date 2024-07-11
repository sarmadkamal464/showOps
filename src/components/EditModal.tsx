import React, { useEffect } from 'react';
import { Box } from "@radix-ui/themes";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onEdit: () => void;
  eventDate: string;
};

const EditModal: React.FC<ModalProps> = ({ isOpen, onClose, onEdit, eventDate }) => {
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
    <Box className="modal-overlay">
      <Box className="modal-content">
        <h2>Event Created</h2>
        <p>Event has been created on {eventDate}</p>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onClose}>Close</button>
      </Box>
    </Box>
  );
};

export default EditModal;
