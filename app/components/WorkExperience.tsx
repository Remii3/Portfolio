'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ui/experience/ExperienceCard';
import { ExperienceType } from '../lib/definitions';

type Props = {
  experiences: ExperienceType[];
};

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ y: -15, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex flex-col max-w-7xl mx-auto pt-24 sm:gap-12"
    >
      <div className="text-center">
        <h2 className="uppercase tracking-widest mb-4 text-gray-500 text-2xl sm:text-4xl">
          Experience
        </h2>
      </div>
      <div className="w-full justify-center flex space-x-5 overflow-x-auto p-10 snap-x snap-mandatory scrollbar-track-gray-400/40 scrollbar-thumb-slate-400/80 scrollbar-thin">
        {experiences.map(experience => (
          <ExperienceCard experience={experience} key={experience._id} />
        ))}
      </div>
    </motion.div>
  );
}
