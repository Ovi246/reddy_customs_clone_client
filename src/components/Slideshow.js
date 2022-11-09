import React, { useCallback, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { Outlet } from "react-router-dom";

export default function Slideshow() {
  const sliderRef = useRef(null);

  const slideShowData = [
    { src: "https://i.ibb.co/SBB0rqm/slide1.jpg", title: "BLOOD BULL" },
    { src: "https://i.ibb.co/m4q17dC/slide2.jpg", title: "CAMPER VAN" },
    { src: "https://i.ibb.co/qBhwcfR/slide3.jpg", title: "GANGSTER" },
    { src: "https://i.ibb.co/Zf1DGMs/slide4.jpg", title: "BLACK HAWK" },
    { src: "https://i.ibb.co/n8BL8FL/slide5.jpg", title: "FALCON" },
    { src: "https://i.ibb.co/b2sxYkC/slide6.jpg", title: "DISPLAY VAN" },
  ];

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="relative">
      {/* For nav over images */}
      <div className="absolute w-full z-20">
        <Outlet />
      </div>
      {/* Buttons over image div */}
      <div className="absolute top-1/2 left-3 z-10 flex mx-5">
        <div className="flex items-center cursor-pointer" onClick={handlePrev}>
          <AiOutlineArrowLeft className="inline text-2xl" />
          <button className="tracking-widest ml-2">PREV</button>
        </div>
        <div
          className="ml-5 flex items-center cursor-pointer"
          onClick={handleNext}
        >
          <button className="tracking-widest mr-2">NEXT</button>
          <AiOutlineArrowRight className="inline text-2xl" />
        </div>
      </div>
      <Swiper
        effect="cube"
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="w-full h-screen"
        ref={sliderRef}
      >
        <div className="w-full h-screen">
          {slideShowData.map((item) => (
            <div key={item.title}>
              <SwiperSlide>
                <img src={item.src} alt="" className="object-fill" />
                <div className="absolute top-1/3 right-[10%]">
                  <div className="flex flex-col justify-end gap-5">
                    <h1 className="text-5xl font-normal tracking-[.32em] mb-6">
                      {item.title}
                    </h1>
                    <p className="text-[16px] text-end font-normal my-5">
                      We Love Modifying Vehicle
                    </p>
                    <div className="flex justify-end items-center">
                      <button className="px-8 py-2 bg-[#c5a47e] hover:bg-gray-800 transition-all ease-in-out rounded-full mt-5">
                        CUSTOMIZE WITH US
                        <AiOutlineArrowRight className="inline ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
