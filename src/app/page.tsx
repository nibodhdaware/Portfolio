"use client";

import { useEffect, useState } from "react";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

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
        color: "text-blue-400",
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

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};

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
                }, 100);
            } else {
                timeout = setTimeout(() => setTyping(false), 150);
            }
        } else {
            if (displayed.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayed(currentRole.slice(0, displayed.length - 1));
                }, 50);
            } else {
                setTyping(true);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        }
        return () => clearTimeout(timeout);
    }, [displayed, typing, roleIndex]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Hero id="home" />
            <About id="about" />
            <Experience id="experience" />
            <Projects id="projects" />
            <Contact id="contact" />
        </main>
    );
}
