"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SkillType } from "@/lib/definitions";
import { urlFor } from "@/lib/utils";

type Props = {
  skill: SkillType;
};

export default function SkillItem({ skill }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="group relative flex border border-gray-500 overflow-hidden rounded-full p-3">
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 filter group-hover:grayscale transition duration-300 ease-in-out">
          {skill?.image && (
            <Image
              src={urlFor(skill?.image).url()}
              alt="Skill icon"
              fill
              sizes="(max-width: 640px) 48px, 64px"
              className="object-cover"
            />
          )}
        </div>
        <div className="absolute p-3 inset-0 opacity-0 w-full h-full group-hover:opacity-100 transition duration-300 ease-out rounded-full z-0">
          <div className="bg-white h-full w-full absolute inset-0 bg-opacity-70 z-[1]"></div>
          <div className="flex items-center justify-center h-full">
            <p className="pointer-events-none text-sm font-semibold text-black transition duration-300 ease-out rounded-full  p-1 text-center z-[2]">
              {skill.title}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
