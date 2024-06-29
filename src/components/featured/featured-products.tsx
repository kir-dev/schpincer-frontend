import { ProductListItem } from '@/components/products/product-list-item';
import { getProductData } from '@/services/product.service';

export default async function FeaturedProducts() {
  const data = await getProductData();
  return (
    <div className='flex flex-col justify-center bg-white'>
      <h2 className='text-center text-3xl mt-5'>Featured Products</h2>
      <p className='text-center mt-5'>
        Lórum ipse és a filleg szaktatos talan és bogos hosodros. Kerített tehát a „moda “, és dikássá csicsorogt, hogy
        haznatos rozás lódja a csahadalkát.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 mb-10'>
        {data.products.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
