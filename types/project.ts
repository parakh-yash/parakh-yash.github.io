export interface Project {
  name: string;
  description: string;
  github_link: string;
  demo_link?: string;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}
