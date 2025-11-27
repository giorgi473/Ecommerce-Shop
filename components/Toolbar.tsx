import { LayoutGrid, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ToolbarProps {
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  products: Array<any>;
}

function Toolbar({ viewMode, setViewMode, products }: ToolbarProps) {
  return (
    <div className="flex items-center justify-between bg-gray-50 pl-1 pr-3 py-4 z-20 sticky top-[112.2px] lg:top-[136px]">
      <div className="flex items-center gap-2">
        <Button
          variant={viewMode === "list" ? "default" : "ghost"}
          size="icon"
          onClick={() => setViewMode("list")}
        >
          <Menu className="w-5 h-5" />
        </Button>
        <Button
          variant={viewMode === "grid" ? "default" : "ghost"}
          size="icon"
          onClick={() => setViewMode("grid")}
        >
          <LayoutGrid className="w-5 h-5" />
        </Button>
        <span className="ml-2 text-sm">
          There are {products.length} products.
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Sort By</span>
        <Select defaultValue="name-asc">
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name-asc">Name, A To Z</SelectItem>
            <SelectItem value="name-desc">Name, Z To A</SelectItem>
            <SelectItem value="price-asc">Price, Low to High</SelectItem>
            <SelectItem value="price-desc">Price, High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default Toolbar;
