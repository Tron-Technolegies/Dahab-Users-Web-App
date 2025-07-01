import React from "react";
import Alert from "@mui/material/Alert";

export default function AlertBox({ message, severity, onClose }) {
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
