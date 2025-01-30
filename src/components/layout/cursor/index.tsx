'use client';

import dynamic from 'next/dynamic';
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={15}
      outerSize={15}
      color="255, 255, 255"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      trailingSpeed={5}
      // Blues color border
      innerStyle={{ border: '1px solid #ffffff' }}
      clickables={[
        'a',
        'input[type="url"]',
        'input[type="text"]',
        'input[type="image"]',
        'input[type="email"]',
        'input[type="submit"]',
        'input[type="number"]',
        'input[type="password"]',
        'input[type="textarea"]',
        'label[for]',
        'select',
        'button',
        '.link',
      ]}
    />
  );
};

export default Cursor;
