"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import {
  buttonVariants,
  colorVariants,
  priceVariants,
  productVariants,
  titleVariants,
} from "@/constants/animate";
import ShippingPromoBanner from "@/components/modules/ShippingPromoBanner";
import PromoGrid from "@/components/modules/PromoGrid";

interface HeroSlide {
  id: number;
  title: string;
  product: string;
  color?: string;
  price: string;
  image: string;
}

interface SidebarAd {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  image: string;
}

interface CombinedSlides {
  heroSlides: HeroSlide[];
  sidebar: SidebarAd[];
}

const slidesData: CombinedSlides = {
  heroSlides: [
    {
      id: 1,
      title: "Big Saving Days Sale",
      product: "Apple iPhone 13 128GB",
      price: "₹35,500.00",
      image: "/images/discover-unique-georgia.webp",
    },
    {
      id: 3,
      title: "Year End Mega Sale",
      product: "MacBook Air M3",
      price: "₹99,900.00",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1600&h=900&fit=crop",
    },
  ],
  sidebar: [
    {
      id: 4,
      title: "Women's Fashion",
      subtitle: "from",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&h=800&fit=crop&auto=format",
    },
    {
      id: 5,
      title: "Men's Footwear",
      subtitle: "under",
      price: "₹1500",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop&auto=format",
    },
  ],
};

export default function HeroCarouselWithSidebarAds() {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const { heroSlides, sidebar } = slidesData;

  const handleSlideChange = (swiper: SwiperType) => {
    setSlideIndex(swiper.realIndex);
  };

  return (
    <div className="w-full">
      <style>{`
        @media (max-width: 640px) {
          .swiper-pagination {
            display: none !important;
          }
        }
        
        @media (min-width: 641px) {
          .swiper-pagination-bullet {
            background-color: #dbcece !important;
            opacity: 0.7;
          }
          .swiper-pagination-bullet-active {
            background-color: #ef4444 !important;
            opacity: 1;
          }
        }
      `}</style>

      <div className="container mx-auto px-4 space-y-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          <div className="lg:col-span-8">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
              className="rounded-lg sm:rounded-xl overflow-hidden"
              onSlideChange={handleSlideChange}
            >
              {heroSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="relative w-full aspect-video sm:aspect-2 lg:aspect-2">
                    <Image
                      src={slide.image}
                      alt={slide.product}
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                    />
                    <div className="absolute bg-black/20" />
                    <div className="absolute inset-0 flex flex-col justify-center px-3 sm:px-6 md:px-8 lg:px-12 text-left z-10 text-white">
                      <div className="max-w-2xl">
                        <motion.p
                          key={`title-${slideIndex}`}
                          variants={titleVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="text-red-400 font-semibold text-xs sm:text-xs md:text-sm lg:text-sm tracking-widest uppercase"
                        >
                          {slide.title}
                        </motion.p>
                        <motion.h1
                          key={`product-${slideIndex}`}
                          variants={productVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="text-md sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold mt-2 sm:mt-3 md:mt-4 leading-tight"
                        >
                          {slide.product}
                        </motion.h1>
                        {slide.color && (
                          <motion.span
                            key={`color-${slideIndex}`}
                            variants={colorVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="block text-sm sm:text-lg md:text-xl lg:text-2xl font-medium text-pink-300 mt-1 sm:mt-2"
                          >
                            {slide.color}
                          </motion.span>
                        )}
                        <div className="mt-4 sm:mt-6 md:mt-8">
                          <motion.p
                            key={`price-${slideIndex}`}
                            variants={priceVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="text-md sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white"
                          >
                            {slide.price}
                          </motion.p>
                        </div>
                        <motion.button
                          key={`button-${slideIndex}`}
                          variants={buttonVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          whileHover="hover"
                          className="mt-4 sm:mt-6 md:mt-8 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 sm:py-2.5 sm:px-7 md:py-3 md:px-8 rounded-md text-xs sm:text-sm md:text-base transition-colors duration-200"
                        >
                          SHOP NOW
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 md:gap-5 lg:gap-6 h-auto lg:h-full">
            {sidebar.map((ad) => (
              <div
                key={ad.id}
                className="group relative rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl lg:hover:shadow-2xl transition-shadow duration-300 cursor-pointer h-40 sm:h-48 md:h-56 lg:h-full"
              >
                <Image
                  src={ad.image}
                  alt={ad.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute bg-black/20" />
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-3 sm:left-4 md:left-6 lg:left-6 right-3 sm:right-4 md:right-6 lg:right-6 text-white">
                  <p className="text-[10px] sm:text-xs md:text-sm lg:text-sm font-medium text-red-400 uppercase tracking-wider">
                    {ad.subtitle}
                  </p>
                  <p className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-black mt-1">
                    {ad.price}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold mt-1 sm:mt-2 line-clamp-2">
                    {ad.title}
                  </p>
                  <button className="mt-2 sm:mt-3 border-b-2 border-white pb-0.5 text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold hover:border-red-400 hover:text-red-400 transition">
                    SHOP NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <ShippingPromoBanner />
        </div>
        <section>
          <PromoGrid />
        </section>
      </div>
    </div>
  );
}
