// "use client";

import { daftarMenu } from "@/helpers/listMenu";
// import { useState } from "react";

// const categories = [
//   "Hot Dishes",
//   "Cold Dishes",
//   "Soup",
//   "Grill",
//   "Appetizer",
//   "Dessert",
// ];

interface CategoryTabsProps {
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryTabs({
  selected,
  onSelect,
}: CategoryTabsProps) {
  // const [active, setActive] = useState("Makanan");

  return (
    <div className="border-surface flex space-x-6 overflow-x-scroll border-b lg:overflow-hidden">
      {daftarMenu.map((d, i) => (
        <button
          key={i}
          onClick={() => onSelect(d.kategori)}
          className={`relative inline-block pb-2 text-sm font-medium whitespace-nowrap transition-colors ${
            selected === d.kategori
              ? "text-primary"
              : "text-text-secondary hover:text-text-primary"
          }`}
        >
          {d.kategori}
          {selected === d.kategori && (
            <span className="bg-primary absolute right-0 -bottom-[1px] left-0 h-[3px] rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
}
