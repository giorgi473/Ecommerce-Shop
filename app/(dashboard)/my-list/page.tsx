"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useHeart } from "@/context/HeartContext";
import { X } from "lucide-react";
import { toast } from "sonner";

function Page() {
  const { items, removeFromHeart } = useHeart();
  const number = items.length;

  const handleRemove = (id: string) => {
    removeFromHeart(id);
    toast.success("Removed from My List");
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">My List</h1>
        <p className="text-gray-600">
          There are <span className="text-red-500 font-semibold">{number}</span>{" "}
          products in your My List
        </p>
      </div>
      {number ? (
        <div className="space-y-4">
          {items.map((item) => (
            <Card key={item.id} className="border rounded-lg overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="relative w-48 h-48 shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title_ka}
                      fill
                      className="object-cover"
                      sizes="192px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-500 mb-1">{item.brand}</p>
                    <h3 className="font-medium text-lg mb-2 line-clamp-2">
                      {item.title_ka}
                    </h3>
                    <div className="flex items-center gap-1 mb-3">
                      <span className="text-yellow-400 text-lg">
                        {"★".repeat(item.rating)}
                        {"☆".repeat(5 - item.rating)}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold">₹{item.price}</span>
                      <span className="text-gray-400 line-through text-lg">
                        ₹{Math.round(item.price * 1.2)}
                      </span>
                      <span className="text-red-500 font-semibold">
                        {Math.round(
                          ((item.price * 1.2 - item.price) /
                            (item.price * 1.2)) *
                            100
                        )}
                        % OFF
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="shrink-0 hover:bg-gray-100 p-2 rounded-full transition-colors"
                    aria-label="Remove from list"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <React.Fragment>
          <div className="flex flex-col items-center justify-center gap-4 select-none py-12">
            <div>
              <Image
                src={"/images/bla.png"}
                alt="Empty list"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                My List is currently empty
              </h3>
            </div>
            <Link href={"/"}>
              <button className="py-2 px-4 text-xs cursor-pointer bg-red-400 hover:bg-red-500 rounded-sm transition-all duration-300 ease-in-out uppercase text-white">
                continue shopping
              </button>
            </Link>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default Page;
