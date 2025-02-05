import { useEffect, useState } from "react";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "./HomeLandingSlider.css";
import data from "./LandingSliderData.json";

const HomeLandingSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [heroSwiper, setHeroSwiper] = useState(null);

  const heroData = data || [];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (heroSwiper) {
        heroSwiper.slideNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSwiper]);

  useEffect(() => {
    const handleAnimationReset = () => {
      const animatedElements = document.querySelectorAll(".hero-animated");
      animatedElements.forEach((element) => {
        element.style.animation = "none";
        requestAnimationFrame(() => {
          element.style.animation = "fadeInUp 0.4s ease-in-out forwards";
        });
      });
    };

    if (heroSwiper) {
      heroSwiper.on("slideChange", handleAnimationReset);
    }

    return () => {
      if (heroSwiper) {
        heroSwiper.off("slideChange", handleAnimationReset);
      }
    };
  }, [heroSwiper]);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    if (heroSwiper) {
      heroSwiper.slideTo(index);
    }
  };

  return (
    <div className="hero overflow-hidden">
      <div className="overlay">
        {heroData.length > 0 && (
          <img
            loading="lazy"
            src={heroData[activeIndex].img}
            alt={heroData[activeIndex].description}
            className="blur"
          />
        )}
        <div className="shodo"></div>
      </div>

      <div className="hero-content">
        <div className="top-section">
          <div className="hero-text hero-animated">
            <div className="hero-text-content">
              {heroData.length > 0 && (
                <>
                  <p className="hero-text-title lg:text-3xl xl:text-4xl">
                    {heroData[activeIndex].description}
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="hero-slider">
            <Swiper
              autoplay={{ delay: 1000 }}
              loop={true}
              effect="cards"
              onSwiper={setHeroSwiper}
              grabCursor
              onSlideChange={handleSlideChange}
              modules={[EffectCards]}
              className="mySwiper">
              {heroData.map((d, index) => (
                <SwiperSlide key={index}>
                  <img src={d.img} alt={d.title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="tab-area">
          {heroData.map((d, index) => (
            <div
              key={index}
              className={`tab-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleTabClick(index)}>
              <div className="tab-title">{d.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeLandingSlider;
