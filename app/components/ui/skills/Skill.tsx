'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SkillType } from '@/app/lib/definitions';
import { urlFor } from '@/sanity';

type Props = {
  directionLeft?: boolean;
  skill: SkillType;
};

export default function SkillItem({ directionLeft, skill }: Props) {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -100 : 100,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ x: 0, opacity: 1 }}
    >
      <div className="group relative flex">
        <div className="relative border border-gray-500 overflow-hidden rounded-full w-16 h-16 sm:w-[94px] sm:h-[94px] filter group-hover:grayscale transition duration-300 ease-in-out">
          {skill?.image && (
            <Image
              src={urlFor(skill?.image).url()}
              alt="Skill icon"
              fill
              className="object-cover"
            />
          )}
        </div>
        <div className="absolute opacity-0 w-full h-full group-hover:opacity-70 transition duration-300 ease-out group-hover:bg-white rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-base font-semibold text-black bg-transparent group-hover:bg-white transition duration-300 ease-out rounded-full opacity-100 p-1 text-center">
              {skill.title}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
