"use client";

import React from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
import ShippingCart from "../modules/ShippingCart";
import HeartIcon from "../modules/HeartIcon";

interface Product {
  id: string;
  title_ka: string;
  price: number;
  rating: number;
}

interface ProductType {
  type_id: string;
  type_name_ka: string;
  products: Product[];
}

interface Subcategory {
  subcategory_id: string;
  subcategory_name_ka: string;
  slug: string;
  product_types: ProductType[];
}

interface ApiCategory {
  category_id: string;
  category_name_ka: string;
  slug: string;
  subcategories: Subcategory[];
}

interface FormattedCategory {
  title: string;
  href: string;
  categoryId: string;
  subcategories?: FormattedSubcategory[];
}

interface FormattedSubcategory {
  title: string;
  href: string;
  subcategoryId: string;
  slug: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [lastX, setLastX] = useState(0);
  const [lastTime, setLastTime] = useState(0);
  const [clickPrevented, setClickPrevented] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [categories, setCategories] = useState<FormattedCategory[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/blog");
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data: ApiCategory[] = await response.json();

        // Format API data
        const formattedCategories = data.map((cat) => ({
          title: cat.category_name_ka,
          href: `/products?catId=${cat.category_id}`,
          categoryId: cat.category_id,
          subcategories: cat.subcategories?.map((sub) => ({
            title: sub.subcategory_name_ka,
            href: `/products?subCatId=${sub.subcategory_id}`,
            subcategoryId: sub.subcategory_id,
            slug: sub.slug,
          })),
        }));

        setCategories(formattedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const toggleCategory = useCallback((title: string) => {
    setOpenCategory((prev) => (prev === title ? null : title));
  }, []);

  const getCategoryByTitle = useCallback(
    (title: string) => {
      return categories.find((c) => c.title === title);
    },
    [categories]
  );

  const handleMouseMoveGlobal = useCallback(
    (e: MouseEvent) => {
      if (hoveredCategory && dropdownRef.current) {
        const rect = dropdownRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * 0.08;
        const deltaY = (e.clientY - centerY) * 0.08;
        setMousePos({ x: deltaX, y: deltaY });
      }
    },
    [hoveredCategory]
  );

  useEffect(() => {
    if (hoveredCategory) {
      window.addEventListener("mousemove", handleMouseMoveGlobal);
    } else {
      setMousePos({ x: 0, y: 0 });
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMoveGlobal);
    };
  }, [hoveredCategory, handleMouseMoveGlobal]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    setIsDragging(true);
    setClickPrevented(false);
    const x = e.pageX - scrollRef.current.offsetLeft;
    setStartX(x);
    setLastX(x);
    setScrollLeft(scrollRef.current.scrollLeft);
    setLastTime(Date.now());
    setVelocity(0);
    setHoveredCategory(null);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;
    const currentTime = Date.now();
    const timeDelta = currentTime - lastTime;

    if (Math.abs(x - startX) > 5) {
      setClickPrevented(true);
      setHoveredCategory(null);
    }

    if (timeDelta > 0) {
      const newVelocity = ((x - lastX) / timeDelta) * 16;
      setVelocity(velocity * 0.3 + newVelocity * 0.7);
    }

    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;

    setLastX(x);
    setLastTime(currentTime);
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    if (Math.abs(velocity) > 0.3 && scrollRef.current) {
      let currentVelocity = velocity;
      const friction = 0.92;
      const minVelocity = 0.3;

      const animate = () => {
        if (!scrollRef.current) return;

        currentVelocity *= friction;

        if (Math.abs(currentVelocity) < minVelocity) {
          animationRef.current = null;
          setTimeout(() => {
            setClickPrevented(false);
          }, 50);
          return;
        }

        scrollRef.current.scrollLeft -= currentVelocity;
        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
    } else {
      setTimeout(() => {
        setClickPrevented(false);
      }, 50);
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <React.Fragment>
      <div className="hidden lg:block sticky top-0 z-50 bg-white">
        <header>
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
                <HeartIcon />
                <ShippingCart />
              </div>
            </div>
          </div>
        </header>
        <nav className="bg-white relative">
          <div className="container mx-auto pl-4 flex items-center justify-between h-14 text-sm font-medium text-gray-700">
            <div className="flex items-center gap-8 pr-2">
              <Button
                variant="outline"
                className="flex items-center gap-2 px-2 bg-transparent"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-5 w-5" />
                SHOP BY CATEGORIES
              </Button>
            </div>
            <div className="relative w-full overflow-hidden">
              <div
                ref={scrollRef}
                className="flex gap-2 px-2 w-full items-center overflow-x-auto scrollbar-hide select-none"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  cursor: isDragging ? "grabbing" : "grab",
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                {categories.map((cat) => (
                  <div
                    key={cat.categoryId}
                    className="relative"
                    onMouseEnter={() => {
                      if (!isDragging && !clickPrevented) {
                        setHoveredCategory(cat.title);
                      }
                    }}
                    onMouseLeave={() => {
                      setHoveredCategory(null);
                    }}
                  >
                    <Link
                      href={cat.href}
                      className="block px-2 py-2 whitespace-nowrap text-sm font-medium hover:text-red-500 cursor-pointer transition-colors"
                      draggable={false}
                      onClick={(e) => {
                        if (clickPrevented) {
                          e.preventDefault();
                        }
                      }}
                    >
                      {cat.title}
                    </Link>
                  </div>
                ))}
              </div>
              <AnimatePresence>
                {hoveredCategory &&
                  getCategoryByTitle(hoveredCategory)?.subcategories && (
                    <motion.div
                      ref={dropdownRef}
                      initial={{
                        opacity: 0,
                        y: -8,
                        scale: 0.95,
                        filter: "blur(4px)",
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                        x: mousePos.x,
                        rotateX: mousePos.y * -0.5,
                        rotateY: mousePos.x * 0.3,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.96,
                        filter: "blur(3px)",
                        transition: { duration: 0.15 },
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.16, 1, 0.3, 1],
                        x: { type: "spring", stiffness: 150, damping: 20 },
                        rotateX: {
                          type: "spring",
                          stiffness: 150,
                          damping: 20,
                        },
                        rotateY: {
                          type: "spring",
                          stiffness: 150,
                          damping: 20,
                        },
                      }}
                      className="fixed bg-white z-[100px] min-w-[200px] rounded-bl-xl mt-2 overflow-hidden"
                      style={{
                        top: scrollRef.current
                          ? scrollRef.current.getBoundingClientRect().bottom
                          : 0,
                        left: (() => {
                          const categoryElement =
                            scrollRef.current?.querySelector(
                              `a[href*="catId=${
                                getCategoryByTitle(hoveredCategory)?.categoryId
                              }"]`
                            );
                          return categoryElement
                            ? categoryElement.getBoundingClientRect().left
                            : 0;
                        })(),
                        transformStyle: "preserve-3d",
                        perspective: "1200px",
                      }}
                      onMouseEnter={() => setHoveredCategory(hoveredCategory)}
                      onMouseLeave={() => setHoveredCategory(null)}
                    >
                      <motion.div
                        className="absolute -inset-full opacity-30"
                        transition={{
                          duration: 8,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      />
                      <div className="py-1.5 relative z-10">
                        {getCategoryByTitle(
                          hoveredCategory
                        )?.subcategories?.map((sub, index) => (
                          <motion.div
                            key={sub.subcategoryId}
                            initial={{ opacity: 0, x: -16 }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.03,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                          >
                            <Link
                              href={sub.href}
                              className="relative block px-5 py-2 text-sm text-gray-700 font-medium transition-all duration-200 group overflow-hidden"
                            >
                              <motion.div
                                className="absolute inset-0"
                                initial={false}
                                whileHover={{
                                  scale: [1, 1.02, 1],
                                }}
                                transition={{
                                  duration: 0.4,
                                  ease: "easeInOut",
                                }}
                              />

                              <motion.div
                                className="absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-red-500 via-red-400 to-red-500 opacity-0 group-hover:opacity-100"
                                initial={false}
                                whileHover={{
                                  scaleY: [0, 1],
                                }}
                                transition={{
                                  duration: 0.3,
                                  ease: [0.16, 1, 0.3, 1],
                                }}
                              />

                              <motion.span
                                className="relative z-10 inline-block group-hover:text-red-600 transition-colors duration-200"
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.2 }}
                              >
                                {sub.title}
                              </motion.span>

                              <motion.span
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 opacity-0 group-hover:opacity-100 text-xs"
                                initial={{ x: -4, opacity: 0 }}
                                whileHover={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                              >
                                →
                              </motion.span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                    </motion.div>
                  )}
              </AnimatePresence>
            </div>
            <div className="flex items-center gap-2 text-sm w-90 text-black pl-2">
              <Rocket className="h-5 w-5" />
              Free International Delivery
            </div>
          </div>
        </nav>
      </div>
      <div className="lg:hidden fixed inset-0 flex flex-col z-50 pointer-events-none">
        <div className="pointer-events-auto bg-white">
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
                key={cat.categoryId}
                href={cat.href}
                onClick={() => setIsOpen(false)}
                className="px-2 py-2 text-sm sm:text-base font-semibold text-gray-700 hover:text-red-500 hover:bg-pink-100 rounded-full transition-all duration-200 whitespace-nowrap snap-center"
              >
                {cat.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="pointer-events-auto mt-auto border-t bg-gray-50">
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
        <SheetContent side="left" className="w-64 p-0 text-xs">
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
            <SheetTitle className="text-sm">SHOP BY CATEGORIES</SheetTitle>
          </SheetHeader>
          <div
            className="flex flex-col overflow-y-auto [&::-webkit-scrollbar]:w-1 scrollbar [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:hover:bg-gray-400 group-hover:text-red-500"
            style={{ maxHeight: "calc(100vh - 180px)" }}
          >
            {categories.map((category) => (
              <Collapsible
                key={category.categoryId}
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
                        <Minus className="h-3.5 w-3.5 text-gray-600" />
                      ) : (
                        <Plus className="h-3.5 w-3.5 text-gray-600" />
                      )}
                    </button>
                  </CollapsibleTrigger>
                </div>
                {category.subcategories && (
                  <CollapsibleContent>
                    <div className="flex flex-col">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub.subcategoryId}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="px-8 py-2 text-gray-700 hover:text-red-600 text-xs"
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
    </React.Fragment>
  );
}
