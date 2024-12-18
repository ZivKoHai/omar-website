"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TypoH1({ children }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center end"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(10% 0 0 0)", "inset(100% 0 0 0)"]
  );

  return (
    <motion.h1
      ref={ref}
      style={{ clipPath }}
      className="text-3xl md:text-6xl font-bold heading-reveal"
    >
      {children}
    </motion.h1>
  );
}
