import { formatPrice } from "@/helpers/formatPrice";
import { PenLine } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProductManagementCardProps {
  imageLink: string;
  name: string;
  price: string;
}

export default function ProductManagementCard({
  imageLink,
  name,
  price,
}: ProductManagementCardProps) {
  return (
    <div className="border-dark-line rounded-lg border">
      <div className="p-6">
        <Image
          src={imageLink}
          width={127}
          height={127}
          alt="image menu"
          className="mx-auto mb-4 h-28 w-28 rounded-full object-cover"
        />
        <div className="mx-auto">
          <p className="text-center text-sm font-medium text-white">{name}</p>
          <div className="mt-2 flex items-center justify-center gap-2">
            <p className="text-text-light text-sm">
              {formatPrice(Number(price))}
            </p>
            <div className="size-1.5 rounded-full bg-white"></div>
            <p className="text-text-light text-sm">20 Bowls</p>
          </div>
        </div>
      </div>
      <button className="bg-primary/20 flex w-full cursor-pointer items-center justify-center gap-2 rounded-b-lg py-4 focus:outline-none">
        <PenLine className="text-primary size-3.5" />
        <p className="text-primary text-sm font-semibold">Edit Menu</p>
      </button>
    </div>
  );
}
