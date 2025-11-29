// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, Variants } from "framer-motion";
// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";
// import { ShoppingCart, Heart, Share2, Maximize2 } from "lucide-react";

// interface FormattedProduct {
//   id: string;
//   title: string;
//   description: string;
//   brand: string;
//   rating: number;
//   price: number;
//   image: string[];
//   discount?: number;
//   discountedPrice: number;
//   originalPrice: number;
// }

// export default function ProductListItem({
//   product,
// }: {
//   product: FormattedProduct;
// }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const currentImage =
//     isHovered && product.image[1] ? product.image[1] : product.image[0];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0,
//       },
//     },
//   };

//   const iconVariants: Variants = {
//     hidden: { opacity: 0, y: -40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.1,
//         ease: "easeOut",
//       },
//     },
//     exit: { opacity: 0, y: -40, transition: { duration: 0.1 } },
//   };

//   return (
//     <Card className="border-0 rounded-lg overflow-hidden bg-gray-50 p-3">
//       <div className="flex gap-6">
//         <div
//           className="relative w-60 h-72 overflow-hidden bg-gray-100 rounded-lg shrink-0 group"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <Image
//             src={currentImage || "/placeholder.svg"}
//             alt={product.title}
//             fill
//             className="object-cover transition-all duration-500 ease-in-out group-hover:scale-110 cursor-pointer"
//             sizes="300px"
//           />
//           <div className="absolute inset-0 bg-black/5 pointer-events-none" />
//           {(product.discount ?? 0) > 0 && (
//             <div className="absolute top-4 left-4 z-20">
//               <Badge className="bg-red-500 text-white text-sm font-bold px-3 py-1">
//                 {product.discount}%
//               </Badge>
//             </div>
//           )}
//           <motion.div
//             className="absolute top-4 right-4 flex flex-col gap-4 z-30"
//             variants={containerVariants}
//             initial="hidden"
//             animate={isHovered ? "visible" : "hidden"}
//           >
//             <motion.button
//               variants={iconVariants}
//               className="bg-white hover:bg-red-500 hover:text-white text-gray-700 w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-lg"
//             >
//               <Maximize2 className="w-4 h-4" />
//             </motion.button>
//             <motion.button
//               variants={iconVariants}
//               className="bg-white hover:bg-red-500 hover:text-white text-gray-700 w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-lg"
//             >
//               <Heart className="w-4 h-4" />
//             </motion.button>
//             <motion.button
//               variants={iconVariants}
//               className="bg-white hover:bg-red-500 hover:text-white text-gray-700 w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-lg"
//             >
//               <Share2 className="w-4 h-4" />
//             </motion.button>
//           </motion.div>
//         </div>
//         <div className="flex-1 flex flex-col justify-between py-2">
//           <div>
//             <p className="text-sm text-gray-500 mb-2 font-medium">
//               {product.brand}
//             </p>
//             <h2 className="text-lg text-black mb-4">{product.title}</h2>
//             <p className="text-gray-600 text-sm leading-relaxed mb-6">
//               {product.description}
//             </p>
//           </div>
//           <div>
//             <div className="flex flex-col gap-4">
//               <div className="flex items-center gap-2">
//                 <div className="flex gap-1">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <span
//                       key={i}
//                       className={`text-xl ${
//                         i < product.rating ? "text-yellow-400" : "text-gray-300"
//                       }`}
//                     >
//                       ★
//                     </span>
//                   ))}
//                 </div>
//                 <span className="text-sm text-gray-600">
//                   ({product.rating})
//                 </span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <span className="text-gray-400 line-through text-lg">
//                   ₹{product.originalPrice.toFixed(2)}
//                 </span>
//                 <span className="text-red-500 text-lg">
//                   ₹{product.discountedPrice.toFixed(2)}
//                 </span>
//               </div>
//               <button className="w-fit flex items-center text-red-500 border-red-500 hover:bg-red-50 hover:text-red-600 bg-white border font-semibold text-xs h-9 px-10 whitespace-nowrap transition-all duration-300 rounded-sm cursor-pointer">
//                 <ShoppingCart className="w-5 h-5 mr-2" />
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// }
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Heart, Share2, Maximize2 } from "lucide-react";

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

export default function ProductListItem({
  product,
}: {
  product: FormattedProduct;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const currentImage =
    isHovered && product.image[1] ? product.image[1] : product.image[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0,
      },
    },
  };

  const iconVariants: Variants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
        ease: "easeOut",
      },
    },
    exit: { opacity: 0, y: -40, transition: { duration: 0.1 } },
  };

  return (
    <Card className="border-0 rounded-sm overflow-hidden bg-white lg:bg-gray-50 pt-0 lg:p-3 h-auto mb-5">
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 h-full">
        <div
          className="relative w-full lg:w-60 aspect-3/3 lg:h-72 overflow-hidden bg-gray-100 lg:rounded-sm shrink-0 group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={currentImage || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-cover transition-all duration-500 ease-in-out group-hover:scale-110 cursor-pointer"
            sizes="(max-width: 1024px) 100vw, 300px"
          />
          <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          {(product.discount ?? 0) > 0 && (
            <div className="absolute top-3 lg:top-4 left-3 lg:left-4 z-20">
              <Badge className="bg-red-500 text-white text-xs lg:text-sm font-bold px-2 lg:px-3 py-1">
                {product.discount}%
              </Badge>
            </div>
          )}
          <motion.div
            className="absolute top-3 lg:top-4 right-3 lg:right-4 flex flex-col gap-2 lg:gap-4 z-30"
            variants={containerVariants}
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
          >
            <motion.button
              variants={iconVariants}
              className="bg-white hover:bg-red-500 hover:text-white text-gray-700 w-6 lg:w-8 h-6 lg:h-8 rounded-full flex items-center justify-center transition-all shadow-lg"
            >
              <Maximize2 className="w-3 lg:w-4 h-3 lg:h-4" />
            </motion.button>
            <motion.button
              variants={iconVariants}
              className="bg-white hover:bg-red-500 hover:text-white text-gray-700 w-6 lg:w-8 h-6 lg:h-8 rounded-full flex items-center justify-center transition-all shadow-lg"
            >
              <Heart className="w-3 lg:w-4 h-3 lg:h-4" />
            </motion.button>
            <motion.button
              variants={iconVariants}
              className="bg-white hover:bg-red-500 hover:text-white text-gray-700 w-6 lg:w-8 h-7 lg:h-8 rounded-full flex items-center justify-center transition-all shadow-lg"
            >
              <Share2 className="w-3 lg:w-4 h-3 lg:h-4" />
            </motion.button>
          </motion.div>
        </div>
        <div className="flex-1 flex flex-col justify-between px-4 pt-2 lg:py-2">
          <div>
            <p className="text-xs lg:text-sm text-gray-500 lg:mb-2 font-medium">
              {product.brand}
            </p>
            <h2 className="text-sm lg:text-lg text-gray-700 font-semibold lg:mb-4">
              {product.title}
            </h2>
            <p className="text-gray-600 text-xs hidden lg:flex lg:text-sm leading-relaxed lg:mb-6">
              {product.description}
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-3 lg:gap-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5 lg:gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm lg:text-xl ${
                        i < product.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-xs lg:text-sm text-gray-600">
                  ({product.rating})
                </span>
              </div>
              <div className="flex items-center gap-2 lg:gap-3">
                <span className="text-gray-400 line-through text-xs lg:text-lg">
                  ₹{product.originalPrice.toFixed(2)}
                </span>
                <span className="text-red-500 text-sm lg:text-lg font-bold">
                  ₹{product.discountedPrice.toFixed(2)}
                </span>
              </div>
              <button className="w-full lg:w-fit flex items-center justify-center lg:justify-start text-red-500 border-red-500 hover:bg-red-50 hover:text-red-600 bg-white border font-semibold text-xs lg:text-sm h-8 lg:h-9 px-3 lg:px-10 whitespace-nowrap transition-all duration-300 rounded-sm cursor-pointer">
                <ShoppingCart className="w-4 lg:w-5 h-4 lg:h-5 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
