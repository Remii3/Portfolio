"use client";
import React from "react";
import { motion } from "framer-motion";
import { SkillType } from "../lib/definitions";
import SkillItem from "./skills/Skill";
import Heading from "./Heading";
type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ y: -15, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen relative flex flex-col max-w-7xl mx-auto justify-center overflow-hidden gap-16 sm:gap-32"
    >
      <Heading heading="Skills" subHeading="Expertise That Drives Success" />
      <div
        className={`grid ${
          skills.length % 4 ? "grid-cols-4" : "grid-cols-4"
        } gap-4 mx-auto`}
      >
        {skills.map((skill) => (
          <SkillItem skill={skill} key={skill._id} />
        ))}
      </div>
    </motion.div>
  );
}
