import { resolveDelayed } from '@/lib/utils';
import { ProviderMock1, ResortMock } from '@/mocks/provider.mock';

export async function getResortData() {
  return resolveDelayed(ResortMock);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getProviderById(id: string) {
  return resolveDelayed(ProviderMock1);
}
