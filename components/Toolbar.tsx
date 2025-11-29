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
  sortBy: string;
  setSortBy: (value: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  products: Array<any>;
}

function Toolbar({
  viewMode,
  setViewMode,
  sortBy,
  setSortBy,
  products,
}: ToolbarProps) {
  return (
    <div className="flex items-center justify-between bg-gray-50 pl-2 pr-4 py-4 z-20 mt-29 lg:mt-0 lg:sticky lg:top-[136px]">
      <div className="flex items-center gap-2">
        <Button
          variant={viewMode === "list" ? "secondary" : "ghost"}
          size="icon-sm"
          onClick={() => setViewMode("list")}
        >
          <Menu
            className={`w-5 h-5 ${
              viewMode === "list" ? "text-red-500" : "text-black"
            }`}
          />
        </Button>
        <Button
          variant={viewMode === "grid" ? "secondary" : "ghost"}
          size="icon-sm"
          onClick={() => setViewMode("grid")}
        >
          <LayoutGrid
            className={`w-5 h-5 ${
              viewMode === "grid" ? "text-red-500" : "text-black"
            }`}
          />
        </Button>
        <span className="ml-2 text-xs hidden sm:inline-flex">
          There are {products.length} products.
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs hidden sm:flex">Sort By</span>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-34">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name-asc" className="text-xs">
              Name, A To Z
            </SelectItem>
            <SelectItem value="name-desc" className="text-xs">
              Name, Z To A
            </SelectItem>
            <SelectItem value="price-asc" className="text-xs">
              Price, Low to High
            </SelectItem>
            <SelectItem value="price-desc" className="text-xs">
              Price, High to Low
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default Toolbar;
