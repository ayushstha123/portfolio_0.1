"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeUpText = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false});

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0}}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{delay:0.4, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default FadeUpText;
