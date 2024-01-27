'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectType } from '../lib/definitions';
import { urlFor } from '@/sanity';
type Props = {
  projects: ProjectType[];
};

export default function Projects({ projects }: Props) {
  useEffect(() => {
    const slider = document.getElementById('projectContainer');
    if (!slider) return;
    let isDown = false;
    let startX: any;
    let scrollLeft: any;

    const startDragging = (e: any) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      slider.style.scrollSnapType = 'none'; // Disable scroll snap
      slider.style.cursor = 'grabbing';
    };

    const stopDragging = () => {
      if (!isDown) return;
      isDown = false;
      slider.style.scrollSnapType = 'x mandatory'; // Re-enable scroll snap
      slider.style.cursor = 'grab';
    };

    const whileDragging = (e: any) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = x - startX;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mousedown', startDragging);
    slider.addEventListener('mouseleave', stopDragging);
    slider.addEventListener('mouseup', stopDragging);
    slider.addEventListener('mousemove', whileDragging);

    return () => {
      slider.removeEventListener('mousedown', startDragging);
      slider.removeEventListener('mouseleave', stopDragging);
      slider.removeEventListener('mouseup', stopDragging);
      slider.removeEventListener('mousemove', whileDragging);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: -15, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex flex-col pt-24 overflow-hidden relative"
    >
      <div className="text-center">
        <h2 className="uppercase tracking-widest mb-4 text-gray-500 text-2xl sm:text-4xl">
          Projects
        </h2>
      </div>
      <div
        id="projectContainer"
        className="relative w-full flex overflow-x-scroll scrollbar scrollbar-track-slate-800/40 scrollbar-thumb-cyan-600/80 overflow-y-hidden cursor-grab snap-x snap-mandatory z-20 gap-4"
      >
        {projects
          .sort((a, b) => a.order - b.order)
          .map((project, index) => (
            <div
              key={index}
              className="w-screen flex-shrink-0 snap-start flex flex-col space-y-5 items-center justify-start p-10 sm:p-20 md:p-44"
            >
              <motion.div
                initial={{
                  y: -100,
                  opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link
                  href={project.linkToBuild}
                  className="block relative w-screen sm:w-[400px] h-[200px]"
                >
                  <Image
                    src={urlFor(project.image).url()}
                    alt="Project image"
                    className="object-cover hover:scale-[1.05] hover:skew-y-1 shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out"
                    fill
                  />
                </Link>
              </motion.div>
              <div className="space-y-4 sm:space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#0ea5e9] whitespace-nowrap">
                    Project {index + 1} of {projects.length}:
                  </span>{' '}
                  {project.title}
                </h4>
                <div className="flex flex-row space-x-2 items-center justify-center">
                  {project.technologies.map(technology => {
                    return (
                      <Image
                        key={technology._id}
                        src={urlFor(technology.image).url()}
                        alt=""
                        height={40}
                        width={40}
                      />
                    );
                  })}
                </div>
                <p className="text-base text-center">{project.summary}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="w-full absolute top-[25%] bg-[#0ea5e9]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
