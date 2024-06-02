/* global requestAnimationFrame, cancelAnimationFrame */
'use client';

import { useEffect, useState } from 'react';

const progcol = '#22c55e'; // green-500
const bgcol = '#d1d5db'; // gray-300
const steps = [
  {
    text: 'Kosár',
    prec: 21,
  },
  {
    text: 'Szállítás',
    prec: 50,
  },
  {
    text: 'Áttekintés',
    prec: 79,
  },
];

interface ProgressbarProps {
  current: number;
}

export function Progressbar({ current }: ProgressbarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const duration = 300; // duration of the animation in milliseconds
    const startProgress = progress;
    const endProgress = steps[current].prec;

    const animateProgress = (timestamp: number): void => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      const newProgress = startProgress + (endProgress - startProgress) * (elapsed / duration);

      setProgress(elapsed < duration ? newProgress : endProgress);

      if (elapsed < duration) {
        requestAnimationFrame(animateProgress);
      }
    };

    const frameID = requestAnimationFrame(animateProgress);

    return () => cancelAnimationFrame(frameID);
  }, [current]);

  return (
    <div className='flex justify-around items-center m-4 gap-4 md:hidden'>
      <div
        className='absolute mt-6 w-full -z-10 h-1'
        style={{
          background: `linear-gradient(to right, ${progcol} ${progress}%, ${bgcol} ${progress}%)`,
        }}
      />
      {steps.map((step, index) => (
        <div key={step.text} className='flex flex-col items-center'>
          <div className='text-sm font-bold mb-1 w-20 text-center'>{step.text}</div>
          <div
            className='w-7 h-7 rounded-full flex items-center justify-center text-lg transition-all duration-100'
            style={{ background: `${progress >= steps[index].prec - 5 ? progcol : bgcol}` }}
          >
            {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
}
