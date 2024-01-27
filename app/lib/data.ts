import { groq } from 'next-sanity';
import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';
import {
  ExperienceType,
  PageInfoType,
  ProjectType,
  SkillType,
  SocialType,
} from './definitions';

type ExpreriencesResType = {
  experiences: ExperienceType[];
};

type PageInfoResType = {
  pageInfo: PageInfoType;
};

type ProjectResType = {
  projects: ProjectType[];
};

type SkillsResType = {
  skills: SkillType[];
};

type SocialsResType = {
  socials: SocialType[];
};

export async function getExperiences() {
  const query = groq`
  *[_type == "experience"]{
    ...,
    technologies[]->{
      _id,
      title,
      image,
    }
  }`;

  const experiences: ExperienceType[] = await sanityClient.fetch(query);

  return experiences;
}

export async function getSocials() {
  const query = groq`
    *[_type == "social"]`;

  const socials: SocialType[] = await sanityClient.fetch(query);

  return socials;
}

export async function getPageInfo() {
  const query = groq`
  *[_type == "pageInfo"][0]`;

  const pageInfo: PageInfoType = await sanityClient.fetch(query);

  return pageInfo;
}

export async function getProjects() {
  const query = groq`
  *[_type == "project"]{
    ...,
    technologies[]->{
      _id,
      title,
      image,
    }
  }`;

  const projects: ProjectType[] = await sanityClient.fetch(query);

  return projects;
}

export async function getSkills() {
  const query = groq`
    *[_type == "skill"]`;

  const skills: SkillType[] = await sanityClient.fetch(query);
  return skills;
}
