"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { shoppingCategories } from "@/data/data";

interface ShoppingCategory {
  id: number;
  title: string;
  image: string;
  href?: string;
}

export default function ShoppingCategoriesRow() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const skeletonArray = Array.from({ length: 16 });

  return (
    <div className="w-full relative">
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        loop={true}
        breakpoints={{
          240: { slidesPerView: 3, spaceBetween: 8 },
          488: { slidesPerView: 4, spaceBetween: 10 },
          640: { slidesPerView: 4, spaceBetween: 20 },
          768: { slidesPerView: 5, spaceBetween: 20 },
          1024: { slidesPerView: 6, spaceBetween: 20 },
          1280: { slidesPerView: 7, spaceBetween: 20 },
        }}
        centeredSlides={false}
        className="pb-10"
      >
        {isLoading
          ? skeletonArray.map((_, index) => (
              <SwiperSlide
                key={`skeleton-${index}`}
                className="w-27! sm:w-30! md:w-35! lg:w-35!"
              >
                <div className="group block select-none">
                  <div className="relative w-full aspect-square">
                    <Skeleton className="w-full h-full rounded-md" />
                  </div>
                </div>
              </SwiperSlide>
            ))
          : shoppingCategories.map((item: ShoppingCategory) => (
              <SwiperSlide
                key={item.id}
                className="w-27! sm:w-30! md:w-35! lg:w-35!"
              >
                <Link
                  href={item.href || "#"}
                  className="group block select-none"
                >
                  <Card className="overflow-hidden rounded-md border-0 bg-gray-50 transition-all duration-300 h-full p-0">
                    <div className="relative w-full h-full aspect-square">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 240px) 25vw, (max-width: 340px) 25vw, (max-width: 640px) 25vw, (max-width: 768px) 25vw, (max-width: 1024px) 30vw, 20vw"
                        priority={item.id <= 8}
                      />
                      <div className="absolute inset-0 bg-black/30" />
                      <div className="absolute inset-0 flex items-end justify-center pb-4">
                        <h3 className="text-xs md:text-sm font-bold tracking-wider text-white drop-shadow-lg text-center px-2">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </Card>
                </Link>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
