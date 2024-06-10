import Image from 'next/image';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ProductPreviewDto } from '@/types/product.type';

interface ProductProps {
  product: ProductPreviewDto;
}

export function ProductListItem({ product }: ProductProps) {
  return (
    <Card className=' ml-5 mt-10 w-500 text-center hover:-translate-y-5 transition-transform cursor-pointer'>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{product.description}</p>
      </CardContent>
      <Image className='justify-center' src={product.img} width={300} height={600} alt='' />
      <CardFooter className='mt-10 flex justify-between'>
        <p>{product.price} JMF</p>
        <button>Add to cart</button>
      </CardFooter>
    </Card>
  );
}
