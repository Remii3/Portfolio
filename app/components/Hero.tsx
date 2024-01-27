'use client';

import React from 'react';
import Link from 'next/link';
import { PageInfoType } from '../lib/definitions';
import BackgroundCircles from './ui/hero/BackgroundCircles';
import { useTypewriter } from 'react-simple-typewriter';

type Props = {
  pageInfo: PageInfoType;
};

export default function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [pageInfo?.role],
    typeSpeed: 300,
    deleteSpeed: 300,
    loop: 1,
  });

  const moveToAbout = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const moveToExperiences = () => {
    const experiencesSection = document.querySelector('#experience');
    experiencesSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const moveToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const moveToSkills = () => {
    const skillsSection = document.querySelector('#skills');
    skillsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className="h-screen flex overflow-hidden home ">
      <p className="stars"></p>
      <p className="stars2"></p>
      <p className="stars3"></p>
      <p className="stars stars-alt"></p>
      <p className="stars2 stars-alt2"></p>
      <p className="stars3 stars-alt3"></p>
      <div className="flex flex-col mx-auto space-y-8 items-center justify-center text-center ">
        <BackgroundCircles />
        <div className="z-20">
          <h2 className="min-h-8 text-base uppercase text-slate-500 pb-2 tracking-[15px]">
            {text}
          </h2>
          <h1 className="text-5xl lg:text-6xl font-semibold px-10 ">
            Hi, My name is{' '}
            <span className=" text-pink-700">{pageInfo.name}</span>
          </h1>
          <div className="pt-6 flex flex-wrap gap-x-3 gap-y-3 justify-center px-5">
            <Link href="#about" scroll={false} onClick={moveToAbout}>
              <button className="heroButton">About</button>
            </Link>
            <Link href="#experience" scroll={false} onClick={moveToExperiences}>
              <button className="heroButton">Experience</button>
            </Link>
            <Link href="#projects" scroll={false} onClick={moveToProjects}>
              <button className="heroButton">Projects</button>
            </Link>
            <Link href="#skills" scroll={false} onClick={moveToSkills}>
              <button className="heroButton">Skills</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
