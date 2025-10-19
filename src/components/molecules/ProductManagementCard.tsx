"use client";

import { formatPrice } from "@/helpers/formatPrice";
import { useFetchDetailUnit } from "@/hooks/useUnit";
import { PenLine } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { DialogContent, DialogTitle } from "@radix-ui/react-dialog";

interface ProductManagementCardProps {
  imageLink?: string;
  name: string;
  price: number;
  stock: number;
  unitId: string;
  onEditClick: () => void;
}

export default function ProductManagementCard({
  imageLink,
  name,
  price,
  stock,
  unitId,
  onEditClick,
}: ProductManagementCardProps) {
  const { dataUnit } = useFetchDetailUnit(unitId);

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  return (
    <div className="border-dark-line rounded-lg border">
      <div className="p-6">
        <Image
          src={imageLink || "/images/menu1.png"}
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
            <p className="text-text-light text-sm">{`${stock} ${dataUnit?.name}`}</p>
          </div>
        </div>
      </div>
      <button
        onClick={onEditClick}
        className="bg-primary/20 flex w-full cursor-pointer items-center justify-center gap-2 rounded-b-lg py-4 focus:outline-none"
      >
        <PenLine className="text-primary size-3.5" />
        <p className="text-primary text-sm font-semibold">Edit Menu</p>
      </button>
    </div>
  );
}
