import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const promoItems = [
  {
    id: 1,
    title: "Buy Men's Bags\nwith low price",
    price: "₹900",
    image: "/images/discover-unique-georgia.webp",
  },
  {
    id: 2,
    title: "Buy Apple Iphone",
    price: "₹75000",
    image: "/images/discover-unique-georgia.webp",
  },
  {
    id: 3,
    title: "Buy Men's Footwear\nwith low price",
    price: "₹1500",
    image: "/images/discover-unique-georgia.webp",
  },
  {
    id: 4,
    title: "Buy women\nwith low price",
    price: "₹999",
    image: "/images/discover-unique-georgia.webp",
  },
];

export default function PromoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1">
      {promoItems.map((item) => (
        <Card
          key={item.id}
          className="overflow-hidden border-0 bg-gray-600 py-0 rounded-md"
        >
          <CardContent className="p-0 relative group">
            <div className="flex items-center justify-center h-[200px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover w-full h-full hover:scale-110 transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-start justify-center px-4 text-left pointer-events-none">
              <h3 className="text-xl font-bold text-white leading-tight whitespace-pre-line mb-3">
                {item.title}
              </h3>
              <div className="flex items-end gap-4 mb-4">
                <span className="text-lg font-extrabold text-red-600">
                  {item.price}
                </span>
              </div>
              <Button
                variant="link"
                className="text-white font-semibold underline underline-offset-4 p-0 h-auto pointer-events-auto hover:text-red-500 cursor-pointer"
              >
                SHOP NOW
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
