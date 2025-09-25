"use client";

import CategoryTabs from "@/components/molecules/CategoryTabs";
import ListManageProduct from "@/components/molecules/ListManageProduct";
import { Plus, Settings2 } from "lucide-react";
import React, { useState } from "react";

export default function ManagementProduct() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Makanan");
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
        <div className="px-6">
          <CategoryTabs
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 p-6">
        <button
          // onClick={onAddClick}
          className="border-primary flex h-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed bg-transparent p-4 transition focus:outline-none"
          aria-label="Tambah produk"
        >
          <Plus className="text-primary text-xl" />
          <span className="text-primary mt-2 text-base font-semibold">
            Tambah Menu Baru
          </span>
        </button>
        <ListManageProduct category={selectedCategory} />
      </div>
    </>
  );
}
