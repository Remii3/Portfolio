"use client";

import React from "react";
import { motion } from "framer-motion";
import { SocialType } from "@/lib/definitions";
import { SocialIcon } from "react-social-icons";

type Props = {
  socials: SocialType[];
};

export default function Socials({ socials }: Props) {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0, scale: 0.9 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
      }}
      className="flex flex-row items-center"
    >
      {socials.map((social) => (
        <SocialIcon
          key={social._id}
          url={social.url}
          fgColor="gray"
          bgColor="transparent"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        />
      ))}
    </motion.div>
  );
}
