"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProjectType } from "../lib/definitions";
import { urlFor } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Heading from "./Heading";
type Props = {
  projects: ProjectType[];
};

export default function Projects({ projects }: Props) {
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
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="z-20">
        <Heading
          heading="Projects"
          subHeading="Showcasing Innovation and Excellence"
        />
        <div className="px-4 max-w-screen-lg w-full mx-auto">
          <Carousel setApi={setApi}>
            <CarouselContent className="ml-0 gap-4 cursor-grab active:cursor-grabbing">
              {projects
                .sort((a, b) => a.order - b.order)
                .map((project, index) => (
                  <CarouselItem
                    key={index}
                    className="flex flex-col rounded-lg items-center space-y-7 py-10 px-4 w-full"
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      transition={{ duration: 0.5 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="w-full"
                    >
                      <div className="flex items-center justify-center mb-4">
                        <Link
                          href={project.linkToBuild}
                          className="block relative w-full sm:w-[400px] h-[200px]"
                        >
                          <Image
                            src={urlFor(project.image).url()}
                            alt="Project image"
                            className="object-cover rounded-lg hover:scale-[1.05] hover:skew-y-1 shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out"
                            fill
                            sizes="(max-width:640px) 100%, 400px"
                          />
                        </Link>
                      </div>
                      <div className="space-y-4 sm:space-y-10 px-0 md:px-10 ">
                        <h4 className="text-4xl font-semibold text-center">
                          {project.title}
                        </h4>
                        <div className="flex flex-row space-x-2 items-center justify-center">
                          {project.technologies.map((technology) => {
                            return (
                              <Image
                                key={technology._id}
                                src={urlFor(technology.image).url()}
                                alt="Project technology icon"
                                height={40}
                                width={40}
                                className="aspect-square"
                              />
                            );
                          })}
                        </div>
                        <p className="text-base text-center">
                          {project.summary}
                        </p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
        <div className="py-2 mt-4 font-medium opacity-50 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div>
      </div>
      <div className="w-full absolute top-[25%] bg-[#0ea5e9]/5 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
