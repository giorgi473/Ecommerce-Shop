"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Heart,
  Eye,
  Share2,
  ArrowRight,
} from "lucide-react";
import { products } from "@/data/data";

export default function TrandingCarusel() {
  const [isLoading, setIsLoading] = useState(true);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  const [navPrevEl, setNavPrevEl] = useState<HTMLElement | null>(null);
  const [navNextEl, setNavNextEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!isLoading) {
      setNavPrevEl(prevButtonRef.current);
      setNavNextEl(nextButtonRef.current);
    }
  }, [isLoading]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 mb-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        {isLoading ? (
          <div className="flex flex-col">
            <div className="mb-5">
              <Skeleton className="h-7 w-[200px] shrink-0 rounded-full" />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:w-full">
            <h2 className="text-sm sm:text-lg font-bold text-gray-600">LATEST PRODUCTS</h2>
            <button className="text-md w-fit bg-gray-100 hover:bg-gray-200 transition-all duration-300 ease-in-out px-3 py-1 rounded-sm flex items-center gap-1 cursor-pointer">
              Wiew All <ArrowRight size={17} />
            </button>
          </div>
        )}
      </div>
      <div className="relative">
        <div className="container mx-auto px-3 flex items-center justify-end gap-2 mb-4 -mt-6 lg:-mt-5">
          {isLoading ? (
            <>
              <Skeleton className="w-5 h-5 rounded-md" />
              <Skeleton className="w-5 h-5 rounded-md" />
            </>
          ) : (
            <>
              <button ref={prevButtonRef}>
                <ChevronLeft className="w-5 h-5 lg:w-5 lg:h-5 text-gray-600" />
              </button>
              <button ref={nextButtonRef}>
                <ChevronRight className="w-5 h-5 lg:w-5 lg:h-5 text-gray-600" />
              </button>
            </>
          )}
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            prevEl: navPrevEl,
            nextEl: navNextEl,
          }}
          breakpoints={{
            240: { slidesPerView: 2.3 },
            440: { slidesPerView: 3.3 },
            540: { slidesPerView: 3.3 },
            640: { slidesPerView: 4.3 },
            768: { slidesPerView: 5.3 },
            1024: { slidesPerView: 6.3 },
            1280: { slidesPerView: 7.3 },
          }}
          className="pb-12"
        >
          {isLoading
            ? Array.from({ length: 20 }).map((_, i) => (
                <SwiperSlide key={`sk-${i}`} className="h-full">
                  <Card className="h-full overflow-hidden rounded-md border-0 mb-1 select-none shadow-sm">
                    <div className="relative aspect-3/3 bg-gray-100 -mt-8">
                      <Skeleton className="w-full h-full" />
                      {i % 4 === 0 && (
                        <div className="absolute top-3 left-3">
                          <Skeleton className="w-10 h-6 rounded-md" />
                        </div>
                      )}
                    </div>
                    <CardContent className="px-4 py-3 space-y-3">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-10 w-full" />
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-6 w-28" />
                      <Skeleton className="h-9 w-full rounded-md" />
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))
            : products.map((product) => (
                <SwiperSlide key={product.id} className="h-full">
                  <HoverImageCard product={product} />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
}

function HoverImageCard({ product }: { product: (typeof products)[number] }) {
  const [isHovered, setIsHovered] = useState(false);
  const currentImage =
    isHovered && product.image[1] ? product.image[1] : product.image[0];

  return (
    <Card
      className="h-full overflow-hidden rounded-md border-0 mb-1 select-none group flex flex-col bg-white shadow-sm cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {product.discount && (
        <div className="absolute top-3 left-3 z-20">
          <Badge className="bg-red-400 text-white text-xs font-bold">
            -{product.discount}%
          </Badge>
        </div>
      )}
      <div className="relative aspect-3/3 overflow-hidden bg-gray-100 -mt-8">
        <Image
          src={currentImage}
          alt={product.title}
          fill
          className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
          sizes="(max-width: 340px) 30vw, (max-width: 440px) 30vw, (max-width: 540px) 30vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <div
          className={`absolute top-4 right-3 flex flex-col gap-3 z-30 transition-all duration-400 ease-out ${
            isHovered
              ? "translate-y-0 opacity-100"
              : "-translate-y-12 opacity-0"
          }`}
        >
          <button className="bg-white hover:bg-red-400 text-gray-700 w-5 h-5 lg:w-7 lg:h-7 rounded-full flex items-center justify-center transition-all shadow-md">
            <Heart className="w-3 h-3 lg:w-4 lg:h-4" />
          </button>
          <button className="bg-white hover:bg-red-400 text-gray-700 w-5 h-5 lg:w-7 lg:h-7 rounded-full flex items-center justify-center transition-all shadow-md">
            <Eye className="w-3 h-3 lg:w-4 lg:h-4" />
          </button>
          <button className="bg-white hover:bg-red-400 text-gray-700 w-5 h-5 lg:w-7 lg:h-7 rounded-full flex items-center justify-center transition-all shadow-md">
            <Share2 className="w-3 h-3 lg:w-4 lg:h-4" />
          </button>
        </div>
      </div>
      <CardContent className="px-4 flex-1 flex flex-col justify-between">
        <div className="space-y-1">
          <p className="text-xs text-gray-500 font-medium truncate">
            {product.brand}
          </p>
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-5 h-10">
            {product.title}
          </h3>
          <div className="flex items-center gap-1 text-sm">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-gray-500">({product.rating})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              ₹{product.discountedPrice.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
        <Button
          variant="outline"
          className="w-full mt-4 border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600 font-semibold"
          size="sm"
        >
          <ShoppingCart className="w-4 h-4 mr-1" />
          <span className="hidden sm:inline text-xs">Add to Cart</span>
        </Button>
      </CardContent>
    </Card>
  );
}
