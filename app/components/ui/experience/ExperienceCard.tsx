'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExperienceType } from '@/app/lib/definitions';
import { urlFor } from '@/sanity';

type Props = {
  experience: ExperienceType;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center py-10 px-4 bg-slate-800/80 opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden">
      {experience?.companyImage && (
        <Image
          className="rounded-full object-cover object-center"
          src={urlFor(experience?.companyImage).url()}
          alt="Company image"
          height={128}
          width={128}
        />
      )}

      <div className="px-0 md:px-10 overflow-y-auto">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2 relative">
          {experience.technologies.map(technology => {
            return (
              technology.image && (
                <Image
                  key={technology._id}
                  src={urlFor(technology?.image).url()}
                  alt=""
                  className="rounded-full h-10 w-10"
                  height={40}
                  width={40}
                />
              )
            );
          })}
        </div>
        <p className="uppercase py-5 text-gray-500">
          {new Date(experience.dateStarted).toDateString()} -{' '}
          {experience.isCurrentlyWorkingHere
            ? 'present'
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc pr-5 space-y-4 pl-5 text-base overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-sky-500/80">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
