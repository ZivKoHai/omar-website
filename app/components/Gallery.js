"use client";

import { useState } from "react";
import TypoH2 from "./ui/TypoH2";
import Image from "next/image";

const images = Array.from({ length: 44 }).map((_, index) => ({
  src: `/gallery_images/עומר_תעשיות_עץ_גלרייה (${index + 3}).png`,
  alt: "עומר תעשיות עץ",
}));

export default function Gallery() {
  const [showMore, setShowMore] = useState(false);
  const [imagesToShow, setImagesToShow] = useState(10);

  return (
    <section
      id="gallery"
      className="px-10 my-10 sm:px-20 min-h-fit py-10 flex flex-col gap-10"
    >
      <div>
        <TypoH2>עבודות שעשינו</TypoH2>
      </div>
      <div className="list-gallery">
        {images.slice(0, imagesToShow).map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            width={300}
            height={300}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded object-cover mb-10 sm:mr-10"
          />
        ))}
        {images.length > 10 && (
          <button
            onClick={() => setImagesToShow(imagesToShow + 10)}
            className="w-full py-3 px-6 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity"
          >
            טען עוד תמונות
          </button>
        )}
      </div>
    </section>
  );
}