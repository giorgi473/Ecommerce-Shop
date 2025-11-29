// import { ProductGrid } from "@/components/ProductGrid";

// function page() {
//   return (
//     <div className="flex-1 min-w-0">
//       <ProductGrid />
//     </div>
//   );
// }

// export default page;
// /app/(dashboard)/products/page.tsx

import { Suspense } from "react"; // 👈 დაამატეთ ეს იმპორტი
import { ProductGrid } from "@/components/ProductGrid";

function page() {
  return (
    <div className="flex-1 min-w-0">
      <Suspense fallback={<div>Loading...</div>}>
        <ProductGrid />
      </Suspense>
    </div>
  );
}

export default page;
