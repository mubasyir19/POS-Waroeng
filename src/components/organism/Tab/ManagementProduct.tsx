import { Settings2 } from "lucide-react";
import React from "react";

export default function ManagementProduct() {
  return (
    <>
      <div className="flex items-start justify-between p-6">
        <h2 className="text-xl font-semibold text-white">
          Products Management
        </h2>
        <button className="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-600 px-4 py-3.5">
          <Settings2 className="size-5 text-white" />
          <span className="text-sm font-semibold text-white">
            Manage Categories
          </span>
        </button>
      </div>
      <div className="mt-4">
        {/* <CategoryTabs
                selected={selectedCategory}
                onSelect={setSelectedCategory}
                /> */}
      </div>
    </>
  );
}
