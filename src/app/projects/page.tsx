"use client";

import { motion } from "framer-motion";

interface Project {
    name: string;
    description: string;
    achievements: string[];
    url: string;
    updatedAt: string;
    topics: string[];
}

const projects: Project[] = [
    {
        name: "Portfolio Website",
        description:
            "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and a clean design.",
        achievements: ["Successfully deployed on Vercel"],
        url: "https://github.com/nibodhdaware/Portfolio",
        updatedAt: "Jun 14, 2025",
        topics: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
        name: "ai-bind",
        description:
            "A simple library to implement generative AI in your website",
        achievements: ["Published on npm", "400+ downloads on npm"],
        url: "https://npmjs.org/package/ai-bind",
        updatedAt: "May 2, 2025",
        topics: ["Javascript", "Generative AI", "Gamini", "OpenAI", "Claude"],
    },
    {
        name: "nukeapp",
        description:
            "Command line tool to nuke an application from MacOS cleanly and delete all related files",
        achievements: ["Published on homebrew"],
        url: "https://github.com/nibodhdaware/nukeapp",
        updatedAt: "Apr 28, 2025",
        topics: ["Bash", "MacOS"],
    },
    {
        name: "nibble",
        description: "Discord bot for managing my own discord server",
        achievements: [
            "Used to manage my own discord server",
            "Successfully containerized using docker and published on docker hub",
            "Successfully hosted on Render",
        ],
        url: "https://github.com/nibodhdaware/nibble",
        updatedAt: "Oct 31, 2024",
        topics: [
            "Javascript",
            "Discord.js",
            "Node.js",
            "Typescript",
            "Docker",
            "Render",
        ],
    },
    {
        name: "todom",
        description:
            "A todo list chrome extension to keep track of your tasks right from the browser",
        achievements: ["Published on chrome web store"],
        url: "https://github.com/nibodhdaware/todom",
        updatedAt: "Jul 14, 2024",
        topics: ["Javascript", "Chrome Extension"],
    },
    {
        name: "haskell-web-scraper",
        description:
            "A web scraper written in Haskell to scrape the TechCruch website and give updates on the latest news in the tech industry",
        achievements: ["Successfully scraped a website"],
        url: "https://github.com/nibodhdaware/haskell-web-scraper",
        updatedAt: "Jul 11, 2023",
        topics: ["Haskell", "Web Scraping"],
    },
    {
        name: "chatixir",
        description:
            "A chat application built with Phoenix LiveView and Tailwind CSS",
        achievements: ["Successfully deployed on Render"],
        url: "https://github.com/nibodhdaware/chatixir",
        updatedAt: "Jun 27, 2023",
        topics: ["Elixir", "Phoenix", "LiveView", "Tailwind CSS"],
    },
];

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

function ProjectsPage() {
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
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.name}
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
                            onClick={() => window.open(project.url, "_blank")}
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
                                        {project.name}
                                    </motion.h3>
                                </div>
                                <span className="text-sm text-gray-500 bg-gray-800/50 px-2 py-1 rounded-md">
                                    Updated {formatDate(project.updatedAt)}
                                </span>
                            </div>

                            <div className="flex-1 flex flex-col gap-4">
                                <p className="text-gray-300 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <ul className="list-disc list-inside space-y-2 text-gray-300 marker:text-accent3">
                                    <h4 className="text-sm text-gray-400 mb-4 font-bold">
                                        Achievements
                                    </h4>
                                    {project.achievements.map((achievement) => (
                                        <li
                                            key={achievement}
                                            className="leading-relaxed"
                                        >
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>

                                {project.topics &&
                                    project.topics.length > 0 && (
                                        <div className="flex-1">
                                            <h4 className="text-sm text-gray-400 mb-4 font-bold">
                                                Technologies
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.topics.map((topic) => (
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
