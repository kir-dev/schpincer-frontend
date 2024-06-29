import React from 'react';

import FeaturedProducts from '@/components/featured/featured-products';
import CurrentOpening from '@/components/opening/current-opening';
import CurrentOrder from '@/components/order/current-order';

export default function Home() {
  return (
    <main className='flex-col items-center justify-center'>
      <section>
        <CurrentOrder />
      </section>
      <section>
        <CurrentOpening />
      </section>
      <section>
        <FeaturedProducts />
      </section>
    </main>
  );
}
