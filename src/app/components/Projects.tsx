"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GitHubRepo, getRepositories, formatDate } from "@/utils/github";

interface ProjectsProps {
    id?: string;
}

export default function Projects({ id }: ProjectsProps) {
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
                id={id}
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
                        What I Worked On
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
                id={id}
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
                        What I Worked On
                    </motion.h2>
                    <div className="text-center text-gray-400">{error}</div>
                </div>
            </motion.section>
        );
    }

    const featuredRepos = repos.slice(0, 3);

    return (
        <motion.section
            id={id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center w-full min-h-screen py-20"
        >
            <div className="container mx-auto px-8 md:px-16 flex flex-col items-start justify-center h-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-accent3 to-accent2 bg-clip-text text-transparent"
                >
                    What I Worked On
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-6xl py-4"
                >
                    <div className="flex flex-col gap-y-12 text-gray-300 py-4">
                        {featuredRepos.map((repo, index) => (
                            <motion.div
                                key={repo.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2,
                                }}
                                className={`${
                                    index < featuredRepos.length - 1
                                        ? "mb-12"
                                        : ""
                                }`}
                            >
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl font-bold text-white mb-2 inline-block transition-colors duration-300 hover:text-accent3"
                                >
                                    {repo.name}
                                </a>
                                <p className="text-xl text-gray-500 mb-4">
                                    <span className="text-accent3">
                                        Updated {formatDate(repo.updated_at)}
                                    </span>
                                </p>
                                <p className="text-lg leading-relaxed text-gray-300">
                                    {repo.description ||
                                        "No description available"}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-start w-full"
                >
                    <motion.a
                        href="/projects"
                        className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-accent3/10 transition-all duration-300"
                        whileHover={{
                            scale: 1.05,
                            transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            },
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore All Projects
                    </motion.a>
                </motion.div>
            </div>
        </motion.section>
    );
}
