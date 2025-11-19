"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Heart,
  ShoppingCart,
  Search,
  Menu,
  Truck,
  ChevronDown,
  Plus,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Image from "next/image";
import { useState } from "react";

interface Category {
  title: string;
  href: string;
  subcategories?: Array<{
    title: string;
    href: string;
  }>;
}

const categories: Category[] = [
  {
    title: "Fashion",
    href: "/fashion",
    subcategories: [
      { title: "Men", href: "/fashion/men" },
      { title: "Women", href: "/fashion/women" },
      { title: "Kids", href: "/fashion/kids" },
    ],
  },
  {
    title: "Electronics",
    href: "/electronics",
    subcategories: [
      { title: "Phones", href: "/electronics/phones" },
      { title: "Laptops", href: "/electronics/laptops" },
      { title: "Accessories", href: "/electronics/accessories" },
    ],
  },
  {
    title: "Bags",
    href: "/bags",
    subcategories: [
      { title: "Backpacks", href: "/bags/backpacks" },
      { title: "Handbags", href: "/bags/handbags" },
    ],
  },
  {
    title: "Footwear",
    href: "/footwear",
    subcategories: [
      { title: "Shoes", href: "/footwear/shoes" },
      { title: "Sneakers", href: "/footwear/sneakers" },
    ],
  },
  {
    title: "Groceries",
    href: "/groceries",
    subcategories: [
      { title: "Fresh Produce", href: "/groceries/produce" },
      { title: "Dairy", href: "/groceries/dairy" },
    ],
  },
  {
    title: "Beauty",
    href: "/beauty",
    subcategories: [
      { title: "Skincare", href: "/beauty/skincare" },
      { title: "Makeup", href: "/beauty/makeup" },
    ],
  },
  {
    title: "Wellness",
    href: "/wellness",
    subcategories: [
      { title: "Supplements", href: "/wellness/supplements" },
      { title: "Fitness", href: "/wellness/fitness" },
    ],
  },
  {
    title: "Jewellery",
    href: "/jewellery",
    subcategories: [
      { title: "Necklaces", href: "/jewellery/necklaces" },
      { title: "Rings", href: "/jewellery/rings" },
    ],
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (title: string) => {
    setOpenCategories((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <header className="border-b">
          <div className="container mx-auto px-4 flex items-center h-20 justify-between">
            {/* logo */}
            <Link href="/">
              <Image
                src={"/logo/logo.png"}
                alt="logo"
                width={200}
                height={100}
                priority
              />
            </Link>
            <div className="hidden lg:block flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search for products..."
                  className="h-12 w-full rounded-md bg-gray-100 border-0 pl-6 pr-12 text-base placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Search className="h-6 w-6" />
              </Button>
              <div className="hidden md:flex items-center gap-3 text-gray-800 font-medium text-sm">
                <Link href="/login" className="hover:text-red-500 transition">
                  Login
                </Link>
                <span className="text-gray-400">|</span>
                <Link
                  href="/register"
                  className="hover:text-red-500 transition"
                >
                  Register
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <button className="relative p-2.5 rounded-full cursor-pointer transition-all duration-300 group hover:bg-gray-100 active:scale-95">
                  <Heart className="h-6 w-6 group-hover:text-primary z-10" />
                  <Badge
                    className="absolute top-1.5 right-0.5 h-3 w-3 p-2 rounded-full
                         text-primary-foreground text-xs font-medium
                         flex items-center justify-center bg-gray-500
                         group-hover:bg-red-600 group-hover:scale-110
                         transition-all z-20"
                  >
                    5
                  </Badge>
                </button>
                <button className="relative p-2.5 rounded-full cursor-pointer transition-all duration-300 group hover:bg-gray-100 active:scale-95">
                  <ShoppingCart className="h-6 w-6 group-hover:text-primary z-10" />
                  <Badge
                    className="absolute top-1.5 right-0.5 h-3 w-3 p-2 rounded-full
                         text-primary-foreground text-xs font-medium
                         flex items-center justify-center bg-gray-500
                         group-hover:bg-red-600 group-hover:scale-110
                         transition-all z-20"
                  >
                    5
                  </Badge>
                </button>
              </div>
            </div>
          </div>
          <div className="lg:hidden border-t px-4 py-3">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search for products..."
                className="h-12 w-full rounded-md bg-gray-100 pl-6 pr-12"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            </div>
          </div>
        </header>
        <nav className="border-b bg-white">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14 text-sm font-medium text-gray-700">
            <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
              <Button
                variant="ghost"
                className="flex items-center gap-2 hover:bg-gray-50 px-3 py-2 rounded-md whitespace-nowrap"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-5 w-5" />
                SHOP BY CATEGORIES
                <ChevronDown className="h-4 w-4" />
              </Button>

              <div className="hidden xl:flex items-center gap-8">
                {categories.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className="hover:text-pink-600 transition-colors whitespace-nowrap"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 font-medium whitespace-nowrap">
              <Truck className="h-5 w-5" />
              Free International Delivery
            </div>
          </div>
        </nav>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="px-4">
            <div className="mb-3">
              <Link href="/">
                <Image
                  src={"/logo/logo.png"}
                  alt="logo"
                  width={180}
                  height={100}
                  priority
                />
              </Link>
            </div>
            <SheetTitle>SHOP BY CATEGORIES</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col">
            {categories.map((category) => (
              <Collapsible
                key={category.href}
                open={openCategories.includes(category.title)}
                onOpenChange={() => toggleCategory(category.title)}
              >
                <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-50">
                  <Link
                    href={category.href}
                    onClick={() => setIsOpen(false)}
                    className="flex-1 text-gray-900 font-medium hover:text-pink-600"
                  >
                    {category.title}
                  </Link>
                  <CollapsibleTrigger asChild>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <Plus className="h-5 w-5 text-gray-600" />
                    </button>
                  </CollapsibleTrigger>
                </div>
                {category.subcategories && (
                  <CollapsibleContent>
                    <div className="flex flex-col">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="px-8 py-2 text-gray-700 hover:text-pink-600 text-sm"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </CollapsibleContent>
                )}
              </Collapsible>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
