"use client";

import { useOrderStore } from "@/store/orderStore";
import React, { useState } from "react";
import { formatPrice } from "@/helpers/formatPrice";
import CartItemWrapper from "../molecules/CartItemWrapper";

interface FormOrderProps {
  onProceed: () => void;
}

export default function FormOrder({ onProceed }: FormOrderProps) {
  const [type, setType] = useState<string>("Dine in");

  const { items } = useOrderStore();

  const totalPrice = items.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <div>
      <h3 className="text-lg font-semibold text-white">Pesanan</h3>
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setType("Dine in")}
            className={`w-fit cursor-pointer rounded-lg border px-4 py-2 text-xs font-medium transition lg:text-sm ${
              type === "Dine in"
                ? "border-primary bg-primary text-white"
                : "border-dark-line text-primary hover:bg-primary hover:text-white"
            }`}
          >
            Dine in
          </button>
          <button
            type="button"
            onClick={() => setType("Take Away")}
            className={`w-fit cursor-pointer rounded-lg border px-4 py-2 text-xs font-medium transition lg:text-sm ${
              type === "Take Away"
                ? "border-primary bg-primary text-white"
                : "border-dark-line text-primary hover:bg-primary hover:text-white"
            }`}
          >
            Take Away
          </button>
          <button
            type="button"
            onClick={() => setType("Delivery")}
            className={`w-fit cursor-pointer rounded-lg border px-4 py-2 text-xs font-medium transition lg:text-sm ${
              type === "Delivery"
                ? "border-primary bg-primary text-white"
                : "border-dark-line text-primary hover:bg-primary hover:text-white"
            }`}
          >
            Delivery
          </button>
        </div>
      </div>
      <div className="mt-6 border-b border-gray-700 pb-4">
        <div className="flex flex-row items-center justify-between">
          <div className="flex-1">
            <p className="text-base font-semibold text-white">Item</p>
          </div>
          <div className="flex items-center gap-16">
            <p className="text-base font-semibold text-white">Qty</p>
            <p className="text-base font-semibold text-white">Price</p>
          </div>
        </div>
      </div>
      {items.length === 0 ? (
        <div className="my-8 text-center">
          <p className="text-base font-semibold text-white">
            Belum ada pesanan
          </p>
        </div>
      ) : (
        <div className="no-scrollbar my-4 h-96 space-y-5 overflow-x-hidden overflow-y-auto">
          {items.map((item) => (
            <CartItemWrapper key={item.productId} item={item} />
          ))}
        </div>
      )}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-text-light text-sm">Discount</p>
          <p className="text-base font-medium text-white">{formatPrice(0)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-text-light text-sm">Total</p>
          <p className="text-base font-medium text-white">
            {formatPrice(totalPrice)}
          </p>
        </div>
      </div>
      <div className="mt-6">
        <button
          onClick={onProceed}
          className="bg-primary/80 hover:bg-primary w-full rounded-md py-1.5 text-center font-medium text-white"
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
}
