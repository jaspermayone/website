export interface Project {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

export interface Photo {
  file_name: string;
}

export interface Friend {
  image: string;
  name: string;
  bio: string;
  link: string;
  file_name: string;
}

export interface TextEntry {
  name: string;
  type: "text";
}

export type FriendOrText = Friend | TextEntry;
export type PhotoOrText = Photo | TextEntry;
