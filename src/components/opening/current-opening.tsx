import { ProviderListItem } from '@/components/providers/provider-list-item';
import { getResortData } from '@/services/provider.service';

export default async function CurrentOpening() {
  const data = await getResortData();

  return (
    <div className='flex flex-col justify-center bg-white mb-10'>
      <h2 className='text-center text-3xl mt-5'>Current openings</h2>
      <p className='text-center mt-5'>
        Lórum ipse és a filleg szaktatos talan és bogos hosodros. Kerített tehát a „moda “, és dikássá csicsorogt, hogy
        haznatos rozás lódja a csahadalkát.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-10'>
        {data.providers.map((provider) => (
          <ProviderListItem key={provider.id} provider={provider} />
        ))}
      </div>
    </div>
  );
}
