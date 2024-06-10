import React from 'react';

import FeaturedProducts from '@/components/featured/featured-products';
import CurrentOrder from '@/components/order/current-order';

export default function Home() {
  return (
    <main className='flex-col items-center justify-center'>
      <CurrentOrder />
      <FeaturedProducts />
    </main>
  );
}
