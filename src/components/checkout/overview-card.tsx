import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface OverviewCardProps {
  className: string;
}

export function OverviewCard({ className }: OverviewCardProps) {
  return (
    <Card className={cn(className, 'h-fit')}>
      <CardHeader>
        <CardTitle>Áttekintés</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Placeholder data */}
        <p>Nagyon finom hamburger</p>
        <p>Item2</p>
        <p>Item3</p>
        <p>Item4</p>

        <Separator className='my-2' />
        <p>
          Szobaszám: <strong>1000</strong>
        </p>
        <Separator className='my-2' />
        <p className='text-xl font-bold'>Fizetendő összeg: 9999 JMF</p>
      </CardContent>
    </Card>
  );
}
