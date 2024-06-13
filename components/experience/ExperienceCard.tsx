"use client";
import React from "react";
import Image from "next/image";
import { ExperienceType } from "@/lib/definitions";
import { urlFor } from "@/lib/utils";
import { CarouselItem } from "../ui/carousel";

type Props = {
  experience: ExperienceType;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <CarouselItem className="xl:basis-1/3 md:basis-1/2 flex flex-col rounded-lg items-center gap-7 p-6 bg-slate-800/80 opacity-40 hover:opacity-100 transition-opacity duration-200">
      {experience?.companyImage && (
        <Image
          className="hidden sm:block rounded-2xl object-cover object-center"
          src={urlFor(experience?.companyImage).url()}
          alt="Company image"
          height={128}
          width={128}
        />
      )}

      <div className="space-y-2">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl">{experience.company}</p>
        <div className="flex space-x-2 relative">
          {experience.technologies.map((technology) => {
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
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc pr-5 space-y-4 pl-5 text-base overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-sky-500/80">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </CarouselItem>
  );
}
