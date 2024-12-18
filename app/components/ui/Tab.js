"use client";

import Image from "next/image";
import { useState } from "react";
import BtnArrow from "./btnArrow";

export default function Tab() {
  const [activeTab, setActiveTab] = useState(0);
  const [imageActive, setImageActive] = useState(0);

  function handleLeftArrowClick() {
    if (imageActive > 0) {
      setImageActive((prev) => prev - 1);
    } else {
      setImageActive(tabs[activeTab].images.length - 1);
    }
  }

  function handleRightArrowClick() {
    if (imageActive < tabs[activeTab].images.length - 1) {
      setImageActive((prev) => prev + 1);
    } else {
      setImageActive(0);
    }
  }

  const tabs = [
    {
      id: 0,
      name: "מטבח",
      images: [
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (3).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (4).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (5).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (8).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (9).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (10).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (23).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (24).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (25).png",
      ],
    },
    {
      id: 1,
      name: "חדר שינה",
      images: [
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (17).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (18).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (19).png",
      ],
    },
    {
      id: 2,
      name: "ריהוט",
      images: [
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (1).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (2).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (6).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (7).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (12).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (14).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (20).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (21).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (28).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (29).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (36).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (37).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (39).png",
      ],
    },
    {
      id: 3,
      name: "חדרי אמבטיה",
      images: [
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (11).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (16).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (16).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (31).png",
        "/gallery_images/עומר_תעשיות_עץ_גלרייה (32).png",
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-start items-start gap-10 mt-10">
      <div className="flex flex-row justify-around">
        <ol className="flex flex-row gap-10 text-xl">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                className={`hover:cursor-pointer ${
                  activeTab === tab.id
                    ? "text-orange-500 underline underline-offset-4 underline-orange-500 transition-all duration-300"
                    : ""
                }`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setImageActive(0);
                }}
                onDragStart={(e) => {
                  e.preventDefault();
                  console.log(e);
                }}
                aria-label={tab.name}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ol>
      </div>
      <div
        id="tab-images"
        className="flex flex-row gap-10 w-full h-[500px] relative"
        aria-label={tabs[activeTab].name}
        aria-labelledby="tab-images"
      >
        <button
          className="absolute top-1/2 -translate-y-1/2 left-5 z-10"
          onClick={handleLeftArrowClick}
          aria-label="previous image"
        >
          <BtnArrow direction="left" />
        </button>
        <button
          className="absolute top-1/2 -translate-y-1/2 right-5 z-10"
          onClick={handleRightArrowClick}
          aria-label="next image"
        >
          <BtnArrow direction="right" />
        </button>

        <Image
          key={imageActive}
          src={`${tabs[activeTab].images[imageActive]}`}
          alt={tabs[activeTab].name}
          fill
          className="object-contain rounded-lg brightness-50"
          aria-label={tabs[activeTab].name}
        />
      </div>
    </div>
  );
}
