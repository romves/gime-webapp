"use client";

import React from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  React.useEffect(() => {
    const mouseMove = (e: any) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="absolute border border-red-600 w-10 h-10 rounded-full z-50"
      animate={{ x: position.x, y: position.y }}
    />
  );
};

export default Cursor;
