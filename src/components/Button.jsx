import { motion } from "framer-motion";
import React from "react";

export default function Button({ name, styles, clickFunction, disabled }) {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1, backgroundColor: "#7decda" }} // Change color on hover
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }} // Smooth animation
      className={`px-4 py-2 text-white rounded-md disabled:cursor-not-allowed ${styles}`}
      onClick={clickFunction}
      disabled={disabled}
    >
      {name}
    </motion.button>
  );
}
