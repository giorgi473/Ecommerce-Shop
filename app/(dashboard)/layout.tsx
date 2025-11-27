import { ProductFilters } from "@/components/ProductFilters";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-5 px-4 lg:container lg:mx-auto">
      <aside className="w-60 shrink-0 hidden lg:block">
        <ProductFilters />
      </aside>
      <main className="min-h-screen w-full">{children}</main>
    </div>
  );
}

export default layout;
