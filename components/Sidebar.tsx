"use client";

const categories = ["All", "Electronics", "Clothing", "Home"] as const;

interface SidebarProps {
  category: string;
  onCategoryChange: (category: string) => void;
  maxPrice: number;
  onMaxPriceChange: (price: number) => void;
}

export default function Sidebar({
  category,
  onCategoryChange,
  maxPrice,
  onMaxPriceChange,
}: SidebarProps) {
  return (
    <aside className="w-full shrink-0 rounded-lg bg-blue-800 p-5 text-white md:w-60">
      <h2 className="mb-4 text-lg font-semibold">Filters</h2>

      <div className="mb-6">
        <h3 className="mb-2 font-medium">Category</h3>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <label
              key={cat}
              className="flex cursor-pointer items-center gap-2 text-sm"
            >
              <input
                type="radio"
                name="category"
                checked={category === cat}
                onChange={() => onCategoryChange(cat)}
                className="h-4 w-4 accent-white"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-2 font-medium">Price</h3>
        <input
          type="range"
          min={0}
          max={1000}
          step={10}
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(Number(e.target.value))}
          className="w-full accent-white"
        />
        <div className="mt-1 flex justify-between text-xs">
          <span>0</span>
          <span>{maxPrice}</span>
        </div>
      </div>
    </aside>
  );
}