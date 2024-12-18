"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ListGallery({ images }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center end"],
  });

  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    ["translateY(0px)", "translateY(100px)"]
  );

  return (
    <div className="list-gallery" ref={ref}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          loading="lazy"
          fill
          className="object-cover animate-scroll-based-motion-animation"
        />
      ))}
    </div>
  );
}
