import Image from 'next/image';
import { notFound } from 'next/navigation';

import { ProviderMemberItem } from '@/components/providers/provider-member-item';
import { getProviderById } from '@/services/provider.service';

type ProviderPageProps = {
  params: {
    id: string;
  };
};

export default async function ProviderPage({ params }: ProviderPageProps) {
  const provider = await getProviderById(params.id);

  if (!provider) {
    return notFound();
  }

  return (
    <div className='min-h-screen'>
      <div
        className='flex flex-col lg:flex-row-reverse lg:space-x-0 space-y-0 lg:space-y-0 w-full p-16'
        style={{ backgroundColor: provider.color }}
      >
        {/* Details */}
        <div className='text-white p-4 flex-1'>
          <div className='flex-1 bg-gray-200 flex justify-center items-center relative rounded-xl shadow-sm  shadow-slate-500 h-[270px] w-full'>
            <Image
              src={provider.bgImage}
              alt='Background'
              height={300}
              width={600}
              className='absolute inset-0 w-full h-full object-cover rounded-xl'
            />
          </div>
        </div>
        {/* Image */}
        <div className=' text-white p-4 flex-1'>
          <div className='flex items-center'>
            <Image
              src={provider.image}
              alt={`${provider.name} logo`}
              width={64}
              height={64}
              className='rounded-full mr-2 bg-slate-500 p-1 object-cover w-16 h-16'
            />
            <h1 className='text-white text-2xl font-bold'>{provider.name}</h1>
          </div>
          <div className='flex-1 mr-6 mt-6'>
            <h2 className='text-white text-xl font-semibold'>About Provider</h2>
            <p className='text-white mb-4'>{provider.description}</p>
            <div>
              <button className='bg-red-500 text-white italic hover:translate-y-1 transition-all translate-y-2 py-2 px-4 mr-2 rounded-lg'>
                Faster
              </button>
              <button className='bg-black text-white py-2 px-4 hover:translate-y-1 transition-all translate-y-2'>
                Links
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-6'>
        <h2 className='text-2xl  font-semibold text-gray-800 p-4'>Members</h2>
        <div className='flex flex-wrap p-4 space-x-4 justify-center'>
          {provider.members.map((member) => {
            return <ProviderMemberItem member={member} key={member.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
