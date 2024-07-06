export type CartItemProps = {
  id: string;
  image: string;
  name: string;
  price: number;
  extras?: string[];
  quantity: number;
};

export type RoomData = {
  number: number;
  save: boolean;
};
