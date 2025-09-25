import React from "react";
import CardMenu from "./CardMenu";
import { daftarMenu } from "@/helpers/listMenu";

interface ListMenuProps {
  category: string;
}

export default function ListMenu({ category }: ListMenuProps) {
  const selectedCategory = daftarMenu.find((d) => d.kategori === category);

  return (
    <div className="no-scrollbar mt-4 grid h-full grid-cols-1 gap-6 overflow-x-hidden overflow-y-auto py-4 md:grid-cols-2 lg:grid-cols-3">
      {selectedCategory?.menu.map((menu, i) => (
        <CardMenu
          key={i}
          imageLink="/images/menu1.png"
          name={menu.namaMenu}
          price={menu.hargaMenu}
        />
      ))}
    </div>
  );
}
