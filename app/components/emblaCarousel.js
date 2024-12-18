"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./ui/emblaCarouselControls";

export default function EmblaCarousel({ children }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      dragFree: true,
      direction: "rtl",
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 2000,
        playOnInit: true,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">{children}</div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>
      </div>
    </section>
  );
}
