"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Plus, Minus, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ApiCategory {
  category_id: string;
  category_name_ka: string;
  slug: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  subcategories: any[];
}

export function ProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [priceRange, setPriceRange] = useState([0, 3530]);
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [categories, setCategories] = useState<ApiCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(true);

  const ratings = [5, 4, 3, 2, 1];

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/blog");
        if (!response.ok) throw new Error("Failed to fetch");
        const data: ApiCategory[] = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Load filters from URL query params
  useEffect(() => {
    const catId = searchParams.get("catId");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const ratings = searchParams.get("ratings");

    if (catId) {
      setSelectedCategory(catId);
    }
    if (minPrice && maxPrice) {
      setPriceRange([parseInt(minPrice), parseInt(maxPrice)]);
    }
    if (ratings) {
      setSelectedRatings(ratings.split(",").map(Number));
    }
  }, [searchParams]);

  const handleCategoryChange = (categoryId: string) => {
    const updated = selectedCategory === categoryId ? null : categoryId;
    setSelectedCategory(updated);
    updateFilters({
      category: updated,
      ratings: selectedRatings,
      priceRange,
    });
  };

  const handleRatingChange = (rating: number) => {
    let updated: number[];

    if (selectedRatings.includes(rating)) {
      updated = selectedRatings.filter((r) => r !== rating);
    } else {
      updated = [...selectedRatings, rating];
    }

    setSelectedRatings(updated);
    updateFilters({
      category: selectedCategory,
      ratings: updated,
      priceRange,
    });
  };

  const handlePriceChange = (newPrice: number[]) => {
    setPriceRange(newPrice);
    updateFilters({
      category: selectedCategory,
      ratings: selectedRatings,
      priceRange: newPrice,
    });
  };

  const updateFilters = ({
    category: cat,
    ratings: rats,
    priceRange: range,
  }: {
    category: string | null;
    ratings: number[];
    priceRange: number[];
  }) => {
    const params = new URLSearchParams();

    if (cat) {
      params.set("catId", cat);
    }

    if (rats.length > 0) {
      params.set("ratings", rats.join(","));
    }

    if (range[0] > 0 || range[1] < 3530) {
      params.set("minPrice", range[0].toString());
      params.set("maxPrice", range[1].toString());
    }

    router.push(`/products?${params.toString()}`);
  };

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
                    key={category.category_id}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={category.category_id}
                      checked={selectedCategory === category.category_id}
                      onCheckedChange={() =>
                        handleCategoryChange(category.category_id)
                      }
                      className="w-5 h-5 data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500 border-2 border-black text-white"
                    />
                    <Label
                      htmlFor={category.category_id}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {category.category_name_ka}
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
            onValueChange={handlePriceChange}
            max={3530}
            step={10}
            className="w-full"
          />
        </div>
        <div className="flex items-center justify-between text-sm">
          <span>
            From: <span className="font-semibold">${priceRange[0]}</span>
          </span>
          <span>
            To: <span className="font-semibold">${priceRange[1]}</span>
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
                checked={selectedRatings.includes(rating)}
                onCheckedChange={() => handleRatingChange(rating)}
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
