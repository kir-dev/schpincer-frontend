import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface DeliveryCardProps {
  className: string;
}

export function DeliveryCard({ className }: DeliveryCardProps) {
  return (
    <Card className={cn(className, '')}>
      <CardHeader>
        <CardTitle>Szállítás</CardTitle>
        <p className='text-sm'>Add meg, melyik szobába kéred a rendelést!</p>
      </CardHeader>
      <CardContent className='flex items-center'>
        <p className='mr-4'>Szoba:</p>
        <Input />
      </CardContent>
    </Card>
  );
}
