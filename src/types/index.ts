export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  techStack: TechIcon[];
  status: string;
}

export interface TechIcon {
  name: string;
  icon: string;
  description: string;
}
