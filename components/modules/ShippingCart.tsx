"use client";

import { useState } from "react";
import { ShoppingCart, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function ShippingCartSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeFromCart, getTotalPrice } = useCart();

  const handleRemove = (itemId: string) => {
    removeFromCart(itemId);
    toast.success("Item Removed");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2.5 rounded-full cursor-pointer transition-all duration-300 group hover:bg-gray-100 active:scale-95"
      >
        <ShoppingCart className="h-6 w-6 group-hover:text-primary z-10" />
        <Badge className="absolute top-1.5 right-0.5 h-3 w-3 p-2 rounded-full text-primary-foreground text-xs font-medium flex items-center justify-center bg-gray-500 group-hover:bg-red-600 group-hover:scale-110 transition-all z-20">
          {items.length}
        </Badge>
      </button>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          side="right"
          className="w-full sm:w-[480px] p-0 flex flex-col bg-white"
        >
          <SheetTitle className="sr-only">Shopping Cart</SheetTitle>

          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-500 px-6">
              <div className="w-48 h-48 mb-2 relative">
                <Image
                  src="/cartEmtyImage/empty-cart.png"
                  alt="empty-cart-image"
                  width={192}
                  height={192}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Your Cart is currently empty
              </h2>
              <Button
                onClick={() => setIsOpen(false)}
                className="bg-red-400 px-5 hover:bg-red-500 text-white py-2 text-xs rounded-sm"
              >
                CONTINUE SHOPPING
              </Button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="flex items-center justify-between px-2 py-3 border-b">
                <h2 className="text-xl font-semibold text-gray-900">
                  Shopping Cart ({items.length})
                </h2>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto px-2 py-1">
                <div className="space-y-2">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 items-center border-b pb-2"
                    >
                      {/* Product Image */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title_ka}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover hover:scale-125 transition-all duration-300 ease-in-out"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900 line-clamp-1">
                          {item.title_ka?.substring(0, 20)}...
                        </h3>
                        <div className="flex items-center gap-1 mt-2">
                          <p className="text-sm text-gray-600">
                            Qty : {item.quantity}
                          </p>
                          <p className="text-base font-semibold text-red-500">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>

                      {/* Delete Button */}
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="shrink-0 p-1 cursor-pointer text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t px-4 py-2 space-y-4 bg-white">
                {/* Item Count and Total */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 font-medium">
                    {items.length} item{items.length !== 1 ? "s" : ""}
                  </span>
                  <span className="text-lg font-semibold text-red-500">
                    ₹{getTotalPrice().toFixed(2)}
                  </span>
                </div>

                {/* Total (tax excl.) */}
                <div className="flex items-center justify-between py-2 border-t border-b">
                  <span className="text-gray-900 font-semibold">
                    Total (tax excl.)
                  </span>
                  <span className="text-lg font-semibold text-red-500">
                    ₹{getTotalPrice().toFixed(2)}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2 pb-4">
                  <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white cursor-pointer font-semibold py-3 text-base rounded-md">
                    VIEW CART
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-2 border-red-500 text-red-500 cursor-pointer hover:bg-red-50 hover:text-red-600 font-semibold py-3 text-base bg-white rounded-md"
                  >
                    CHECKOUT
                  </Button>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
