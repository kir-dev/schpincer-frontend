import Image from 'next/image';
import { TbCalendarDue } from 'react-icons/tb';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatHu } from '@/lib/utils';
import { ProviderPreviewDto } from '@/types/provider.type';

interface ProviderProps {
  provider: ProviderPreviewDto;
}

export function ProviderListItem({ provider }: ProviderProps) {
  return (
    <Card
      className='relative pt-20 text-center mt-20 hover:-translate-y-5 transition-transform cursor-pointer'
      key={provider.id}
    >
      <CardHeader>
        <CardTitle>{provider.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{provider.description}</p>
        <div className='flex items-center text-slate-400 gap-1 justify-center mt-5'>
          <TbCalendarDue className='inline-block' />
          {provider.nextOpening ? formatHu(provider.nextOpening.date) : 'Nincs nyitás dátum'}
        </div>
      </CardContent>
      <div
        className='absolute left-0 right-0 top-0 h-2 rounded-t-md'
        style={{
          backgroundColor: provider.color,
        }}
      />
      <Image
        src={provider.image}
        alt={provider.name}
        width={150}
        height={150}
        className='object-cover w-32 h-32 absolute -top-16 rounded-full mx-auto left-0 right-0 shadow-md'
      />
    </Card>
  );
}
