import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ProductPreviewDto } from '@/types/product.type';

interface ProductProps {
  product: ProductPreviewDto;
}

export function ProductListItem({ product }: ProductProps) {
  return (
    <Card
      className='relative pt-20 text-center mt-20 ml-20 mr-20 hover:-translate-y-5 transition-transform cursor-pointer'
      key={product.id}
    >
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{product.description}</p>
      </CardContent>
      <Image
        src={product.img}
        alt={product.name}
        width={150}
        height={150}
        className={cn('object-cover w-32 h-32 absolute -top-16 rounded-full mx-auto left-0 right-0 shadow-md')}
      />
    </Card>
  );
}
