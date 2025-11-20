import { formatDateTime } from "@/helpers/formatDate";
import { formatPrice } from "@/helpers/formatPrice";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import { OrderReport } from "@/types/order";

interface TableReportProps {
  // orderId: string;
  // dateTime: string;
  // customer: string; // nama customer
  // totalPayment: number;
  // status: "PENDING" | "SUCCESS" | "FAILED" | "EXPIRED" | "RETURN"; // status dari payment
  orderList: OrderReport[];
}

export default function TableReport({
  // orderId,
  // dateTime,
  // customer,
  // totalPayment,
  // status,
  orderList,
}: TableReportProps) {
  return (
    <table className="mt-8 w-full">
      <thead>
        <tr className="border-b border-gray-200">
          <th className="pb-3 text-sm font-semibold text-white">Tanggal</th>
          <th className="pb-3 text-sm font-semibold text-white">Customer</th>
          <th className="pb-3 text-sm font-semibold text-white">
            Total Payment
          </th>
          <th className="pb-3 text-sm font-semibold text-white">Status</th>
          <th className="pb-3 text-sm font-semibold text-white"></th>
        </tr>
      </thead>
      <tbody className="">
        {orderList.map((order, i) => (
          <tr key={i} className="">
            <td className="py-5 text-center text-sm text-white">
              {formatDateTime("2025-11-03 23:11:00.496 +0700")}
            </td>
            <td className="py-5 text-center text-sm text-white">
              {order.customer}
            </td>
            <td className="py-5 text-center text-sm text-white">
              {formatPrice(order.totalPrice)}
            </td>
            <td className="py-5 text-center text-sm text-white">
              <span className="rounded-full bg-emerald-500/30 px-2.5 py-1 text-center text-xs font-medium text-emerald-500">
                {order.payment.status}
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
        ))}
      </tbody>
    </table>
  );
}
