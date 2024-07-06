import { resolveDelayed } from '@/lib/utils';
import { FeaturedProductsMock } from '@/mocks/product.mock';

export async function getProductData() {
  return resolveDelayed(FeaturedProductsMock);
}
