"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const roles = [
    {
        text: "student",
        color: "text-gray-300",
        link: "https://www.linkedin.com/in/nibodhdaware/",
    },
    {
        text: "content creator",
        color: "text-red-500",
        link: "https://www.youtube.com/@nibodhdaware",
    },
    {
        text: "learner",
        color: "text-blue-400", // Changed from text-accent2
        link: "https://nibodhdaware.hashnode.dev/",
    },
    {
        text: "freelancer",
        color: "text-green-500",
        link: "https://upwork.com/freelancers/nibodhdaware",
    },
    {
        text: "builder",
        color: "text-yellow-400",
        link: "https://github.com/nibodhdaware",
    },
];

export default function Home() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const currentRole = roles[roleIndex].text;
        if (typing) {
            if (displayed.length < currentRole.length) {
                timeout = setTimeout(() => {
                    setDisplayed(currentRole.slice(0, displayed.length + 1));
                }, 80);
            } else {
                timeout = setTimeout(() => setTyping(false), 1200);
            }
        } else {
            if (displayed.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayed(currentRole.slice(0, displayed.length - 1));
                }, 40);
            } else {
                setTyping(true);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        }
        return () => clearTimeout(timeout);
    }, [displayed, typing, roleIndex]);

    return (
        <main className="min-h-screen bg-primary text-white">
            {/* Navbar */}
            <nav className="w-full sticky top-0 z-50 bg-primary text-white py-4 px-8 flex items-center justify-between">
                <div className="text-2xl font-extrabold tracking-wide">
                    Nibodh Daware
                </div>
                <ul className="flex gap-8 text-lg font-medium">
                    {["About", "Skills", "Projects", "Contact"].map((item) => (
                        <li
                            key={item}
                            className="cursor-pointer transition-colors hover:underline hover:text-blue-400"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Split Section: Left (Text), Right (Image) */}
            <section className="flex flex-col md:flex-row w-full h-screen items-center">
                {/* Left: Name and Subtitle */}
                <div className="flex-1 flex flex-col justify-center h-full w-full px-8 md:px-16">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-accent3 to-accent2 bg-clip-text text-transparent">
                        Nibodh Daware
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-200 mb-8 font-light max-w-xl text-left h-12">
                        I am a{" "}
                        <span className="font-semibold">
                            <a
                                href={roles[roleIndex].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`hover:underline transition-all duration-300 ${roles[roleIndex].color}`}
                            >
                                {displayed}
                            </a>
                            <span className="animate-pulse text-current">
                                |
                            </span>
                        </span>
                    </p>
                </div>
                {/* Right: Profile Photo */}
                <div className="flex-1 flex items-center justify-center bg-gray-900 h-full">
                    <div className="w-full h-full flex items-center justify-center">
                        <Image
                            src="/Profile Photo.png"
                            alt="Nibodh Daware Profile Photo"
                            width={800}
                            height={736}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* About Me Section */}
            <section className="w-full min-h-screen bg-gray-900 py-20">
                <div className="container mx-auto px-8 md:px-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-accent3 to-accent2 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="max-w-4xl">
                        <div className="space-y-6 text-gray-300">
                            <p className="text-lg leading-relaxed">
                                I'm a passionate developer and content creator
                                with a strong focus on building innovative
                                solutions and sharing knowledge with the
                                community. My journey in technology has been
                                driven by curiosity and a desire to create
                                meaningful impact.
                            </p>
                            <p className="text-lg leading-relaxed">
                                As a student, I've balanced academic excellence
                                with practical experience through freelancing
                                and personal projects. I believe in continuous
                                learning and pushing the boundaries of what's
                                possible with technology.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Through my content creation, I aim to make
                                technology more accessible and help others on
                                their learning journey. Whether it's through
                                code, videos, or articles, I'm committed to
                                sharing knowledge and experiences that can
                                benefit the community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Media Links */}
            <div className="flex gap-8 items-center justify-center py-4 bg-gray-900">
                <a
                    href="https://twitter.com/nibodhdaware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-300"
                >
                    <svg
                        className="w-8 h-8 text-white hover:text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </a>
                <a
                    href="https://youtube.com/@nibodhdaware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-300"
                >
                    <svg
                        className="w-8 h-8 text-white hover:text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                </a>
                <a
                    href="https://instagram.com/nibodhdaware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-300"
                >
                    <svg
                        className="w-8 h-8 text-white hover:text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                </a>
                <a
                    href="https://linkedin.com/in/nibodhdaware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-300"
                >
                    <svg
                        className="w-8 h-8 text-white hover:text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                </a>
                <a
                    href="https://github.com/nibodhdaware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-300"
                >
                    <svg
                        className="w-8 h-8 text-white hover:text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                </a>
            </div>

            {/* Experience Section */}
            <section className="w-full min-h-screen bg-primary py-20">
                <div className="container mx-auto px-8 md:px-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-accent3 to-accent2 bg-clip-text text-transparent">
                        Experience
                    </h2>
                    <div className="space-y-8">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-semibold text-white">
                                    Founder & Developer — DocOnTap
                                </h3>
                                <span className="text-gray-400 text-sm">
                                    Feb 2024 – July 2025
                                </span>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>
                                    Developed an online platform for
                                    physiotherapy appointments and clinic
                                    discovery.
                                </li>
                                <li>
                                    Integrated real-time scheduling and WhatsApp
                                    notification system.
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-semibold text-white">
                                    Freelance Developer — Private Clients
                                </h3>
                                <span className="text-gray-400 text-sm">
                                    2022 – 2023
                                </span>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>
                                    Built cryptographic image encryption using
                                    AES and designed a secure wallet ID system.
                                </li>
                                <li>
                                    Developed a remote desktop support tool and
                                    contributed to client-side development
                                    tools.
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-semibold text-white">
                                    Front-end Developer — MRND Labs Pvt. Ltd
                                </h3>
                                <span className="text-gray-400 text-sm">
                                    Jul 2022
                                </span>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>
                                    Designed and implemented a web interface for
                                    insurance claims using ReactJS.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 flex justify-center">
                        <a
                            href="/Resume (Short).pdf"
                            download
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="w-full min-h-screen bg-gray-900 py-20">
                <div className="container mx-auto px-8 md:px-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-accent3 to-accent2 bg-clip-text text-transparent">
                        Projects
                    </h2>
                    <div className="space-y-8">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-semibold text-white">
                                    QR Code Attendance Tracker (Python, Flask)
                                </h3>
                                <span className="text-gray-400 text-sm">
                                    Jan 2025
                                </span>
                            </div>
                            <p className="text-gray-300 mb-2">
                                QR-based system for student attendance.
                            </p>
                            <a
                                href="https://github.com/nibodhdaware/qr-attendance-tracker"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline"
                            >
                                GitHub Repository
                            </a>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-semibold text-white">
                                    Nibble (Discord.py)
                                </h3>
                                <span className="text-gray-400 text-sm">
                                    Oct 2024
                                </span>
                            </div>
                            <p className="text-gray-300 mb-2">
                                Discord moderation and automation bot.
                            </p>
                            <a
                                href="https://github.com/nibodhdaware/nibble"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline"
                            >
                                GitHub Repository
                            </a>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-semibold text-white">
                                    ai-bind (GenAI)
                                </h3>
                                <span className="text-gray-400 text-sm"></span>
                            </div>
                            <p className="text-gray-300 mb-2">
                                JavaScript library built to access GenAI
                                features in your codebase from HTML
                            </p>
                            <a
                                href="https://www.npmjs.com/package/ai-bind"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline"
                            >
                                NPM Package
                            </a>
                        </div>
                    </div>
                    <div className="mt-12 flex justify-center">
                        <a
                            href="https://github.com/nibodhdaware"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
                        >
                            See More Projects
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
