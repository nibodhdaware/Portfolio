"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GitHubRepo, getRepositories, formatDate } from "@/utils/github";

export default function Projects() {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchRepos() {
            try {
                const data = await getRepositories("nibodhdaware");
                setRepos(data);
            } catch (err) {
                setError("Failed to fetch projects");
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchRepos();
    }, []);

    if (loading) {
        return (
            <motion.section
                id="projects"
                className="w-full min-h-screen bg-primary py-20"
            >
                <div className="container mx-auto px-8 md:px-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-accent3 to-accent2 bg-clip-text text-transparent"
                    >
                        Featured Projects
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="bg-gray-800 p-6 rounded-lg animate-pulse"
                            >
                                <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
                                <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
                                <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>
        );
    }

    if (error) {
        return (
            <motion.section
                id="projects"
                className="w-full min-h-screen bg-primary py-20"
            >
                <div className="container mx-auto px-8 md:px-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-accent3 to-accent2 bg-clip-text text-transparent"
                    >
                        Featured Projects
                    </motion.h2>
                    <div className="text-center text-gray-400">{error}</div>
                </div>
            </motion.section>
        );
    }

    const featuredRepos = repos.slice(0, 3);

    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full min-h-screen bg-primary py-20"
        >
            <div className="container mx-auto px-8 md:px-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-accent3 to-accent2 bg-clip-text text-transparent"
                >
                    Featured Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {featuredRepos.map((repo) => (
                        <motion.a
                            key={repo.name}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-semibold text-white">
                                    {repo.name}
                                </h3>
                            </div>
                            <p className="text-gray-300 mb-4">
                                {repo.description || "No description available"}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {repo.topics.slice(0, 3).map((topic) => (
                                    <span
                                        key={topic}
                                        className="px-2 py-1 text-xs bg-accent3/20 text-accent3 rounded-full"
                                    >
                                        {topic}
                                    </span>
                                ))}
                            </div>
                            <span className="text-sm text-gray-400">
                                Updated {formatDate(repo.updated_at)}
                            </span>
                        </motion.a>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <a
                        href="/projects"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white transition-colors duration-300"
                    >
                        Explore All Projects
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
}
