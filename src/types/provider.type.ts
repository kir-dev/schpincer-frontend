import { ProductDto } from '@/types/product.type';

export type ProviderDto = {
  id: string;
  name: string;
  description: string;
  image: string;
  bgImage: string;
  color: string;
  nextOpening: OpeningDto | undefined;
  members: MemberDto[];
  products: ProductDto[];
};

export type OpeningDto = {
  id: string;
  providerId: string;
  dateOrderOpen: Date;
  dateOrderClose: Date;
  date: Date;
  description: string;
};

export type MemberDto = {
  id: string;
  name: string;
  role: string;
  image: string;
};

export type ResortDto = {
  name: string;
  description: string;
  providers: ProviderPreviewDto[];
};

export type ProviderPreviewDto = Omit<ProviderDto, 'members' | 'products'>;
