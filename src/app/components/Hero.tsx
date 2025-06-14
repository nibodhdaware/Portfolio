"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface HeroProps {
    id?: string;
}

const roles = [
    {
        text: "Full Stack Developer",
        link: "https://github.com/nibodhdaware",
        color: "text-blue-400",
    },
    {
        text: "Content Creator",
        link: "https://youtube.com/@nibodhdaware",
        color: "text-red-400",
    },
    {
        text: "Student",
        link: "https://linkedin.com/in/nibodhdaware",
        color: "text-green-400",
    },
];

export default function Hero({ id }: HeroProps) {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isWaiting, setIsWaiting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex].text;
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const waitTime = 2000;

        if (isWaiting) {
            const timer = setTimeout(() => {
                setIsWaiting(false);
                setIsDeleting(true);
            }, waitTime);
            return () => clearTimeout(timer);
        }

        if (isDeleting) {
            if (displayed === "") {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
                return;
            }
            const timer = setTimeout(() => {
                setDisplayed((prev) => prev.slice(0, -1));
            }, deletingSpeed);
            return () => clearTimeout(timer);
        }

        if (displayed === currentRole) {
            setIsWaiting(true);
            return;
        }

        const timer = setTimeout(() => {
            setDisplayed((prev) => currentRole.slice(0, prev.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timer);
    }, [roleIndex, displayed, isDeleting, isWaiting]);

    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col md:flex-row w-full h-screen items-center"
        >
            {/* Left: Name and Subtitle */}
            <div className="flex-1 flex flex-col justify-center h-full w-full px-8 md:px-16">
                <div className="hidden md:block">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.15, delay: 0.1 }}
                        className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-accent3 to-accent2 bg-clip-text text-transparent"
                    >
                        Nibodh Daware
                    </motion.h1>
                </div>
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15, delay: 0.2 }}
                    className="text-2xl md:text-3xl text-gray-200 mb-8 font-light max-w-xl text-left h-12"
                >
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
                        <span className="animate-pulse text-current">|</span>
                    </span>
                </motion.p>
            </div>
            {/* Right: Profile Photo */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15, delay: 0.3 }}
                className="flex-1 flex items-center justify-center h-full"
            >
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
            </motion.div>
        </motion.section>
    );
}
