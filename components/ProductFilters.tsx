"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Plus, Minus, Star } from "lucide-react";
import { categories } from "@/constants/headerNav";
import { motion, AnimatePresence } from "framer-motion";

const ratings = [5, 4, 3, 2, 1];

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 60000]);
  const [categoryOpen, setCategoryOpen] = useState(true);

  return (
    <div className="space-y-6 sticky top-34.5">
      <div>
        <button
          onClick={() => setCategoryOpen(!categoryOpen)}
          className="flex items-center justify-between w-full pr-10 py-5 text-left font-semibold"
        >
          <span className="text-lg">Shop by Category</span>
          <motion.div
            animate={{ rotate: categoryOpen ? 0 : 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
          >
            {categoryOpen ? (
              <Minus className="w-5 h-5 mt-2" />
            ) : (
              <Plus className="w-5 h-5 mt-2" />
            )}
          </motion.div>
        </button>
        <AnimatePresence initial={false}>
          {categoryOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.4, ease: "easeInOut" },
                opacity: { duration: 0.3, ease: "easeInOut" },
              }}
              className="overflow-hidden"
            >
              <div className="pb-4 space-y-3 max-h-64 overflow-y-auto scrollbar">
                {categories.map((category) => (
                  <div
                    key={category.catId}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={category.href}
                      className="w-5 h-5 data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500 border-2 border-black text-white"
                    />
                    <Label
                      htmlFor={category.href}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {category.title}
                    </Label>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Filter By Price</h3>
        <div className="pr-1">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={60000}
            step={100}
            className="w-full"
          />
        </div>
        <div className="flex items-center justify-between text-sm">
          <span>
            From: <span className="font-semibold">Rs: {priceRange[0]}</span>
          </span>
          <span>
            To: <span className="font-semibold">Rs: {priceRange[1]}</span>
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Filter By Rating</h3>
        <div className="space-y-3 max-h-48 overflow-y-auto">
          {ratings.map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox
                id={`rating-${rating}`}
                className="w-5 h-5 data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500 border-2 border-black text-white"
              />
              <Label
                htmlFor={`rating-${rating}`}
                className="flex items-center gap-1 cursor-pointer"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-300 text-gray-300"
                    }`}
                  />
                ))}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
