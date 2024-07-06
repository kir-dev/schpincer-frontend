import { SelectValue } from '@radix-ui/react-select';
import { FaPlusCircle } from 'react-icons/fa';

import FallbackImage from '@/components/fallback-image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import useLocalStorage from '@/hooks/useLocalStorage';
import { CartItemProps } from '@/types/checkout.type';

export function CartItem(props: CartItemProps) {
  const { data, setData } = useLocalStorage('cart');

  const deleteItem = () => {
    const count = data.filter((item: CartItemProps) => item.id !== props.id).length;
    if (count === 0) {
      setData(null);
      return;
    }
    setData(data.filter((item: CartItemProps) => item.id !== props.id));
  };

  const updateQuantity = (value: string) => {
    const quantity = parseInt(value.replace('db', ''));
    const updatedCart: CartItemProps[] = data.map((item: CartItemProps) => {
      if (item.id === props.id) {
        return { ...item, quantity };
      }
      return item;
    });
    setData(updatedCart);
  };

  return (
    <Card className='p-4'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between gap-4 w-full'>
          <div className='flex items-center gap-4'>
            <FallbackImage
              src={props.image}
              alt={props.name}
              width={64}
              height={64}
              className='rounded-lg aspect-square'
            />
            <p className='text-sm min-[465px]:text-base'>{props.name}</p>
          </div>
          <p className='text-sm min-[465px]:text-base font-bold'>{props.price * props.quantity} JMF</p>
        </div>
        {props.extras && (
          <div className='flex items-center gap-2'>
            <FaPlusCircle className='size-6 text-green-600' />
            <p className='text-sm'>Extrák:</p>
            <p className='text-sm'>{props.extras.join(', ')}</p>
          </div>
        )}
        <div className='flex items-center justify-between w-full gap-4'>
          <Select defaultValue={`${props.quantity}db`} onValueChange={updateQuantity}>
            <SelectTrigger className='w-full basis-2/3 focus:ring-0 focus:ring-offset-0'>
              <SelectValue className='bg-red-300' />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 9 }, (_, i) => i + 1).map((value) => (
                <SelectItem key={value} value={`${value}db`}>
                  {value} db
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant='destructive' className='w-full basis-1/3' onClick={deleteItem}>
            Törlés
          </Button>
        </div>
      </div>
    </Card>
  );
}
