'use client';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 1.25, 1.5, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{ duration: 1.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-slate-800/70 rounded-full h-[100px] w-[100px] mt-52 animate-ping-hero" />
      <div className="absolute border border-slate-800/70 rounded-full h-[200px] w-[200px] mt-52 animate-ping-hero" />
      <div className="absolute border-2 border-cyan-600 rounded-full opacity-20 h-[650px] w-[650px] mt-52 animate-pulse" />
      <div className="absolute border border-slate-700/80 rounded-full opacity-20 h-[800px] w-[800px] mt-52" />
    </motion.div>
  );
}
