"use client";
import React from "react";
import { motion } from "framer-motion";
import { PageInfoType } from "../lib/definitions";
import Image from "next/image";
import Heading from "./Heading";
import { urlFor } from "@/lib/utils";

type Props = { pageInfo: PageInfoType };

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ y: -15, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen relative flex flex-col items-center justify-center gap-8 sm:gap-16"
    >
      <Heading heading="About" subHeading="Healthy Mind, Great Achievements" />
      <div className="flex flex-col gap-8 sm:gap-16 text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        {pageInfo?.profilePic && (
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
            }}
            className="flex-shrink-0 rounded-lg w-60 h-80 md:w-96 md:h-96 xl:h-[600px] xl:w-[500px] overflow-hidden relative"
          >
            <Image
              src={urlFor(pageInfo?.profilePic).url()}
              alt="about image"
              className="-mb-20 md:mb-0 flex-shrink-0 object-cover md:rounded-lg object-center"
              fill
              sizes="(max-width: 768px) 360px, (max-width: 1200px) 684px, 500px"
            />
          </motion.div>
        )}
        <div className="space-y-10">
          <h4 className="text-3xl sm:text-4xl font-semibold">
            Fueling{" "}
            <span className="underline decoration-[#0ea5e9]/50">Success</span>{" "}
            with Learning and Wellness
          </h4>
          <p className="text-base text-left">
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
