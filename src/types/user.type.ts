export type UserDto = {
  id: string;
  name: string;
  passType: string;
  room: number;
};

export type RoomRequestDto = {
  number: number;
  save: boolean;
};
