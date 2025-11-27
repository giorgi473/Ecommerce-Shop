"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import Toolbar from "@/components/Toolbar";
import { products } from "@/data/data";

export function ProductGrid() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="space-y-4">
      <Toolbar
        viewMode={viewMode}
        setViewMode={setViewMode}
        products={products}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-border rounded-sm overflow-hidden transition-shadow"
          >
            <div className="relative aspect-3/3 w-full">
              <Image
                src={
                  Array.isArray(product.image)
                    ? product.image[0]
                    : product.image || "/placeholder.svg"
                }
                alt={product.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/10" />
              {(product.discount ?? 0) > 0 && (
                <div className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded">
                  {product.discount}%
                </div>
              )}
            </div>
            <div className="p-4 space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">{product.brand}</p>
                <h3 className="font-medium text-foreground line-clamp-2">
                  {product.title}
                </h3>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-2.5 h-2.5 ${
                      i < product.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-300 text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-xs">({product.rating})</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-muted-foreground line-through text-sm">
                  ₹{product.originalPrice.toFixed(2)}
                </span>
                <span className="text-red-500 text-md font-semibold">
                  ₹{product.discountedPrice.toFixed(2)}
                </span>
              </div>

              <Button
                variant="outline"
                className="w-full text-red-500 border-red-500 hover:bg-red-50 hover:text-red-600 bg-transparent"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                ADD TO CART
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
