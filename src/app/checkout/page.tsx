/* globals alert */
'use client';

import { useState } from 'react';

import { CartCard } from '@/components/checkout/cart-card';
import { DeliveryCard } from '@/components/checkout/delivery-card';
import { OverviewCard } from '@/components/checkout/overview-card';
import { Progressbar } from '@/components/checkout/progressbar';
import { Button } from '@/components/ui/button';

export default function Checkout() {
  const [step, setStep] = useState(0);

  return (
    <main className='flex flex-col justify-center my-8  max-w-screen-xl'>
      <Progressbar current={step} />
      <div className='flex justify-center gap-4'>
        <section className={`${step === 2 ? 'hidden' : ''} md:flex flex-col h-full w-full max-w-screen-md gap-4`}>
          <CartCard className={`${step === 0 ? '' : 'hidden'} md:block`} />
          <DeliveryCard className={`${step === 1 ? '' : 'hidden'} md:block`} />
        </section>
        <div className={`${step === 2 ? 'w-full' : 'hidden'} md:block md:basis-2/5 md:shrink-0`}>
          <OverviewCard className='' />
          {/* eslint-disable-next-line no-alert */}
          <Button className='hidden md:block md:w-full mt-4' onClick={() => alert('submit')}>
            Rendelés leadása
          </Button>
        </div>
      </div>
      <div className={`z-30 mt-4 w-full ${step === 0 ? 'justify-end' : 'justify-between'} flex md:hidden`}>
        <Button className={step === 0 ? 'hidden' : ''} onClick={() => setStep((prev) => prev - 1)}>
          Vissza
        </Button>
        <Button className={step === 2 ? 'hidden' : ''} onClick={() => setStep((prev) => prev + 1)}>
          Tovább
        </Button>
        {/* eslint-disable-next-line no-alert */}
        <Button className={step === 2 ? '' : 'hidden'} onClick={() => alert('submit')}>
          Befejezés
        </Button>
      </div>
    </main>
  );
}
