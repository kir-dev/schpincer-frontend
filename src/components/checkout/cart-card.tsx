import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface CartCardProps {
  className: string;
}

export function CartCard({ className }: CartCardProps) {
  return (
    <Card className={cn(className, '')}>
      <CardHeader>
        <CardTitle>Kosár</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col'>
        <p>Termék1</p>
        <p>Termék2</p>
        <p>Termék3</p>
        <p>Termék4</p>
      </CardContent>
    </Card>
  );
}
