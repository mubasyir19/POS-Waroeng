export interface Ordertem {
  productId: string;
  quantity: number;
  price: number;
  note?: string;
}

export interface Order {
  waiterId: string;
  customer: string;
  orderType: "DINE_IN" | "TAKE_AWAY" | "DELIVERY";
  totalPrice: number;
  items: Ordertem[];
}
