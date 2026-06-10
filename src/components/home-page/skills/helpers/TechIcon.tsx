import { Cloud } from 'lucide-react';

import type { TechItem } from '@/data/tech';

type Props = {
  item: TechItem;
  className?: string;
};

export default function TechIcon({ item, className = 'h-4 w-4' }: Props) {
  if (!item.icon) {
    return <Cloud className={className} />;
  }

  return (
    <svg
      role='img'
      viewBox='0 0 24 24'
      className={className}
      fill={`#${item.icon.hex}`}
      aria-label={item.name}
    >
      <path d={item.icon.path} />
    </svg>
  );
}
