'use client';

import Image from 'next/image';
import { useState } from 'react';

export function LogoImage({ src, alt }: { src?: string; alt: string }) {
  const [errored, setErrored] = useState(false);

  if (src && !errored) {
    return (
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        className='h-full w-full object-contain'
        onError={() => setErrored(true)}
      />
    );
  }

  return (
    <span className='text-sm font-semibold text-muted-foreground'>
      {alt.charAt(0).toUpperCase()}
    </span>
  );
}
