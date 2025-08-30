// Fetches the README file for a given repo (owner/repo)
export async function fetchRepoReadme(owner: string, repo: string): Promise<string> {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`);
  if (!res.ok) throw new Error("Failed to fetch README from GitHub");
  const data = await res.json();
  // README content is base64 encoded
  if (!data.content) return "No README found.";
  try {
    return atob(data.content.replace(/\n/g, ""));
  } catch {
    // Fallback for Node.js or environments without atob
    return Buffer.from(data.content, 'base64').toString('utf-8');
  }
}
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
    created_at: repo.created_at,
    updated_at: repo.updated_at,
  }));
};

export { fetchProjectsFromGitHub };
// ...existing code...
