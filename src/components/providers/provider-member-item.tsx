import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MemberDto } from '@/types/provider.type';

interface MemberProps {
  member: MemberDto;
}

export function ProviderMemberItem({ member }: MemberProps) {
  return (
    <Card
      className='relative pt-20 max-w-48 text-center mt-20 hover:-translate-y-2 transition-transform cursor-pointer'
      key={member.id}
    >
      <CardHeader className='px-10'>
        <CardTitle>{member.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{member.role}</p>
      </CardContent>
      <Image
        src={member.image}
        alt={member.name}
        width={150}
        height={150}
        className='object-cover w-32 h-32 absolute -top-16 rounded-full mx-auto left-0 right-0 shadow-md'
      />
    </Card>
  );
}
