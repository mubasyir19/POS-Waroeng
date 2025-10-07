import React from "react";
import CardMenu from "./CardMenu";
// import { daftarMenu } from "@/helpers/listMenu";
import { useOrderStore } from "@/store/orderStore";
import { useFetchProductByCategory } from "@/hooks/useProduct";

interface ListMenuProps {
  category: string;
}

export default function ListMenu({ category }: ListMenuProps) {
  const { products } = useFetchProductByCategory(category);
  const addItem = useOrderStore((state) => state.addItem);

  return (
    <div className="no-scrollbar mt-4 grid grid-cols-1 gap-6 overflow-x-hidden overflow-y-auto py-4 md:grid-cols-2 lg:grid-cols-3">
      {products?.map((menu, i) => (
        <CardMenu
          key={i}
          imageLink="/images/menu1.png"
          name={menu.name}
          price={menu.price}
          onAdd={() => {
            addItem({
              id: menu.id,
              productId: menu.id,
              quantity: 1,
              price: menu.price,
              note: "",
            });
          }}
        />
      ))}
      {/* {selectedCategory?.menu.map((menu, i) => (
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
      ))} */}
    </div>
  );
}
