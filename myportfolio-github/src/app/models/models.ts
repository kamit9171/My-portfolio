export interface Education {
  institute: string;
  course: string;
  duration: string;
  score: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: string;
  rating: number;
}
export interface Certificate {
imageName: string;

  name: string;
  level: string;
  link?: string;
 
}

export interface Project {
projectLink: string;
githubLink: string;
  title: string;
  technologies: string;
  description: string[];
}
export interface CertificateDetails{
  certificateLink: string;
  certificateImageSrc: string;
}