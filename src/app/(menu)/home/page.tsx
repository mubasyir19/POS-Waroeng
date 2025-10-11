"use client";

import CategoryTabs from "@/components/molecules/CategoryTabs";
import ListMenu from "@/components/molecules/ListMenu";
import FormOrder from "@/components/organism/FormOrder";
import Payment from "@/components/organism/Payment";
import { Search } from "lucide-react";
import React, { useState } from "react";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [continuePayment, setContinuePayment] = useState<boolean>(false);

  return (
    <div className="flex h-screen flex-row">
      <div className="bg-surface relative flex h-screen w-4/6 flex-col">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="">
              <h3 className="text-2xl font-semibold text-white">
                Warung Warungan
              </h3>
              <p className="mt-1 text-base text-white">Tuesday, 21 May 2002</p>
            </div>
            <div className="">
              <form>
                <div className="border-text-secondary bg-secondary text-color-text-secondary flex w-full max-w-md items-center rounded-lg border px-3 py-2">
                  <Search className="text-text-secondary mr-2 size-4" />
                  <input
                    type="text"
                    placeholder="Search for food, coffee, etc.."
                    className="text-text-secondary placeholder-text-secondary flex-1 bg-transparent text-sm outline-none"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="mt-4">
            <CategoryTabs
              selected={selectedCategory}
              onSelect={(category) => setSelectedCategory(category)}
            />
          </div>
          {selectedCategory ? (
            <ListMenu category={selectedCategory} />
          ) : (
            <p className="text-base font-medium text-red-500">
              Terjadi masalah dengan koneksi server.
            </p>
          )}
        </div>
        {continuePayment && (
          <Payment onCancel={() => setContinuePayment(false)} />
        )}
      </div>
      <div className="bg-background h-screen w-2/6 p-6">
        <FormOrder onProceed={() => setContinuePayment(true)} />
      </div>
    </div>
  );
}
