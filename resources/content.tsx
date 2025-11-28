import { Profile, Education, Award, Publication } from '../types';
import { ProfileImage, Papers, ExternalResources } from './assets';

export const PROFILE: Profile = {
  name: "Hong Wang",
  title: "PhD Student in Computer Science",
  institution: "Memorial University of Newfoundland",
  email: "hongw@mun.ca",
  location: "St. John's, NL",
  avatarUrl: ProfileImage,
  bio: "I am a PhD student at the Memorial University of Newfoundland, advised by Prof. Kaiyang Liu. My research interests lie at the intersection of distributed DNN training and data center network.",
  socials: {
    googleScholar: "https://scholar.google.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  }
};

export const EDUCATION: Education[] = [
  {
    id: "phd",
    degree: "Ph.D. in Computer Science",
    institution: "Memorial University of Newfoundland",
    year: "2025 - Present"
  },
  {
    id: "ms",
    degree: "M.S. in Computer Science",
    institution: "Memorial University of Newfoundland",
    year: "2023 - 2025",
  },
  {
    id: "bs",
    degree: "B.S. in Computer Science",
    institution: "Memorial University of Newfoundland",
    year: "2018 - 2023"
  }
];

export const AWARDS: Award[] = [
  {
    id: "nsf",
    title: "Graduate Student Research Award",
    organization: "Memorial University of Newfoundland",
    year: "2025",
    description: ""
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "p1",
    title: "Performance Analysis of Communication Scheduling Schemes for Distributed Deep Learning",
    authors: ["Jinhao Luo", "Hong Wang", "Jingrong Wang", "Adrian Fiech", "Kaiyang Liu"],
    venue: "IEEE Conference on Local Computer Networks (LCN)",
    year: 2025,
    links: [
      { label: "PDF", url: Papers.Paper2, type: "pdf" }
    ]
  },
  {
    id: "p2",
    title: "Efficient Device Placement for Distributed DNN Training",
    authors: ["Hong Wang", "Jinhao Luo", "Kaiyang Liu", "Qiang (John) Ye"],
    venue: "International Conference on Communication (ICC)",
    year: 2025,
    highlight: true,
    links: [
      { label: "PDF", url: Papers.Paper1, type: "pdf" },
      { label: "Code", url: ExternalResources.Paper1_Code, type: "code" },
      { label: "Project Page", url: ExternalResources.Paper1_Website, type: "website" }
    ]
  },
];