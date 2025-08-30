'use client';
// It fetched the list of all the public reopositoried from GitHub API and displayed them in a grid format with links to each repository.
import React from "react";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types/project";
import { fetchProjectsFromGitHub } from "@/data/projects";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
    const [projects, setProjects] = React.useState<Project[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        fetchProjectsFromGitHub("parakh-yash")
            .then(setProjects)
            .catch((err: any) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="p-4 sm:p-8 lg:p-12 h-full overflow-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
            {loading && <div className="text-center">Loading projects...</div>}
            {error && <div className="text-center text-red-500">{error}</div>}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project: Project) => (
                    <div
                        key={project.name}
                        className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col"
                    >
                        <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
                        <div className="mt-auto">
                            <Link href={project.github_link} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="mr-2 inline-flex items-center">
                                    <Github className="w-4 h-4 mr-2" /> GitHub Repository
                                </Button>
                            </Link>
                            {project.demo_link && (
                                <Link href={project.demo_link} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" className="inline-flex items-center">
                                        <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
