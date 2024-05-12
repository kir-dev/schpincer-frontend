export type ProviderDto = {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
  nextOpening: string | undefined;
  members: MemberDto[];
};

export type MemberDto = {
  name: string;
  role: string;
  image: string;
};

export type ResortDto = {
  name: string;
  description: string;
  providers: ProviderPreviewDto[];
};

export type ProviderPreviewDto = Omit<ProviderDto, 'members'>;
