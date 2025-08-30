import { Project } from "@/types/project";

const fetchProjectsFromGitHub = async (username: string): Promise<Project[]> => {
  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&type=public`);
  if (!res.ok) throw new Error("Failed to fetch repositories from GitHub");
  const repos = await res.json();
  return repos.map((repo: any) => ({
    name: repo.name,
    description: repo.description || "No description provided.",
    github_link: repo.html_url,
    demo_link: repo.homepage || undefined,
  }));
};

export { fetchProjectsFromGitHub };
// ...existing code...
