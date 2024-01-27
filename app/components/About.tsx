'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { PageInfoType } from '../lib/definitions';
import { urlFor } from '@/sanity';
import Image from 'next/image';

type Props = { pageInfo: PageInfoType };

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ y: -15, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen relative flex flex-col items-center justify-start pt-24 overflow-y-auto"
    >
      <div className="text-center">
        <h2 className="uppercase tracking-widest mb-4 text-gray-500 text-2xl sm:text-4xl">
          About
        </h2>
      </div>
      <div className="flex flex-col py-10 text-center md:text-left md:flex-row max-w-7xl px-10 gap-5 justify-evenly mx-auto items-center">
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
            className="flex-shrink-0 rounded-lg w-40 h-40 md:w-96 md:h-96 xl:h-[600px] xl:w-[500px] overflow-hidden relative"
          >
            <Image
              src={urlFor(pageInfo?.profilePic).url()}
              alt="about image"
              className="rounded-full -mb-20 md:mb-0 flex-shrink-0 object-cover md:rounded-lg scale-[1.1] object-center"
              fill
              sizes="(max-width: 768px) 160px, (max-width: 1200px) 384px, 500px"
            />
          </motion.div>
        )}
        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">
            Here is a{' '}
            <span className="underline decoration-[#0ea5e9]/50">little</span>{' '}
            background
          </h4>
          <p className="text-base text-left">
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
