import { FeaturedProductsDto, ProductDto } from '@/types/product.type';

export const ProductMock1: ProductDto = {
  id: '1',
  name: 'Hamburger',
  description: 'Finom hamburger',
  img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2598&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  price: 100,
};

export const ProductMock2: ProductDto = {
  id: '2',
  name: 'Pizza',
  description: 'Extra csípős',
  img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D',
  price: 250,
};

export const ProductMock3: ProductDto = {
  id: '3',
  name: 'Pizza',
  description: 'Sonkás-kukoricás',
  img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D',
  price: 250,
};

export const FeaturedProductsMock: FeaturedProductsDto = {
  products: [ProductMock1, ProductMock2, ProductMock3],
};
