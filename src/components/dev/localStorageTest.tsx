'use client';

import { FaDev } from 'react-icons/fa';

import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import useLocalStorage from '@/hooks/useLocalStorage';

export function LocalStorageTest() {
  const { setData, mutate } = useLocalStorage('cart');
  const { data } = useLocalStorage('room');

  const addToLocalStorage = () => {
    setData([
      {
        id: '1',
        image: '/nex.svg',
        name: 'Nagyon finom burger',
        price: 1699,
        extras: ['extra1', 'extra2'],
        quantity: 3,
      },
      {
        id: '2',
        image: '/next.svg',
        name: 'Valamilyen pizza',
        price: 2500,
        extras: ['extra1'],
        quantity: 1,
      },
    ]);
  };

  return (
    <Card className='flex flex-col p-4 my-4 bg-sky-200 border-4 border-sky-600'>
      <div className='flex items-center justify-between mb-2'>
        <CardTitle className='text-xl'>LocalStorage teszt</CardTitle>
        <FaDev size={24} className='text-gray-600' />
      </div>
      <div className='flex gap-2 flex-wrap'>
        <Button onClick={addToLocalStorage}>Add to localStorage</Button>
        <Button
          variant='destructive'
          onClick={() => {
            localStorage.clear();
            mutate();
          }}
        >
          Delete localStorage
        </Button>
      </div>
      <p className='text-black mt-2'>Room content:</p>
      <p> {JSON.stringify(data)} </p>
    </Card>
  );
}
