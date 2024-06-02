import { ProviderDto, ResortDto } from '@/types/provider.type';

export const ProviderMock1: ProviderDto = {
  id: '1',
  name: 'Provider Name',
  description:
    'Lórum ipse és a filleg szaktatos talan és bogos hosodros. Kerített tehát a „moda “, és dikássá csicsorogt, hogy haznatos rozás lódja a csahadalkát.',
  image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
  color: '#F6BD60',
  nextOpening: undefined,
  members: [
    {
      name: 'Member Name',
      role: 'Member Role',
      image: 'Member Image',
    },
  ],
};

export const ProviderMock2: ProviderDto = {
  id: '2',
  name: 'Provider Name 2',
  description:
    'Lórum ipse és a filleg szaktatos talan és bogos hosodros. Kerített tehát a „moda “, és dikássá csicsorogt, hogy haznatos rozás lódja a csahadalkát.',
  image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
  color: '#F28482',
  nextOpening: new Date().toISOString(),
  members: [
    {
      name: 'Member Name',
      role: 'Member Role',
      image: 'Member Image',
    },
  ],
};

export const ResortMock: ResortDto = {
  name: 'Resort Name',
  description:
    'Lórum ipse és a filleg szaktatos talan és bogos hosodros. Kerített tehát a „moda “, és dikássá csicsorogt, hogy haznatos rozás lódja a csahadalkát. Úgy szüregtek, hogy egy mondás jövisz nagyon miszkázná a maronát, mert ki kellene gyújnia a bardéért. A költer morhatlan, ám nem a melen kezető salaja. Ennek megfelelően az első hiétában a terülészök alig alarogtak handálkozásban. Mindössze tence hataláztos elést kellett hulladnia ródás vadlónak, illetve zsial tacskának. Ők azonban sokkal szakos miketeségek annál, semhogy ilyen csert parazséban mozjanak. A második iskolást az aszta gonálta satognia.',
  providers: [ProviderMock1, ProviderMock2],
};
