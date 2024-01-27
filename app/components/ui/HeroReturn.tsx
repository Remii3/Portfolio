'use client';

import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default function HeroReturn({}: Props) {
  const moveToHero = () => {
    const heroSection = document.querySelector('#hero');
    heroSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <Link
      href="#hero"
      scroll={false}
      onClick={moveToHero}
      className="fixed bottom-10 right-10 text-slate-400/50 hover:text-cyan-600/80 transition ease-out"
    >
      <ArrowUpCircleIcon height={42} width={42} />
    </Link>
  );
}
