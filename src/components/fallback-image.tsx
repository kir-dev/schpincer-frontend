'use client';

import Image from 'next/image';
import { useState } from 'react';

interface FallbackImageProps {
  src: string;
  alt: string;
  [key: string]: any;
}

const FallbackImage = ({ src, alt, ...props }: FallbackImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return <Image {...props} src={imgSrc} alt={alt} onError={() => setImgSrc('/placeholder.svg')} />;
};

export default FallbackImage;
