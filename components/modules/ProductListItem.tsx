"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Heart, Share2 } from "lucide-react";
import ExpentButton from "@/components/ExpentButton";
import { toast } from "sonner";
import { useHeart } from "@/context/HeartContext";

interface FormattedProduct {
  id: string;
  title: string;
  description: string;
  brand: string;
  rating: number;
  price: number;
  image: string[];
  discount?: number;
  discountedPrice: number;
  originalPrice: number;
}

export default function ProductListItem({
  product,
}: {
  product: FormattedProduct;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToHeart, removeFromHeart, isInHeart } = useHeart();
  const isLiked = isInHeart(product.id);

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLiked) {
      removeFromHeart(product.id);
      toast.success("Removed from My List");
    } else {
      addToHeart({
        id: product.id,
        title_ka: product.title,
        price: product.price,
        image: product.image[0],
        brand: product.brand,
        rating: product.rating,
        description: product.description,
      });
      toast.success("Added to My List");
    }
  };

  const currentImage =
    isHovered && product.image[1] ? product.image[1] : product.image[0];

  return (
    <Card className="border-0 rounded-sm overflow-hidden bg-white lg:bg-gray-50 pt-0 lg:p-3 h-auto mb-5">
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 h-full">
        <div
          className="relative w-full lg:w-60 aspect-3/3 lg:h-72 overflow-hidden bg-gray-100 lg:rounded-sm shrink-0 group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={currentImage || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-cover transition-all duration-500 ease-in-out group-hover:scale-110 cursor-pointer"
            sizes="(max-width: 1024px) 100vw, 300px"
          />
          <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          {(product.discount ?? 0) > 0 && (
            <div className="absolute top-3 lg:top-4 left-3 lg:left-4 z-20">
              <Badge className="bg-red-500 text-white text-xs lg:text-sm font-bold px-2 lg:px-3 py-1">
                {product.discount}%
              </Badge>
            </div>
          )}
          <div
            className={`absolute top-4 right-3 flex flex-col gap-3 z-30 transition-all duration-400 ease-out ${
              isHovered
                ? "translate-y-0 opacity-100"
                : "-translate-y-12 opacity-0"
            }`}
          >
            <ExpentButton product={product} />
            <button className="bg-white hover:bg-red-400 text-gray-700 w-5 h-5 lg:w-7 lg:h-7 rounded-full flex items-center justify-center transition-all shadow-md">
              <Share2 className="w-3 h-3 lg:w-4 lg:h-4" />
            </button>
            <button
              onClick={handleHeartClick}
              className={`${
                isLiked
                  ? "bg-red-400 text-white"
                  : "bg-white text-gray-700 hover:bg-red-400"
              } w-5 h-5 lg:w-7 lg:h-7 rounded-full flex items-center justify-center transition-all shadow-md`}
            >
              <Heart
                className={`w-3 h-3 lg:w-4 lg:h-4 ${
                  isLiked ? "fill-current" : ""
                }`}
              />
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between px-4 pt-2 lg:py-2">
          <div>
            <p className="text-xs lg:text-sm text-gray-500 lg:mb-2 font-medium">
              {product.brand}
            </p>
            <h2 className="text-sm lg:text-lg text-gray-700 font-semibold lg:mb-4">
              {product.title}
            </h2>
            <p className="text-gray-600 text-xs hidden lg:flex lg:text-sm leading-relaxed lg:mb-6">
              {product.description}
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-3 lg:gap-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5 lg:gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm lg:text-xl ${
                        i < product.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-xs lg:text-sm text-gray-600">
                  ({product.rating})
                </span>
              </div>
              <div className="flex items-center gap-2 lg:gap-3">
                <span className="text-gray-400 line-through text-xs lg:text-lg">
                  ₹{product.originalPrice.toFixed(2)}
                </span>
                <span className="text-red-500 text-sm lg:text-lg font-bold">
                  ₹{product.discountedPrice.toFixed(2)}
                </span>
              </div>
              <button className="w-full lg:w-fit flex items-center justify-center lg:justify-start text-red-500 border-red-500 hover:bg-red-50 hover:text-red-600 bg-white border font-semibold text-xs lg:text-sm h-8 lg:h-9 px-3 lg:px-10 whitespace-nowrap transition-all duration-300 rounded-sm cursor-pointer">
                <ShoppingCart className="w-4 lg:w-5 h-4 lg:h-5 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
