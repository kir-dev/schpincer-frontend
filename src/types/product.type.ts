export type ProductDto = {
  id: string;
  name: string;
  description: string;
  img: string;
  price: number;
};

export type FeaturedProductsDto = {
  products: ProductPreviewDto[];
};

export type ProductPreviewDto = Omit<ProductDto, 'members'>;
