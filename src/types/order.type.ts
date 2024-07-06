import { ItemExtra } from '@/types/checkout.type';

export type OrderDto = {
  id: string;
  createdOn: Date;
  status: string;
  room: number;
  estimatedDelivery: Date;
  price: number;
  comment: string;
  items: OrderItemDto[];
};

export type OrderItemDto = {
  id: string;
  name: string;
  quantity: number;
  extras: ItemExtra[];
};
