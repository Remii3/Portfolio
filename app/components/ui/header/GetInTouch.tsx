'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
type Props = {};

export default function GetInTouch({}: Props) {
  const moveToContact = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Link
        href="#contact"
        scroll={false}
        onClick={moveToContact}
        className="md:flex hidden border-b-2 border-b-transparent flex-row items-center gap-2 cursor-pointer text-slate-400 hover:text-slate-200 hover:border-b-cyan-600/80 transition px-2 pb-1"
      >
        <EnvelopeIcon height={24} width={24} />
        <span className="uppercase text-sm">Get In Touch</span>
      </Link>
    </motion.div>
  );
}
