"use client";

import TableReport from "@/components/molecules/TableReport";
import { Badge } from "@/components/ui/badge";
import { useListOrder } from "@/hooks/useOrder";
import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function DashboardPage() {
  const { listOrder, loading: loadingListOrder, error } = useListOrder();

  console.log("(client) list order", listOrder);

  return (
    <div className="flex gap-6 p-6">
      <div className="h-screen w-2/3">
        <div className="border-b-2 border-[#393C49] pb-6">
          <h1 className="text-3xl font-semibold text-white">Dashboard</h1>
          <p className="mt-1 text-base text-[#ABBBC2]">Tuesday, 2 Feb 2021</p>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-6">
          <div className="bg-background rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="bg-surface w-fit rounded-lg p-1.5">
                <Image
                  src={`/icons/ic-coin.svg`}
                  width={24}
                  height={24}
                  alt="icon"
                  className="size-6"
                />
              </div>
              <div className="flex items-center gap-1.5">
                <p className="text-xs font-medium text-emerald-300">+32.04%</p>
                <div className="rounded-full bg-emerald-300/20 p-0.5">
                  <ArrowUp className="size-4 text-emerald-300" />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h1 className="text-3xl font-semibold text-white">$10,243.00</h1>
              <p className="mt-2 text-sm font-medium text-[#ABBBC2]">
                Total Revenue
              </p>
            </div>
          </div>
          <div className="bg-background rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="bg-surface w-fit rounded-lg p-1.5">
                <Image
                  src={`/icons/ic-order.svg`}
                  width={24}
                  height={24}
                  alt="icon"
                  className="size-6"
                />
              </div>
              <div className="flex items-center gap-1.5">
                <p className="text-xs font-medium text-red-300">-12.40%</p>
                <div className="rounded-full bg-red-300/20 p-0.5">
                  <ArrowDown className="size-4 text-red-300" />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h1 className="text-3xl font-semibold text-white">23,456</h1>
              <p className="mt-2 text-sm font-medium text-[#ABBBC2]">
                Total Dish Ordered
              </p>
            </div>
          </div>
          <div className="bg-background rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="bg-surface w-fit rounded-lg p-1.5">
                <Image
                  src={`/icons/ic-customer.svg`}
                  width={24}
                  height={24}
                  alt="icon"
                  className="size-6"
                />
              </div>
              <div className="flex items-center gap-1.5">
                <p className="text-xs font-medium text-emerald-300">+2.40%</p>
                <div className="rounded-full bg-emerald-300/20 p-0.5">
                  <ArrowUp className="size-4 text-emerald-300" />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h1 className="text-3xl font-semibold text-white">1,234</h1>
              <p className="mt-2 text-sm font-medium text-[#ABBBC2]">
                Total Customers
              </p>
            </div>
          </div>
        </div>
        <div className="bg-background mt-6 rounded-lg px-4 py-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Order Report</h2>
            <button className="flex items-center gap-2.5 rounded-lg border-2 border-[#393C49] px-4 py-3">
              <Image
                src={`/icons/ic-option.svg`}
                width={20}
                height={20}
                alt="icon"
                className="size-5 text-white"
              />
              <span className="text-sm font-medium text-white">
                Filter Order
              </span>
            </button>
          </div>
          {/* Table Order Report */}
          <TableReport orderList={listOrder} />
          {/* <table className="mt-8 w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pb-3 text-sm font-semibold text-white">
                  Tanggal
                </th>
                <th className="pb-3 text-sm font-semibold text-white">
                  Customer
                </th>
                <th className="pb-3 text-sm font-semibold text-white">
                  Total Payment
                </th>
                <th className="pb-3 text-sm font-semibold text-white">
                  Status
                </th>
                <th className="pb-3 text-sm font-semibold text-white"></th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="">
                <td className="py-5 text-center text-sm text-white">
                  {formatDateTime("2025-11-03 23:11:00.496 +0700")}
                </td>
                <td className="py-5 text-center text-sm text-white">Maheer</td>
                <td className="py-5 text-center text-sm text-white">
                  {formatPrice(18000)}
                </td>
                <td className="py-5 text-center text-sm text-white">
                  <span className="rounded-full bg-emerald-500/30 px-2.5 py-1 text-center text-xs font-medium text-emerald-500">
                    Complete
                  </span>
                </td>
                <td className="py-5 text-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <EllipsisVertical className="size-4 text-white" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-background">
                      <DropdownMenuItem className="text-center text-sm text-white">
                        Detail
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-center text-sm text-white">
                        Lihat Struk
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
      <div className="h-screen w-1/3">
        <div className="bg-background rounded-lg p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Most Ordered</h2>
            <select
              name=""
              id=""
              className="rounded-lg border-2 border-[#393C49] px-4 py-3 text-white"
            >
              <option value="">Today</option>
            </select>
          </div>
          <hr className="my-5 border border-[#393C49]" />
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Image
                src={`/images/menu1.png`}
                alt="menu1"
                width={56}
                height={56}
                className="size-14 rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-200">
                  Spicy seasoned seafood noodles
                </span>
                <span className="mt-1 text-xs text-gray-400">
                  200 dishes ordered
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={`/images/menu1.png`}
                alt="menu1"
                width={56}
                height={56}
                className="size-14 rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-200">
                  Spicy seasoned seafood noodles
                </span>
                <span className="mt-1 text-xs text-gray-400">
                  200 dishes ordered
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={`/images/menu1.png`}
                alt="menu1"
                width={56}
                height={56}
                className="size-14 rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-200">
                  Spicy seasoned seafood noodles
                </span>
                <span className="mt-1 text-xs text-gray-400">
                  200 dishes ordered
                </span>
              </div>
            </div>
            <button className="border-primary text-primary w-full rounded-lg border-2 py-3.5 font-semibold">
              View All
            </button>
          </div>
        </div>
        <div className="bg-background mt-6 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">
              Most Type of Order
            </h2>
            <select
              name=""
              id=""
              className="rounded-lg border-2 border-[#393C49] px-4 py-3 text-white"
            >
              <option value="">Today</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
