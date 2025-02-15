"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import EmblaCarousel from "../emblaCarousel";

const tabs = [
  {
    id: 0,
    name: "חדר שינה",
    heading: "חדר שינה",
    description: "חדר שינה מעוצב אישית על ידי מעצבים ומטפלים בעציים",
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
    name: "ריהוט",
    heading: "ריהוט",
    description: "ריהוט מעוצב אישית על ידי מעצבים ומטפלים בעציים",
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
    id: 2,
    name: "מטבח",
    heading: "מטבח",
    description: "מטבח מעוצב אישית על ידי מעצבים ומטפלים בעציים",
    images: [
      "/gallery_images/עומר_תעשיות_עץ_גלרייה (1).png",
      "/gallery_images/עומר_תעשיות_עץ_גלרייה (2).png",
      "/gallery_images/עומר_תעשיות_עץ_גלרייה (6).png",
    ],
  },
];

export default function Tab() {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab >= 2 ? 0 : prevTab + 1));
    }, 5000);
    console.log(activeTab);

    return () => clearInterval(interval);
  }, [isAutoRotating]);

  function handleClick(index) {
    setActiveTab(index);
    setIsAutoRotating(false);

    // Restart auto-rotation after 10 seconds of inactivity
    const timer = setTimeout(() => {
      setIsAutoRotating(true);
    }, 3000);

    // Cleanup timer when component unmounts or when clicked again
    return () => clearTimeout(timer);
  }

  return (
    <section className="my-10">
      <div className="mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row gap-10">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`flex-1 cursor-pointer text-right space-y-2 transition-all duration-500 ease-in-out ${
                tab.id === activeTab ? "" : "text-stone-400"
              }`}
              onClick={() => handleClick(tab.id)}
            >
              <div className="h-[2px] bg-stone-400 w-full overflow-hidden">
                <div
                  className="h-full bg-orange-500"
                  style={{
                    width: tab.id === activeTab ? "100%" : "0%",
                    transition:
                      tab.id === activeTab || isInitialLoad
                        ? "width 5000ms linear"
                        : "none",
                  }}
                ></div>
              </div>
              <h3 className="font-bold text-lg ">{tab.heading}</h3>
              <p className=" mt-1 text-sm">{tab.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 relative">
          <EmblaCarousel>
            {tabs[activeTab].images.map((image, index) => (
              <div key={index} className="embla__slide relative aspect-square">
                <Image
                  src={image}
                  alt={tabs[activeTab].name}
                  fill
                  className="object-cover rounded-lg"
                  aria-label={tabs[activeTab].name}
                />
              </div>
            ))}
          </EmblaCarousel>
        </div>
      </div>
    </section>
  );
}
