import { daftarMenu } from "@/helpers/listMenu";
import React from "react";
import ProductManagementCard from "./ProductManagementCard";

interface ListManageProductProps {
  category: string;
}

export default function ListManageProduct({
  category,
}: ListManageProductProps) {
  const selectedCategory = daftarMenu.find((d) => d.kategori === category);

  return (
    <>
      {selectedCategory?.menu.map((menu, i) => (
        <ProductManagementCard
          key={i}
          imageLink="/images/menu1.png"
          name={menu.namaMenu}
          price={Number(menu.hargaMenu)}
        />
      ))}
    </>
  );
}
