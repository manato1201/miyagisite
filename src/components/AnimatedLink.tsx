// components/AnimatedLink.tsx
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { animateTransition } from './TransitionCanvas';

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function AnimatedLink({ href, className, children }: Props) {
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    await animateTransition();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}