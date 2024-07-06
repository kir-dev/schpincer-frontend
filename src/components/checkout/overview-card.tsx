import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import useLocalStorage from '@/hooks/useLocalStorage';
import { cn } from '@/lib/utils';
import { CartItemProps } from '@/types/checkout.type';

interface OverviewCardProps {
  className: string;
}

export function OverviewCard({ className }: OverviewCardProps) {
  const { data: cart } = useLocalStorage('cart');
  const { data: room } = useLocalStorage('room');

  const sum = cart.reduce((acc: number, item: CartItemProps) => acc + item.price * item.quantity, 0);

  return (
    <Card className={cn(className, 'h-fit')}>
      <CardHeader>
        <CardTitle>Áttekintés</CardTitle>
      </CardHeader>
      <CardContent>
        {cart.map((item: CartItemProps) => (
          <div key={item.name + item.extras} className='flex items-center justify-between gap-4'>
            <div className='flex items-center gap-2'>
              <p className='w-5'>{item.quantity}x</p>
              <p>{item.name}</p>
            </div>
            <p className='shrink-0'>{item.price * item.quantity} JMF</p>
          </div>
        ))}

        <Separator className='my-2' />
        <p>
          Szobaszám: <strong>{room?.number ?? 'Ismeretlen'}</strong>
        </p>
        <Separator className='my-2' />
        <p className='text-xl font-bold'>Fizetendő összeg: {sum} JMF</p>
      </CardContent>
    </Card>
  );
}
