"use client";

import { Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function FormOrder() {
  const [type, setType] = useState<string>("Dine in");
  const [quantity, setQuantity] = useState<number>(1);
  const [note, setNote] = useState<string>("");

  const updateQuantity = (qty: number) => {
    if (qty < 1) return;

    setQuantity(qty);
  };

  const addCount = () => updateQuantity(quantity + 1);
  const minCount = () => updateQuantity(quantity - 1);

  return (
    <div>
      <h3 className="text-lg font-semibold text-white">Order #34562</h3>
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
            onClick={() => setType("To Go")}
            className={`w-fit cursor-pointer rounded-lg border px-4 py-2 text-xs font-medium transition lg:text-sm ${
              type === "To Go"
                ? "border-primary bg-primary text-white"
                : "border-dark-line text-primary hover:bg-primary hover:text-white"
            }`}
          >
            To Go
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
      <div className="no-scrollbar my-4 h-96 space-y-5 overflow-x-hidden overflow-y-auto">
        <div id="cart-item">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={`/images/menu1.png`}
                alt="menu1"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="max-w-20 truncate text-sm font-medium text-gray-200">
                  Salted Pasta with mushroom sauce
                </span>
                <span className="text-xs text-gray-400">$2.29</span>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-4">
                <button onClick={minCount} className="text-primary text-xl">
                  -
                </button>
                <p className="font-medium text-white">{quantity}</p>
                <button onClick={addCount} className="text-primary text-xl">
                  +
                </button>
              </div>
              <div className="font-medium text-gray-200">$4.58</div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Order Note..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full rounded-md bg-gray-800 px-3 py-2 text-sm text-gray-200 placeholder-gray-500 outline-none"
              />
            </div>
            <div className="">
              <button className="rounded-md border border-red-400 p-2 transition hover:bg-red-500/20">
                <Trash2 className="h-4 w-4 text-red-400" />
              </button>
            </div>
          </div>
        </div>
        <div id="cart-item">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={`/images/menu1.png`}
                alt="menu1"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="max-w-20 truncate text-sm font-medium text-gray-200">
                  Salted Pasta with mushroom sauce
                </span>
                <span className="text-xs text-gray-400">$2.29</span>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-4">
                <button onClick={minCount} className="text-primary text-xl">
                  -
                </button>
                <p className="font-medium text-white">{quantity}</p>
                <button onClick={addCount} className="text-primary text-xl">
                  +
                </button>
              </div>
              <div className="font-medium text-gray-200">$4.58</div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Order Note..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full rounded-md bg-gray-800 px-3 py-2 text-sm text-gray-200 placeholder-gray-500 outline-none"
              />
            </div>
            <div className="">
              <button className="rounded-md border border-red-400 p-2 transition hover:bg-red-500/20">
                <Trash2 className="h-4 w-4 text-red-400" />
              </button>
            </div>
          </div>
        </div>
        <div id="cart-item">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={`/images/menu1.png`}
                alt="menu1"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="max-w-20 truncate text-sm font-medium text-gray-200">
                  Salted Pasta with mushroom sauce
                </span>
                <span className="text-xs text-gray-400">$2.29</span>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-4">
                <button onClick={minCount} className="text-primary text-xl">
                  -
                </button>
                <p className="font-medium text-white">{quantity}</p>
                <button onClick={addCount} className="text-primary text-xl">
                  +
                </button>
              </div>
              <div className="font-medium text-gray-200">$4.58</div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Order Note..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full rounded-md bg-gray-800 px-3 py-2 text-sm text-gray-200 placeholder-gray-500 outline-none"
              />
            </div>
            <div className="">
              <button className="rounded-md border border-red-400 p-2 transition hover:bg-red-500/20">
                <Trash2 className="h-4 w-4 text-red-400" />
              </button>
            </div>
          </div>
        </div>
        <div id="cart-item">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={`/images/menu1.png`}
                alt="menu1"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="max-w-20 truncate text-sm font-medium text-gray-200">
                  Salted Pasta with mushroom sauce
                </span>
                <span className="text-xs text-gray-400">$2.29</span>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-4">
                <button onClick={minCount} className="text-primary text-xl">
                  -
                </button>
                <p className="font-medium text-white">{quantity}</p>
                <button onClick={addCount} className="text-primary text-xl">
                  +
                </button>
              </div>
              <div className="font-medium text-gray-200">$4.58</div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Order Note..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full rounded-md bg-gray-800 px-3 py-2 text-sm text-gray-200 placeholder-gray-500 outline-none"
              />
            </div>
            <div className="">
              <button className="rounded-md border border-red-400 p-2 transition hover:bg-red-500/20">
                <Trash2 className="h-4 w-4 text-red-400" />
              </button>
            </div>
          </div>
        </div>
        <div id="cart-item">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={`/images/menu1.png`}
                alt="menu1"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="max-w-20 truncate text-sm font-medium text-gray-200">
                  Salted Pasta with mushroom sauce
                </span>
                <span className="text-xs text-gray-400">$2.29</span>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-4">
                <button onClick={minCount} className="text-primary text-xl">
                  -
                </button>
                <p className="font-medium text-white">{quantity}</p>
                <button onClick={addCount} className="text-primary text-xl">
                  +
                </button>
              </div>
              <div className="font-medium text-gray-200">$4.58</div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Order Note..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full rounded-md bg-gray-800 px-3 py-2 text-sm text-gray-200 placeholder-gray-500 outline-none"
              />
            </div>
            <div className="">
              <button className="rounded-md border border-red-400 p-2 transition hover:bg-red-500/20">
                <Trash2 className="h-4 w-4 text-red-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-text-light text-sm">Discount</p>
          <p className="text-base font-medium text-white">$0</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-text-light text-sm">SubTotal</p>
          <p className="text-base font-medium text-white">$21.03</p>
        </div>
      </div>
      <div className="mt-6">
        <button className="bg-primary/80 hover:bg-primary w-full rounded-md py-1.5 text-center font-medium text-white">
          Continue to Payment
        </button>
      </div>
      {/* <div className="mt-4">
        <div className="mb-4 grid grid-cols-3 text-sm text-gray-400">
          <div>Item</div>
          <div className="text-center">Qty</div>
          <div className="text-right">Price</div>
        </div>
        <div className="mb-4 border-b border-gray-700 pb-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex w-1/2 items-center gap-3">
              <Image
                src={`/images/menu1.png`}
                alt="menu1"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="max-w-[120px] truncate text-sm font-medium text-gray-200">
                  Spicy seasoned sea...
                </span>
                <span className="text-xs text-gray-400">$2.29</span>
              </div>
            </div>

            <div className="rounded-md bg-gray-700 px-3 py-1 text-sm text-white">
              2
            </div>

            <div className="font-medium text-gray-200">$4.58</div>

            <button className="rounded-md border border-red-400 p-2 transition hover:bg-red-500/20">
              <Trash2 className="h-4 w-4 text-red-400" />
            </button>
          </div>
          <input
            type="text"
            placeholder="Order Note..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="mt-3 w-full rounded-md bg-gray-800 px-3 py-2 text-sm text-gray-200 placeholder-gray-500 outline-none"
          />
        </div>
      </div> */}
    </div>
  );
}
