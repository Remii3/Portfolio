"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./experience/ExperienceCard";
import { ExperienceType } from "../lib/definitions";
import Heading from "./Heading";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

type Props = {
  experiences: ExperienceType[];
};

export default function WorkExperience({ experiences }: Props) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <motion.div
      initial={{ y: -15, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-full flex flex-col max-w-7xl mx-auto gap-8 sm:gap-16 justify-center"
    >
      <Heading
        heading="Experience"
        subHeading="A Journey Through Professional Growth"
      />
      <div className="w-full px-4">
        <Carousel setApi={setApi}>
          <CarouselContent
            className={`${experiences.length <= 1 && "justify-center"} ml-0`}
          >
            {experiences.map((experience) => (
              <ExperienceCard experience={experience} key={experience._id} />
            ))}
          </CarouselContent>
          {experiences.length > 1 && (
            <>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </>
          )}
        </Carousel>
        <div className="py-2 mt-4 text-center text-sm text-muted-foreground font-medium opacity-50">
          Slide {current} of {count}
        </div>
      </div>
    </motion.div>
  );
}
