'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { SkillType } from '../lib/definitions';
import SkillItem from './ui/skills/Skill';
type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ y: -15, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen relative flex flex-col max-w-7xl mx-auto pt-24 overflow-hidden"
    >
      <div className="text-center ">
        <h2 className="uppercase tracking-widest mb-4 text-gray-500 text-2xl sm:text-4xl">
          Skills
        </h2>
        <h3 className="tracking-[3px] text-gray-500 text-sm text-center">
          Hover over a skill to see its name
        </h3>
      </div>
      <div className="grid grid-cols-4 gap-3 mx-auto py-20">
        {skills.slice(0, skills.length / 2).map(skill => (
          <SkillItem skill={skill} key={skill._id} />
        ))}
        {skills.slice(skills.length / 2, skills.length).map(skill => (
          <SkillItem skill={skill} key={skill._id} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}
