"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { slides } from "@/data/data";

export default function Slider() {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (
    s: SwiperInstance,
    time: number,
    progress: number
  ) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      );
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active !bg-white",
          bulletClass: "swiper-pagination-bullet !bg-gray-100",
        }}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-full h-[250px] md:h-[300px] lg:h-[340px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`relative w-full h-full select-none ${slide.bgGradient}`}
            >
              <Image
                src={slide.image || "/fallback.jpg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/30" />

              <div className="relative z-10 flex h-full items-center container mx-auto px-15 sm:px-12 md:px-16 lg:px-5">
                <div className="flex-1 text-left">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tighter drop-shadow-2xl">
                    {slide.title}
                  </h1>
                  <p className="text-md sm:text-lg md:text-2xl lg:text-4xl font-medium text-white mb-8 drop-shadow-lg">
                    {slide.subtitle}
                  </p>
                  <button className="bg-black text-white px-5 py-2 md:px-10 md:py-2 text-xs sm:text-sm md:text-lg font-semibold rounded-lg hover:bg-gray-900 transition-all duration-300 hover:shadow-pink-500/50 transform cursor-pointer">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress absolute z-20 bottom-8 right-4 w-10 h-10 lg:w-14 lg:h-14 pointer-events-none">
          <svg
            className="-rotate-90 w-10 h-10 lg:w-14 lg:h-14"
            viewBox="0 0 48 48"
            ref={progressCircle}
          >
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-white opacity-30 z-20"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="url(#gradient)"
              strokeWidth="4"
              fill="none"
              strokeDasharray="125.6"
              strokeDashoffset="calc(125.6px * var(--progress, 1))"
              className="text-black transition-all duration-100"
            />
            <defs>
              <linearGradient id="gradient">
                <stop offset="0%" stopColor="#ebe5e5" />
                <stop offset="100%" stopColor="#f3f0f0" />
              </linearGradient>
            </defs>
          </svg>
          <span
            className="absolute inset-0 flex items-center justify-center text-white font-mono text-xs md:text-sm"
            ref={progressContent}
          />
        </div>
      </Swiper>
      <button
        className="swiper-button-prev-custom absolute left-4 top-1/2 cursor-pointer -translate-y-1/2 z-30 w-7 h-7 lg:w-10 lg:h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl hover:bg-white transition-all group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 lg:w-6 lg:h-6 text-gray-800 group-hover:text-pink-600 transition-colors" />
      </button>
      <button
        className="swiper-button-next-custom absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 z-30 w-7 h-7 lg:w-10 lg:h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl hover:bg-white transition-all group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 lg:w-6 lg:h-6 text-gray-800 group-hover:text-pink-600 transition-colors" />
      </button>
    </div>
  );
}
