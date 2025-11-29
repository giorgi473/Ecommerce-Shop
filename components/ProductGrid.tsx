// /* eslint-disable prefer-const */
// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";
// import { Skeleton } from "@/components/ui/skeleton";
// import { ShoppingCart, Heart, Eye, Share2 } from "lucide-react";
// import Toolbar from "@/components/Toolbar";
// import ProductListItem from "@/components/modules/ProductListItem";

// interface Product {
//   id: string;
//   title_ka: string;
//   description_short_ka: string;
//   price: number;
//   rating: number;
//   logo_image: string;
//   images: string[];
// }

// interface ProductType {
//   type_name_ka: string;
//   products: Product[];
// }

// interface Subcategory {
//   subcategory_id: string;
//   subcategory_name_ka: string;
//   product_types: ProductType[];
// }

// interface ApiCategory {
//   category_id: string;
//   category_name_ka: string;
//   subcategories: Subcategory[];
// }

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

// export function ProductGrid() {
//   const searchParams = useSearchParams();
//   const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
//   const [sortBy, setSortBy] = useState<string>("name-asc");
//   const [products, setProducts] = useState<FormattedProduct[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<FormattedProduct[]>(
//     []
//   );
//   const [loading, setLoading] = useState(true);

//   // დალაგების ფუნქცია
//   const sortProducts = (
//     productsToSort: FormattedProduct[],
//     sortOption: string
//   ): FormattedProduct[] => {
//     const sorted = [...productsToSort];

//     switch (sortOption) {
//       case "name-asc":
//         sorted.sort((a, b) => a.title.localeCompare(b.title, "ka"));
//         break;
//       case "name-desc":
//         sorted.sort((a, b) => b.title.localeCompare(a.title, "ka"));
//         break;
//       case "price-asc":
//         sorted.sort((a, b) => a.price - b.price);
//         break;
//       case "price-desc":
//         sorted.sort((a, b) => b.price - a.price);
//         break;
//       default:
//         break;
//     }

//     return sorted;
//   };

//   // Fetch all products
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/blog");
//         if (!response.ok) throw new Error("Failed to fetch");
//         const data: ApiCategory[] = await response.json();

//         // Format all products
//         const allProducts: FormattedProduct[] = [];
//         data.forEach((cat) => {
//           cat.subcategories.forEach((sub) => {
//             sub.product_types.forEach((type) => {
//               type.products.forEach((prod) => {
//                 allProducts.push({
//                   id: prod.id,
//                   title: prod.title_ka,
//                   description: prod.description_short_ka,
//                   brand: type.type_name_ka,
//                   rating: Math.floor(prod.rating),
//                   price: prod.price,
//                   image: [prod.logo_image, ...prod.images],
//                   discountedPrice: prod.price,
//                   originalPrice: prod.price * 1.2,
//                 });
//               });
//             });
//           });
//         });

//         setProducts(allProducts);
//         setFilteredProducts(sortProducts(allProducts, sortBy));
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // დალაგება როდესაც sortBy იცვლება
//   useEffect(() => {
//     setFilteredProducts(sortProducts(filteredProducts, sortBy));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [sortBy]);

//   // Filter products based on query params
//   useEffect(() => {
//     const catId = searchParams.get("catId");
//     const subCatId = searchParams.get("subCatId");
//     const minPrice = searchParams.get("minPrice");
//     const maxPrice = searchParams.get("maxPrice");
//     const ratings = searchParams.get("ratings");

//     let filtered = [...products];

//     // Filter by category/subcategory
//     if (catId || subCatId) {
//       const fetchAndFilter = async () => {
//         try {
//           const response = await fetch("http://localhost:3000/api/blog");
//           const data: ApiCategory[] = await response.json();

//           let categoryProducts: FormattedProduct[] = [];
//           const catIds = catId ? catId.split(",") : [];

//           data.forEach((cat) => {
//             if (!catId || catIds.includes(cat.category_id)) {
//               cat.subcategories.forEach((sub) => {
//                 if (!subCatId || sub.subcategory_id === subCatId) {
//                   sub.product_types.forEach((type) => {
//                     type.products.forEach((prod) => {
//                       categoryProducts.push({
//                         id: prod.id,
//                         title: prod.title_ka,
//                         description: prod.description_short_ka,
//                         brand: type.type_name_ka,
//                         rating: Math.floor(prod.rating),
//                         price: prod.price,
//                         image: [prod.logo_image, ...prod.images],
//                         discountedPrice: prod.price,
//                         originalPrice: prod.price * 1.2,
//                       });
//                     });
//                   });
//                 }
//               });
//             }
//           });

//           let result =
//             categoryProducts.length > 0 ? categoryProducts : products;

//           if (minPrice || maxPrice) {
//             const min = parseInt(minPrice || "0");
//             const max = parseInt(maxPrice || "3530");
//             result = result.filter((p) => p.price >= min && p.price <= max);
//           }

//           if (ratings) {
//             const selectedRatings = ratings.split(",").map(Number);
//             result = result.filter((p) => selectedRatings.includes(p.rating));
//           }

//           setFilteredProducts(sortProducts(result, sortBy));
//         } catch (error) {
//           console.error("Error filtering products:", error);
//           setFilteredProducts(sortProducts(filtered, sortBy));
//         }
//       };

//       fetchAndFilter();
//     } else {
//       if (minPrice || maxPrice) {
//         const min = parseInt(minPrice || "0");
//         const max = parseInt(maxPrice || "3530");
//         filtered = filtered.filter((p) => p.price >= min && p.price <= max);
//       }

//       if (ratings) {
//         const selectedRatings = ratings.split(",").map(Number);
//         filtered = filtered.filter((p) => selectedRatings.includes(p.rating));
//       }

//       setFilteredProducts(sortProducts(filtered, sortBy));
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [searchParams, products]);

//   if (loading) {
//     return (
//       <div className="space-y-4">
//         <div className="h-17 bg-gray-50 mt-29 lg:mt-0 lg:sticky lg:top-[136px]" />
//         <div
//           className={
//             viewMode === "grid"
//               ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2"
//               : "space-y-4"
//           }
//         >
//           {Array.from({ length: 20 }).map((_, i) =>
//             viewMode === "grid" ? (
//               <ProductCardSkeleton key={i} />
//             ) : (
//               <ProductListItemSkeleton key={i} />
//             )
//           )}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-4">
//       <Toolbar
//         viewMode={viewMode}
//         setViewMode={setViewMode}
//         sortBy={sortBy}
//         setSortBy={setSortBy}
//         products={filteredProducts}
//       />
//       {viewMode === "grid" ? (
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       ) : (
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:block gap-2 sm:gap-3">
//           {filteredProducts.map((product) => (
//             <ProductListItem key={product.id} product={product} />
//           ))}
//         </div>
//       )}
//       {filteredProducts.length === 0 && (
//         <div className="text-center py-12 text-gray-500">
//           No products found matching your filters.
//         </div>
//       )}
//     </div>
//   );
// }

// function ProductCardSkeleton() {
//   return (
//     <Card className="border-0 rounded-sm overflow-hidden flex flex-col bg-white">
//       <div className="relative aspect-3/3 w-full overflow-hidden bg-gray-100 -mt-6">
//         <Skeleton className="w-full h-full" />
//       </div>

//       <div className="px-4 space-y-2 flex-1 flex flex-col justify-between py-1">
//         <div className="space-y-2">
//           <Skeleton className="h-3 w-16" />
//           <Skeleton className="h-4 w-full" />
//           <Skeleton className="h-4 w-3/4" />
//         </div>

//         <Skeleton className="h-4 w-20" />

//         <div className="flex items-center gap-2">
//           <Skeleton className="h-4 w-24" />
//           <Skeleton className="h-4 w-16" />
//         </div>

//         <Skeleton className="h-8 w-full" />
//       </div>
//     </Card>
//   );
// }

// function ProductListItemSkeleton() {
//   return (
//     <Card className="border-0 rounded-sm overflow-hidden flex bg-white">
//       <div className="relative w-64 h-96 overflow-hidden bg-gray-100">
//         <Skeleton className="w-full h-full" />
//       </div>
//       <div className="flex-1 flex p-6">
//         <div className="flex-1 flex flex-col justify-between">
//           <div className="space-y-3">
//             <Skeleton className="h-3 w-24" />
//             <Skeleton className="h-6 w-80" />
//             <Skeleton className="h-16 w-full" />
//           </div>
//           <div className="flex items-end gap-6">
//             <div className="space-y-3">
//               <Skeleton className="h-4 w-32" />
//               <Skeleton className="h-8 w-40" />
//             </div>
//             <Skeleton className="h-12 w-48" />
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// }

// function ProductCard({ product }: { product: FormattedProduct }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const currentImage =
//     isHovered && product.image[1] ? product.image[1] : product.image[0];

//   return (
//     <Card
//       className="border-0 rounded-sm overflow-hidden group flex flex-col bg-white cursor-pointer relative"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {(product.discount ?? 0) > 0 && (
//         <div className="absolute top-3 left-3 z-20">
//           <Badge className="bg-red-500 text-white text-xs font-bold">
//             -{product.discount}%
//           </Badge>
//         </div>
//       )}

//       <div className="relative aspect-3/3 w-full overflow-hidden bg-gray-100 -mt-6">
//         <Image
//           src={currentImage || "/placeholder.svg"}
//           alt={product.title}
//           fill
//           className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
//           sizes="(max-width: 1024px) 100vw, 33vw"
//         />
//         <div className="absolute inset-0 bg-black/10 pointer-events-none" />

//         {/* Hover Action Buttons */}
//         <div
//           className={`absolute top-4 right-3 flex flex-col gap-3 z-30 transition-all duration-400 ease-out ${
//             isHovered
//               ? "translate-y-0 opacity-100"
//               : "-translate-y-12 opacity-0"
//           }`}
//         >
//           <button className="bg-white hover:bg-red-400 text-gray-700 w-5 h-5 lg:w-7 lg:h-7 rounded-full flex items-center justify-center transition-all shadow-md">
//             <Heart className="w-3 h-3 lg:w-4 lg:h-4" />
//           </button>
//           <button className="bg-white hover:bg-red-400 text-gray-700 w-5 h-5 lg:w-7 lg:h-7 rounded-full flex items-center justify-center transition-all shadow-md">
//             <Eye className="w-3 h-3 lg:w-4 lg:h-4" />
//           </button>
//           <button className="bg-white hover:bg-red-400 text-gray-700 w-5 h-5 lg:w-7 lg:h-7 rounded-full flex items-center justify-center transition-all shadow-md">
//             <Share2 className="w-3 h-3 lg:w-4 lg:h-4" />
//           </button>
//         </div>
//       </div>

//       <div className="px-4 space-y-2 flex-1 flex flex-col justify-between">
//         <div>
//           <p className="text-xs text-muted-foreground">{product.brand}</p>
//           <h3 className="font-medium text-foreground text-sm line-clamp-2">
//             {product.title}
//           </h3>
//         </div>

//         <div className="flex items-center gap-1">
//           <span className="text-yellow-500">
//             {"★".repeat(product.rating)}
//             {"☆".repeat(5 - product.rating)}
//           </span>
//           <span className="text-xs">({product.rating})</span>
//         </div>

//         <div className="flex items-center gap-2">
//           <span className="text-muted-foreground line-through text-sm">
//             ${product.originalPrice.toFixed(2)}
//           </span>
//           <span className="text-red-500 text-md font-semibold">
//             ${product.discountedPrice.toFixed(2)}
//           </span>
//         </div>

//         <Button
//           variant="outline"
//           size={"sm"}
//           className="w-full text-xs text-red-500 border-red-500 hover:bg-red-50 hover:text-red-600 bg-transparent font-semibold"
//         >
//           <ShoppingCart className="w-4 h-4 mr-2" />
//           Add to Cart
//         </Button>
//       </div>
//     </Card>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCart, Heart, Eye, Share2 } from "lucide-react";
import Toolbar from "@/components/Toolbar";
import ProductListItem from "@/components/modules/ProductListItem";

interface Product {
  id: string;
  title_ka: string;
  description_short_ka: string;
  price: number;
  rating: number;
  logo_image: string;
  images: string[];
}

interface ProductType {
  type_name_ka: string;
  products: Product[];
}

interface Subcategory {
  subcategory_id: string;
  subcategory_name_ka: string;
  product_types: ProductType[];
}

interface ApiCategory {
  category_id: string;
  category_name_ka: string;
  subcategories: Subcategory[];
}

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

export function ProductGrid() {
  const searchParams = useSearchParams();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<string>("name-asc");
  const [products, setProducts] = useState<FormattedProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<FormattedProduct[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  // დალაგების ფუნქცია
  const sortProducts = (
    productsToSort: FormattedProduct[],
    sortOption: string
  ): FormattedProduct[] => {
    const sorted = [...productsToSort];

    switch (sortOption) {
      case "name-asc":
        sorted.sort((a, b) => a.title.localeCompare(b.title, "ka"));
        break;
      case "name-desc":
        sorted.sort((a, b) => b.title.localeCompare(a.title, "ka"));
        break;
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return sorted;
  };

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/blog");
        if (!response.ok) throw new Error("Failed to fetch");
        const data: ApiCategory[] = await response.json();

        // Format all products
        const allProducts: FormattedProduct[] = [];
        data.forEach((cat) => {
          cat.subcategories.forEach((sub) => {
            sub.product_types.forEach((type) => {
              type.products.forEach((prod) => {
                allProducts.push({
                  id: prod.id,
                  title: prod.title_ka,
                  description: prod.description_short_ka,
                  brand: type.type_name_ka,
                  rating: Math.floor(prod.rating),
                  price: prod.price,
                  image: [prod.logo_image, ...prod.images],
                  discountedPrice: prod.price,
                  originalPrice: prod.price * 1.2,
                });
              });
            });
          });
        });

        setProducts(allProducts);
        setFilteredProducts(sortProducts(allProducts, sortBy));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // დალაგება როდესაც sortBy იცვლება
  useEffect(() => {
    setFilteredProducts(sortProducts(filteredProducts, sortBy));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy]);

  // Filter products based on query params
  useEffect(() => {
    const catId = searchParams.get("catId");
    const subCatId = searchParams.get("subCatId");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const ratings = searchParams.get("ratings");

    let filtered = [...products];

    // Filter by category/subcategory
    if (catId || subCatId) {
      const fetchAndFilter = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/blog");
          const data: ApiCategory[] = await response.json();

          const categoryProducts: FormattedProduct[] = [];
          const catIds = catId ? catId.split(",") : [];

          data.forEach((cat) => {
            if (!catId || catIds.includes(cat.category_id)) {
              cat.subcategories.forEach((sub) => {
                if (!subCatId || sub.subcategory_id === subCatId) {
                  sub.product_types.forEach((type) => {
                    type.products.forEach((prod) => {
                      categoryProducts.push({
                        id: prod.id,
                        title: prod.title_ka,
                        description: prod.description_short_ka,
                        brand: type.type_name_ka,
                        rating: Math.floor(prod.rating),
                        price: prod.price,
                        image: [prod.logo_image, ...prod.images],
                        discountedPrice: prod.price,
                        originalPrice: prod.price * 1.2,
                      });
                    });
                  });
                }
              });
            }
          });

          let result =
            categoryProducts.length > 0 ? categoryProducts : products;

          if (minPrice || maxPrice) {
            const min = parseInt(minPrice || "0");
            const max = parseInt(maxPrice || "3530");
            result = result.filter((p) => p.price >= min && p.price <= max);
          }

          if (ratings) {
            const selectedRatings = ratings.split(",").map(Number);
            result = result.filter((p) => selectedRatings.includes(p.rating));
          }

          setFilteredProducts(sortProducts(result, sortBy));
        } catch (error) {
          console.error("Error filtering products:", error);
          setFilteredProducts(sortProducts(filtered, sortBy));
        }
      };

      fetchAndFilter();
    } else {
      if (minPrice || maxPrice) {
        const min = parseInt(minPrice || "0");
        const max = parseInt(maxPrice || "3530");
        filtered = filtered.filter((p) => p.price >= min && p.price <= max);
      }

      if (ratings) {
        const selectedRatings = ratings.split(",").map(Number);
        filtered = filtered.filter((p) => selectedRatings.includes(p.rating));
      }

      setFilteredProducts(sortProducts(filtered, sortBy));
    }
  }, [searchParams, products, sortBy]);

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="h-17 bg-gray-50 mt-29 lg:mt-0 lg:sticky lg:top-[136px]" />
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2"
              : "space-y-4"
          }
        >
          {Array.from({ length: 20 }).map((_, i) =>
            viewMode === "grid" ? (
              <ProductCardSkeleton key={i} />
            ) : (
              <ProductListItemSkeleton key={i} />
            )
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Toolbar
        viewMode={viewMode}
        setViewMode={setViewMode}
        sortBy={sortBy}
        setSortBy={setSortBy}
        products={filteredProducts}
      />
      {viewMode === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:block gap-2 sm:gap-3">
          {filteredProducts.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </div>
      )}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No products found matching your filters.
        </div>
      )}
    </div>
  );
}

function ProductCardSkeleton() {
  return (
    <Card className="border-0 rounded-sm overflow-hidden flex flex-col bg-white">
      <div className="relative aspect-3/3 w-full overflow-hidden bg-gray-100 -mt-6">
        <Skeleton className="w-full h-full" />
      </div>

      <div className="px-4 space-y-2 flex-1 flex flex-col justify-between py-1">
        <div className="space-y-2">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>

        <Skeleton className="h-4 w-20" />

        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-16" />
        </div>

        <Skeleton className="h-8 w-full" />
      </div>
    </Card>
  );
}

function ProductListItemSkeleton() {
  return (
    <Card className="border-0 rounded-sm overflow-hidden flex bg-white">
      <div className="relative w-64 h-96 overflow-hidden bg-gray-100">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="flex-1 flex p-6">
        <div className="flex-1 flex flex-col justify-between">
          <div className="space-y-3">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-6 w-80" />
            <Skeleton className="h-16 w-full" />
          </div>
          <div className="flex items-end gap-6">
            <div className="space-y-3">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-8 w-40" />
            </div>
            <Skeleton className="h-12 w-48" />
          </div>
        </div>
      </div>
    </Card>
  );
}

function ProductCard({ product }: { product: FormattedProduct }) {
  const [isHovered, setIsHovered] = useState(false);
  const currentImage =
    isHovered && product.image[1] ? product.image[1] : product.image[0];

  return (
    <Card
      className="border-0 rounded-sm overflow-hidden group flex flex-col bg-white cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {(product.discount ?? 0) > 0 && (
        <div className="absolute top-3 left-3 z-20">
          <Badge className="bg-red-500 text-white text-xs font-bold">
            -{product.discount}%
          </Badge>
        </div>
      )}

      <div className="relative aspect-3/3 w-full overflow-hidden bg-gray-100 -mt-6">
        <Image
          src={currentImage || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        {/* Hover Action Buttons */}
        <div
          className={`absolute top-4 right-3 flex flex-col gap-3 z-30 transition-all duration-400 ease-out ${
            isHovered
              ? "translate-y-0 opacity-100"
              : "-translate-y-12 opacity-0"
          }`}
        >
          <button className="bg-white hover:bg-red-400 text-gray-700 w-5 h-5 lg:w-7 lg:h-7 rounded-full flex items-center justify-center transition-all shadow-md">
            <Heart className="w-3 h-3 lg:w-4 lg:h-4" />
          </button>
          <button className="bg-white hover:bg-red-400 text-gray-700 w-5 h-5 lg:w-7 lg:h-7 rounded-full flex items-center justify-center transition-all shadow-md">
            <Eye className="w-3 h-3 lg:w-4 lg:h-4" />
          </button>
          <button className="bg-white hover:bg-red-400 text-gray-700 w-5 h-5 lg:w-7 lg:h-7 rounded-full flex items-center justify-center transition-all shadow-md">
            <Share2 className="w-3 h-3 lg:w-4 lg:h-4" />
          </button>
        </div>
      </div>

      <div className="px-4 space-y-2 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs text-muted-foreground">{product.brand}</p>
          <h3 className="font-medium text-foreground text-sm line-clamp-2">
            {product.title}
          </h3>
        </div>

        <div className="flex items-center gap-1">
          <span className="text-yellow-500">
            {"★".repeat(product.rating)}
            {"☆".repeat(5 - product.rating)}
          </span>
          <span className="text-xs">({product.rating})</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-muted-foreground line-through text-sm">
            ${product.originalPrice.toFixed(2)}
          </span>
          <span className="text-red-500 text-md font-semibold">
            ${product.discountedPrice.toFixed(2)}
          </span>
        </div>

        <Button
          variant="outline"
          size={"sm"}
          className="w-full text-xs text-red-500 border-red-500 hover:bg-red-50 hover:text-red-600 bg-transparent font-semibold"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
}
