import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import useLocalStorage from '@/hooks/useLocalStorage';
import { cn } from '@/lib/utils';
import { getRoomNumber } from '@/services/checkout.service';

interface DeliveryCardProps {
  className: string;
}

export function DeliveryCard({ className }: DeliveryCardProps) {
  const [checked, setChecked] = useState(true);
  const { data: roomNumber, isLoading } = useSWR('roomNumber', () => getRoomNumber());
  const { data: roomData, setData } = useLocalStorage('room');

  useEffect(() => {
    if (roomNumber) {
      setData({
        number: roomNumber,
        save: roomData?.save ?? true,
      });
    }
  }, [roomNumber]);

  useEffect(() => {
    setData({
      number: roomData?.number ?? roomNumber,
      save: checked,
    });
  }, [checked]);

  const fieldChanged = (value: string) => {
    setData({
      number: Number(value),
      save: roomData?.save ?? true,
    });
  };

  return (
    <Card className={cn(className, '')}>
      <CardHeader>
        <CardTitle>Szállítás</CardTitle>
        <p className='text-sm'>Add meg, melyik szobába kéred a rendelést!</p>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        <div className='flex items-center'>
          <p className='mr-4'>Szoba:</p>
          {isLoading ? (
            <p className='flex items-center h-10'>Szoba betöltése...</p>
          ) : (
            <Input defaultValue={roomNumber ?? ''} onChange={(e) => fieldChanged(e.target.value)} />
          )}
        </div>

        <div
          className='flex items-center gap-3 rounded-md border p-4 hover:bg-gray-100 duration-100 cursor-pointer'
          onClick={() => setChecked(!checked)}
        >
          <Checkbox checked={checked} />
          <div className='select-none'>
            <p>Szoba elmentése</p>
            <p className='text-xs text-gray-500'>Elmentheted a szobaszámot a legközelebbi rendelésekre.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
