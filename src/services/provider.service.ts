import { resolveDelayed } from '@/lib/utils';
import { ResortMock } from '@/mocks/provider.mock';

export async function getResortData() {
  return resolveDelayed(ResortMock);
}
