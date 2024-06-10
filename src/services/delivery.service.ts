import { resolveDelayed } from '@/lib/utils';
import { DeliveryMock } from '@/mocks/delivery.mock';

export async function getDeliveryData() {
  return resolveDelayed(DeliveryMock);
}
