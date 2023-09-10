import { useEffect, useState } from "react";

import Slide from "./Slide";
import SlideThumb from "./SlideThumb";

export default function Slides({ slides }) {
  const [showing, setShowing] = useState(0);

  const isSelected = (i) => showing % slides.length === i;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowing(showing + 1);
    }, 8000);
    return () => clearTimeout(timeout);
  }, [showing]);

  return (
    <div className="gdk root container responsivegrid" id="gdk__content">
      <div className="cmp-container">
        <div className="homepage-hero-wrapper">
          <div
            className="slider slider--hp"
            data-component="hp-hero"
            data-auto-rotate="true"
            data-first-slide-display-time="7000"
            data-other-slides-display-time="5000"
            aria-live="polite"
          >
            <div className="slider__slides">
              {slides.map((slide, i) => (
                <div
                  key={slide.href}
                  className={`slider__slide ${
                    isSelected(i) ? "" : "display--hidden"
                  }`}
                  data-slide-id={i + 1}
                >
                  <Slide {...slide} />
                </div>
              ))}
            </div>
          </div>
          <div
            className="slider__controls carousel flickity-resize"
            data-carousel="true"
            data-initial-index="0"
            data-carousel-mobile="true"
            data-carousel-desktop="false"
            data-disable-lightbox="true"
          >
            {slides.map((slide, i) => (
              <SlideThumb
                key={slide.href}
                thumb={slide.thumb}
                selected={isSelected(i)}
                onClick={() => setShowing(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
