export type CartItemProps = {
  id: string;
  image: string;
  name: string;
  price: number;
  extras: ItemExtra[];
  quantity: number;
};

export type ItemExtra = {
  key: string;
  value: string[];
};

export type RoomData = {
  number: number;
  save: boolean;
};

export type CheckoutRequestItemDto = {
  productId: string;
  quantity: number;
  extras: ItemExtra[];
};

export type CheckoutRequestDto = {
  items: CheckoutRequestItemDto[];
  room: RoomData;
};
