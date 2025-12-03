/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

export interface HeartItem {
  id: string;
  title_ka: string;
  price: number;
  image: string;
  brand: string;
  rating: number;
  description: string;
}

interface HeartContextType {
  items: HeartItem[];
  addToHeart: (item: HeartItem) => void;
  removeFromHeart: (id: string) => void;
  isInHeart: (id: string) => boolean;
  getTotalCount: () => number;
}

const HeartContext = createContext<HeartContextType | undefined>(undefined);
const HEART_STORAGE_KEY = "my_list";

export function HeartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<HeartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // localStorage-დან ჩატვირთვა
  useEffect(() => {
    try {
      const savedHeart = localStorage.getItem(HEART_STORAGE_KEY);
      if (savedHeart) {
        const parsedHeart = JSON.parse(savedHeart);
        setItems(parsedHeart);
      }
    } catch (error) {
      console.error("Error loading heart list from localStorage:", error);
    }
    setIsHydrated(true);
  }, []);

  // localStorage-ში შენახვა როდესაც items იცვლება
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(HEART_STORAGE_KEY, JSON.stringify(items));
      } catch (error) {
        console.error("Error saving heart list to localStorage:", error);
      }
    }
  }, [items, isHydrated]);

  const addToHeart = (newItem: HeartItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id);
      if (existingItem) {
        // თუ უკვე არსებობს, არ დაამატოთ
        return prevItems;
      }
      return [...prevItems, newItem];
    });
  };

  const removeFromHeart = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const isInHeart = (id: string) => {
    return items.some((item) => item.id === id);
  };

  const getTotalCount = () => {
    return items.length;
  };

  return (
    <HeartContext.Provider
      value={{
        items,
        addToHeart,
        removeFromHeart,
        isInHeart,
        getTotalCount,
      }}
    >
      {children}
    </HeartContext.Provider>
  );
}

export function useHeart() {
  const context = useContext(HeartContext);
  if (context === undefined) {
    throw new Error("useHeart must be used within a HeartProvider");
  }
  return context;
}
