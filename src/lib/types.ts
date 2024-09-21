export type Friend = {
  name: string;
  bio: string;
  link: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  techStack: string[];
};

type Camera = ["iPhone 6", "iPhone 12 mini", "DJI Mavic Mini", "iPhone 15 Pro"];

export type Photo = {
  file_name: string;
  metadata?; // Make sure metadata is optional
};
