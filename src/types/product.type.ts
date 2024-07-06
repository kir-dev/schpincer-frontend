export type ProductDto = {
  id: string;
  name: string;
  description: string;
  img: string;
  price: number;
  available: boolean;
};

export type FeaturedProductsDto = {
  products: ProductPreviewDto[];
};

export type ProductPreviewDto = ProductDto;
