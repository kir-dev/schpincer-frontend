import { ProviderListItem } from '@/components/providers/provider-list-item';
import { getResortData } from '@/services/provider.service';

export default async function ResortPage() {
  const data = await getResortData();
  return (
    <main>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.providers.map((provider) => (
          <ProviderListItem key={provider.id} provider={provider} />
        ))}
      </section>
    </main>
  );
}
