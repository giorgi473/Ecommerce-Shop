"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Expand,
  Heart,
  Loader2,
  Search,
  Share2,
  ShoppingCart,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";

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

function ExpentButton({ product }: { product: FormattedProduct }) {
  const [open, setOpen] = useState(false);
  const { addToCart, isInCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };
  const handleAddToCart = () => {
    if (product) {
      if (isInCart(product.id)) {
        toast.error("Item already in cart");
        return;
      }

      setIsAddingToCart(true);

      setTimeout(() => {
        addToCart({
          id: product.id,
          title_ka: product.title,
          price: product.price,
          quantity: quantity,
          image: product.image[0] || "/placeholder.svg",
        });
        setQuantity(1);
        setIsAddingToCart(false);
        toast.success("Item added successfully");
      }, 500);
    }
  };

  const productInCart = product ? isInCart(product.id) : false;

  const allImages =
    product.image.length > 0 ? product.image : ["/placeholder.svg"];

  const originalPrice = product.price * 1.2;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="bg-white hover:bg-red-400 text-gray-700 w-5 h-5 lg:w-7 lg:h-7 rounded-full flex items-center justify-center transition-all shadow-md">
          <Expand className="w-3 h-3 lg:w-4 lg:h-4" />
        </button>
      </DialogTrigger>

      <DialogContent
        className={cn("p-0 overflow-hidden w-full lg:max-w-6xl rounded-md")}
      >
        <VisuallyHidden>
          <DialogTitle>გაფართოებული ხედი</DialogTitle>
        </VisuallyHidden>
        <div className="container mx-auto px-4 py-8 max-w-7xl space-y-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="flex flex-col-reverse lg:flex-row gap-4">
              <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 mt-4 lg:mt-0">
                {allImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative shrink-0 w-15 h-15 overflow-hidden rounded-sm border-2 transition-all ${
                      selectedImage === index
                        ? "border-gray-400"
                        : "border-gray-300 opacity-50"
                    }`}
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${product.title} ${index + 1}`}
                      fill
                      className={`object-cover ${
                        selectedImage === index ? "" : "grayscale"
                      }`}
                      sizes="(max-width: 1024px) 80px, 96px"
                    />
                  </button>
                ))}
              </div>
              <div className="relative w-full aspect-square">
                <div
                  className="absolute inset-0 overflow-hidden rounded-sm bg-gray-50 cursor-zoom-in"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  onMouseMove={handleMouseMove}
                >
                  <Image
                    src={allImages[selectedImage] || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    priority
                    className="object-cover rounded-sm"
                    style={{
                      transform: isHovering
                        ? `scale(1.8) translate(${-mousePos.x * 0.3 + 100}px, ${
                            -mousePos.y * 0.3 + 100
                          }px)`
                        : "scale(1) translate(0, 0)",
                      transition: isHovering
                        ? "none"
                        : "transform 0.3s ease-out",
                    }}
                    sizes="(max-width: 1024px) 100vw, 100px"
                  />

                  {/* Zoom Indicator */}
                  {isHovering && (
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded px-3 py-1.5 flex items-center gap-1.5 text-xs font-medium text-gray-700 shadow-md z-10">
                      <Search className="w-3.5 h-3.5" />
                      გაზოომება
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <div>
                {product.brand && (
                  <p className="text-sm text-gray-500 mb-2 font-medium">
                    {product.brand}
                  </p>
                )}
                <h1 className="text-xl font-bold text-gray-900 leading-tight">
                  {product.title}
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <p>Brends: Fire-Boltt</p>
                  <span className="text-yellow-500 text-xl">
                    {"★".repeat(Math.floor(product.rating))}
                    {"☆".repeat(5 - Math.floor(product.rating))}
                  </span>
                  rewiew(0)
                </div>
              </div>
              <div className="border-b pb-6">
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-red-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-xl text-gray-400 line-through">
                    ${originalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>
              <div className="flex items-center gap-4 select-none">
                <div className="flex flex-col items-center relative justify-center border border-gray-300 rounded-sm px-5 py-3 w-16 h-10">
                  <div>
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity === 1}
                      className="h-auto mb-1 absolute right-0 top-0 px-1 rounded-tr-sm py-0.5 cursor-pointer hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <ChevronUp className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <span className="text-center font-semibold text-sm absolute left-4">
                    {quantity}
                  </span>
                  <div>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-0 h-auto mt-1 flex justify-end absolute right-0 bottom-0 px-1 rounded-br-sm py-0.5 cursor-pointer hover:bg-gray-300"
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                  className={`h-10 rounded px-5 text-base font-semibold flex items-center justify-center gap-2 transition-colors min-w-[161px] ${
                    productInCart
                      ? "bg-red-400 cursor-pointer hover:bg-red-500"
                      : isAddingToCart
                      ? "bg-red-400 cursor-wait"
                      : "bg-red-500 hover:bg-red-600 cursor-pointer"
                  } text-white`}
                >
                  {isAddingToCart ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      ADDING...
                    </>
                  ) : productInCart ? (
                    <>
                      <Check className="w-5 h-5" />
                      ADDED
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      ADD TO CART
                    </>
                  )}
                </button>
              </div>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <Heart size={15} />
                    Add to Wishlist
                  </div>
                  <div className="flex items-center gap-2">
                    <Share2 size={15} />
                    Add to Compare
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default ExpentButton;
