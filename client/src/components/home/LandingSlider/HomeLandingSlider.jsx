import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "./HomeLandingSlider.css";
import data from "./LandingSliderData.json";

const HomeLandingSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const heroSwiper = useRef(null);

  const heroData = useMemo(() => data || [], []);

  const handleSlideChange = useCallback((swiper) => {
    setActiveIndex(swiper.realIndex);
  }, []);

  useEffect(() => {
    if (!heroSwiper.current) return;

    const interval = setInterval(() => {
      heroSwiper.current?.slideNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    heroSwiper.current?.slideTo(index);
  };

  const handleTabKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") { // Check for Enter or Space key
      handleTabClick(index);
    }
  };

  return (
    <div className="hero overflow-hidden">
      <div className="overlay">
        {heroData.length > 0 && (
          <img
            // loading="lazy"
            src={heroData[activeIndex]?.img}
            alt={heroData[activeIndex]?.description}
            className="blur"
          />
        )}
        <div className="shodo" />
      </div>

      <div className="hero-content">
        <div className="top-section">
          <div className="hero-text hero-animated">
            <div className="hero-text-content">
              {heroData.length > 0 && (
                <p className="hero-text-title lg:text-3xl xl:text-4xl">
                  {heroData[activeIndex]?.description}
                </p>
              )}
            </div>
          </div>
          <div className="hero-slider">
            <Swiper
              autoplay={{ delay: 5000 }}
              loop
              effect="cards"
              onSwiper={(swiper) => {heroSwiper.current = swiper}}
              grabCursor
              onSlideChange={handleSlideChange}
              modules={[EffectCards]}
              className="mySwiper">
              {heroData.map((d) => (
                <SwiperSlide key={d.title}>
                  <img src={d.img} alt={d.title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="tab-area">
          {heroData.map((d, index) => (
            <div
              key={d.title}
              className={`tab-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
              onKeyDown={(e) => handleTabKeyDown(e, index)} // Add onKeyDown handler
            >
              <div className="tab-title">{d.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeLandingSlider;
