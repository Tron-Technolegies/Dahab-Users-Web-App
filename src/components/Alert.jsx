import React, { useEffect } from "react";
import Alert from "@mui/material/Alert";

export default function AlertBox({ message, severity, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Trigger close after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup if component unmounts earlier
  }, [onClose]);
  return (
    <Alert
      variant="filled"
      severity={severity}
      className="absolute top-2 right-2"
      onClose={onClose}
    >
      {message}
    </Alert>
  );
}
