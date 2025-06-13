"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GitHubRepo, getRepositories, formatDate } from "@/utils/github";

function ProjectsPage() {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true; // Flag to track if component is mounted

        const fetchRepos = async () => {
            try {
                const data = await getRepositories("nibodhdaware");
                if (isMounted) {
                    setRepos(data);
                }
            } catch (err) {
                if (isMounted) {
                    setError("Failed to fetch projects");
                    console.error(err);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchRepos();

        // Cleanup function to set isMounted to false when component unmounts
        return () => {
            isMounted = false;
        };
    }, []);

    if (loading) {
        return (
            <motion.main
                className="min-h-screen bg-primary text-white py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15 }}
            >
                <div className="container mx-auto px-8 md:px-16">
                    <motion.a
                        href="/"
                        className="flex flex-row items-center gap-2 mb-8 hover:text-accent3 transition-colors whitespace-nowrap"
                    >
                        <span className="text-sm">Back to Home</span>
                    </motion.a>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.15 }}
                        className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-accent3 to-accent2 bg-clip-text text-transparent"
                    >
                        All Projects
                    </motion.h1>
                    <div className="space-y-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div
                                key={i}
                                className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border-2 border-gray-700/50 animate-pulse"
                            >
                                <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
                                <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
                                <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <div className="h-4 bg-gray-700 rounded-full w-1/4"></div>
                                    <div className="h-4 bg-gray-700 rounded-full w-1/4"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.main>
        );
    }

    if (error) {
        return (
            <motion.main
                className="min-h-screen bg-primary text-white py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15 }}
            >
                <div className="container mx-auto px-8 md:px-16">
                    <motion.a
                        href="/"
                        className="flex flex-row items-center gap-2 mb-8 hover:text-accent3 transition-colors whitespace-nowrap"
                    >
                        <span className="text-sm">Back to Home</span>
                    </motion.a>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.15 }}
                        className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-accent3 to-accent2 bg-clip-text text-transparent"
                    >
                        All Projects
                    </motion.h1>
                    <div className="text-center text-gray-400">{error}</div>
                </div>
            </motion.main>
        );
    }

    return (
        <motion.main
            className="min-h-screen bg-primary text-white py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
        >
            <div className="container mx-auto px-8 md:px-16">
                <motion.a
                    href="/"
                    className="flex flex-row items-center gap-2 mb-8 hover:text-accent3 transition-colors whitespace-nowrap"
                >
                    <span className="text-sm">Back to Home</span>
                </motion.a>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-accent3 to-accent2 bg-clip-text text-transparent"
                >
                    All Projects
                </motion.h1>
                <div className="space-y-6">
                    {repos.map((repo, index) => (
                        <motion.div
                            key={repo.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.15,
                                delay: index * 0.05,
                            }}
                            className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border-2 border-gray-700/50 group cursor-pointer flex flex-col gap-4"
                            whileHover={{
                                borderColor: "#A10E1D",
                                backgroundColor: "#111827",
                                transition: { duration: 0.15 },
                            }}
                            onClick={() =>
                                window.open(
                                    repo.homepage || repo.html_url,
                                    "_blank",
                                )
                            }
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <motion.h3
                                        className="text-xl font-bold text-white group-hover:text-[#A10E1D] truncate overflow-hidden whitespace-nowrap"
                                        whileHover={{
                                            color: "#A10E1D",
                                            transition: { duration: 0.15 },
                                        }}
                                    >
                                        {repo.name}
                                    </motion.h3>
                                </div>
                                <span className="text-sm text-gray-500 bg-gray-800/50 px-2 py-1 rounded-md">
                                    Updated {formatDate(repo.updated_at)}
                                </span>
                            </div>

                            <div className="flex-1 flex flex-col gap-4">
                                <p className="text-gray-300 mb-4 leading-relaxed">
                                    {repo.description ||
                                        "No description available"}
                                </p>

                                {repo.topics && repo.topics.length > 0 && (
                                    <div className="flex-1">
                                        <h4 className="text-sm font-semibold text-gray-400 mb-4 font-bold">
                                            Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {repo.topics.map((topic) => (
                                                <span
                                                    key={topic}
                                                    className="px-2 py-1 text-xs bg-accent3/10 text-accent3 rounded-md font-medium"
                                                >
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.main>
    );
}

export default ProjectsPage;
