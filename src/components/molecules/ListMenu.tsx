import React from "react";
import CardMenu from "./CardMenu";
import { daftarMenu } from "@/helpers/listMenu";
import { useOrderStore } from "@/store/orderStore";

interface ListMenuProps {
  category: string;
}

export default function ListMenu({ category }: ListMenuProps) {
  const selectedCategory = daftarMenu.find((d) => d.kategori === category);
  const addItem = useOrderStore((state) => state.addItem);

  return (
    <div className="no-scrollbar mt-4 grid h-full grid-cols-1 gap-6 overflow-x-hidden overflow-y-auto py-4 md:grid-cols-2 lg:grid-cols-3">
      {selectedCategory?.menu.map((menu, i) => (
        <CardMenu
          key={i}
          imageLink="/images/menu1.png"
          name={menu.namaMenu}
          price={menu.hargaMenu}
          onAdd={() => {
            addItem({
              id: crypto.randomUUID(),
              productId: menu.id,
              quantity: 1,
              price: menu.hargaMenu,
              note: "",
            });
          }}
        />
      ))}
    </div>
  );
}
