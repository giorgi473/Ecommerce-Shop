"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Heart,
  ShoppingCart,
  Search,
  Menu,
  Plus,
  Minus,
  Home,
  User,
  Package,
  Rocket,
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
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (title: string) => {
    setOpenCategory(openCategory === title ? null : title);
  };

  return (
    <>
      <div className="hidden lg:block sticky top-0 z-50 bg-white shadow-xs">
        <header className="border-b">
          <div className="container mx-auto px-4 flex items-center h-20 justify-between">
            <Link href="/">
              <Image
                src="/logo/logo.png"
                alt="logo"
                width={200}
                height={100}
                priority
              />
            </Link>

            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search for products..."
                  className="h-12 w-full rounded-md bg-gray-100 border-0 pl-6 pr-12 text-base placeholder:text-gray-500 focus-visible:ring-0"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-3 text-gray-800 font-medium text-sm">
                <Link href="/login" className="hover:text-red-500">
                  Login
                </Link>
                <span className="text-gray-400">|</span>
                <Link href="/register" className="hover:text-red-500">
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
        </header>

        <nav className="border-b bg-white">
          <div className="container mx-auto pl-4 flex items-center justify-between h-14 text-sm font-medium text-gray-700">
            <div className="flex items-center gap-8">
              <Button
                variant="outline"
                className="flex items-center gap-2 px-2"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-5 w-5" />
                SHOP BY CATEGORIES
              </Button>
            </div>
            <div className="flex gap-2 px-3 w-full items-center justify-between">
              {categories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  onClick={() => setIsOpen(false)}
                  className="px-2 py-2 text-balance font-semibold text-gray-600"
                >
                  {cat.title}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4 text-sm w-90 text-black">
              <Rocket className="h-5 w-5" />
              Free International Delivery
            </div>
          </div>
        </nav>
      </div>
      <div className="lg:hidden fixed inset-0 flex flex-col z-50 pointer-events-none">
        <div className="pointer-events-auto bg-white shadow-md border-b">
          <div className="flex items-center justify-between h-16 px-4">
            <button onClick={() => setIsOpen(true)}>
              <Menu className="h-6 w-6 cursor-pointer" />
            </button>
            <Link href="/">
              <Image
                src="/logo/logo.png"
                alt="logo"
                width={140}
                height={70}
                priority
              />
            </Link>
            <div>
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
          <div
            className="flex gap-2 px-3 overflow-x-auto pb-3 justify-start sm:justify-center snap-x snap-mandatory scrollbar-hide scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                onClick={() => setIsOpen(false)}
                className="px-2 py-2 text-sm sm:text-base font-semibold text-gray-700 hover:text-red-500 hover:bg-pink-100 rounded-full transition-all duration-200 whitespace-nowrap snap-center"
              >
                {cat.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Fixed Navigation */}
        <div className="pointer-events-auto mt-auto bg-white border-t">
          <div className="flex items-center justify-around h-16 text-xs">
            <Link
              href="/"
              className="flex flex-col items-center gap-1 text-gray-700"
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <button className="flex flex-col items-center gap-1 text-gray-700">
              <Search className="h-5 w-5" />
              <span>Search</span>
            </button>
            <button className="relative flex flex-col items-center gap-1 text-gray-700">
              <Heart className="h-5 w-5" />
              <span>Wishlist</span>
            </button>
            <Link
              href="/orders"
              className="flex flex-col items-center gap-1 text-gray-700"
            >
              <Package className="h-5 w-5" />
              <span>Orders</span>
            </Link>
            <Link
              href="/account"
              className="flex flex-col items-center gap-1 text-gray-700"
            >
              <User className="h-5 w-5" />
              <span>Account</span>
            </Link>
          </div>
        </div>
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
                open={openCategory === category.title}
                onOpenChange={() => toggleCategory(category.title)}
              >
                <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-50">
                  <Link
                    href={category.href}
                    onClick={() => setIsOpen(false)}
                    className="flex-1 text-gray-900 font-medium hover:text-red-600"
                  >
                    {category.title}
                  </Link>
                  <CollapsibleTrigger asChild>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      {openCategory === category.title ? (
                        <Minus className="h-5 w-5 text-gray-600" />
                      ) : (
                        <Plus className="h-5 w-5 text-gray-600" />
                      )}
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
                          className="px-8 py-2 text-gray-700 hover:text-red-600 text-sm"
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
