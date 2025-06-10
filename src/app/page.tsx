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
        </main>
    );
}
