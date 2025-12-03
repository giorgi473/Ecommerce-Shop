// import { Heart } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import { useRouter } from "next/navigation";

// function HeartIcon() {
//   const router = useRouter();
//   return (
//     <button
//       onClick={() => router.push("my-list")}
//       className="relative p-2.5 rounded-full cursor-pointer transition-all duration-300 group hover:bg-gray-100 active:scale-95"
//     >
//       <Heart className="h-6 w-6 group-hover:text-primary z-10" />
//       <Badge
//         className="absolute top-1.5 right-0.5 h-3 w-3 p-2 rounded-full
//                          text-primary-foreground text-xs font-medium
//                          flex items-center justify-center bg-gray-500
//                          group-hover:bg-red-600 group-hover:scale-110
//                          transition-all z-20"
//       >
//         5
//       </Badge>
//     </button>
//   );
// }

// export default HeartIcon;
"use client";

import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { useHeart } from "@/context/HeartContext";

function HeartIcon() {
  const router = useRouter();
  const { getTotalCount } = useHeart();
  const heartCount = getTotalCount();

  return (
    <button
      onClick={() => router.push("my-list")}
      className="relative p-2.5 rounded-full cursor-pointer transition-all duration-300 group hover:bg-gray-100 active:scale-95"
    >
      <Heart className="h-6 w-6 group-hover:text-primary z-10" />
      {heartCount > 0 && (
        <Badge
          className="absolute top-1.5 right-0.5 h-3 w-3 p-2 rounded-full
                         text-primary-foreground text-xs font-medium
                         flex items-center justify-center bg-gray-500
                         group-hover:bg-red-600 group-hover:scale-110
                         transition-all z-20"
        >
          {heartCount}
        </Badge>
      )}
    </button>
  );
}

export default HeartIcon;
