export interface Link {
  label: string;
  url: string;
  type?: 'pdf' | 'code' | 'website' | 'video';
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  highlight?: boolean;
  links?: Link[];
  abstract?: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  description?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  advisor?: string;
  thesis?: string;
}

export interface Profile {
  name: string;
  title: string;
  institution: string;
  email: string;
  location: string;
  bio: string;
  avatarUrl: string;
  socials: {
    googleScholar?: string;
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}