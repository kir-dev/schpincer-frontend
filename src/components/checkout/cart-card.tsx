import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { CartItemProps } from '@/types/checkout.type';

import { CartItem } from './cart-item';

interface CartCardProps {
  className: string;
  itemsList: CartItemProps[];
}

export function CartCard({ className, itemsList }: CartCardProps) {
  const count = itemsList.reduce((acc: number, item: CartItemProps) => acc + item.quantity, 0);

  return (
    <Card className={cn(className, 'max-md:bg-transparent max-md:shadow-none max-md:border-0')}>
      <CardHeader>
        <CardTitle className='max-md:-mx-4 flex justify-between items-center'>
          Kosár
          <p>{count} tétel</p>
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-4 max-md:p-0'>
        {itemsList.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </CardContent>
    </Card>
  );
}
