import { ProductListItem } from '@/components/products/product-list-item';
import { getProductData } from '@/services/product.service';

export default async function FeaturedProducts() {
  const data = await getProductData();
  return (
    <div className='flex flex-col justify-center bg-white'>
      <h2 className='text-center'>Featured Products</h2>
      <p className='text-center'>
        Lórum ipse és a filleg szaktatos talan és bogos hosodros. Kerített tehát a „moda “, és dikássá csicsorogt, hogy
        haznatos rozás lódja a csahadalkát.
      </p>
      <div className='flex flex-row mb-5'>
        {data.products.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
