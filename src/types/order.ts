import { PaymentData } from "./payment";

export interface Product {
  id: string;
  categoryId: string;
  unitId: string;
  name: string;
  price: number;
  stock: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
  note?: string;
  createdAt: string;
  updatedAt: string;
  product: Product;
}

export interface Order {
  id: string;
  waiterId: string;
  receipt_code: string;
  customer: string;
  orderType: "DINE_IN" | "TAKE_AWAY" | "DELIVERY";
  totalPrice: number;
  status: string;
  address: string | null;
  orderItems: OrderItem[];
  createdAt: string;
  updatedAt: string;
}

export interface OrderItemCheckout {
  productId: string;
  quantity: number;
  price: number;
  note?: string;
}
export interface CheckoutOrder {
  waiterId: string;
  customer: string;
  orderType: "DINE_IN" | "TAKE_AWAY" | "DELIVERY";
  totalPrice: number;
  items: OrderItemCheckout[];
}

export interface OrderReport {
  id: string;
  waiterId: string;
  receipt_code: string;
  customer: string;
  orderType: "DINE_IN" | "TAKE_AWAY" | "DELIVERY";
  totalPrice: number;
  status: string;
  address: string | null;
  orderItems: OrderItem[];
  createdAt: string;
  updatedAt: string;
  payment: PaymentData;
}
