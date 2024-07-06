import { FaTruck } from 'react-icons/fa';

import { getDeliveryData } from '@/services/delivery.service';

export default async function CurrentOrder() {
  const data = await getDeliveryData();

  return (
    <div className='flex flex-row justify-between mt-10 mb-10 bg-white'>
      <div className='flex flex-row items-center'>
        <FaTruck className='m-10 text-4xl font-signature ml-2' />
        <div className='flex flex-col'>
          <h3>On the way</h3>
          <p>Your order is on its way</p>
        </div>
      </div>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-col mr-10'>
          <p className='font-bold'>Price</p>
          <p>{data.price} JMF</p>
        </div>
        <div className='flex flex-col mr-10'>
          <p className='font-bold'>Estimated delivery</p>
          <p>{data.estimated} mins</p>
        </div>
        <div className='flex flex-col mr-10'>
          <p className='font-bold'>Room</p>
          <p>{data.room}</p>
        </div>
      </div>
    </div>
  );
}
