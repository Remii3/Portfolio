interface SanityBodyType {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface ImageType {
  _type: 'image';
  asset: {
    _type: 'reference';
    _ref: string;
  };
}

export interface PageInfoType extends SanityBodyType {
  _type: 'pageInfo';
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: ImageType;
  name: string;
  phoneNumber: string;
  profilePic: ImageType;
}

export interface TechnologyType extends SanityBodyType {
  _type: 'skill';
  title: string;
  progress: number;
  image: ImageType;
}

export interface SkillType extends SanityBodyType {
  _type: 'skill';
  title: string;
  progress: number;
  image: ImageType;
}

export interface ProjectType extends SanityBodyType {
  _type: 'project';
  title: string;
  image: ImageType;
  linkToBuild: string;
  summary: string;
  technologies: TechnologyType[];
  order: number;
}

export interface ExperienceType extends SanityBodyType {
  _type: 'experience';
  company: string;
  companyImage: ImageType;
  dateStarted: Date;
  dateEnded: Date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: TechnologyType[];
}

export interface SocialType extends SanityBodyType {
  _type: 'social';
  title: string;
  url: string;
}
