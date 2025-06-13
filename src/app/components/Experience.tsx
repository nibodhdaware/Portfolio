"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ExperienceProps {
    id?: string;
}

const Experience = ({ id }: ExperienceProps) => {
    const experiences = [
        {
            title: "Founder & Developer",
            company: "DocOnTap",
            period: "Feb 2024 – July 2025",
            description: [
                "Developed an online platform for physiotherapy appointments and clinic discovery.",
                "Integrated real-time scheduling and WhatsApp notification system.",
            ],
            image: "/placeholder-experience.png",
        },
        {
            title: "Freelance Developer",
            company: "Private Clients",
            period: "2022 – 2023",
            description: [
                "Built cryptographic image encryption using AES and designed a secure wallet ID system.",
                "Developed a remote desktop support tool and contributed to client-side development tools.",
            ],
            image: "/placeholder-experience.png",
        },
        {
            title: "Front-end Developer",
            company: "MRND Labs Pvt. Ltd",
            period: "Jul 2022",
            description: [
                "Designed and implemented a web interface for insurance claims using ReactJS.",
            ],
            image: "/placeholder-experience.png",
        },
    ];

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
                    Where I Worked
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-4xl py-4"
                >
                    <div className="flex flex-col gap-y-12 text-gray-300 py-4">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2,
                                }}
                                className={`
                                    ${
                                        index < experiences.length - 1
                                            ? "mb-12"
                                            : ""
                                    }
                                `}
                            >
                                {/* Company Name - Topmost, Bigger, Bold, Hover effect */}
                                <p className="text-2xl font-bold text-white mb-2 transition-colors duration-300 hover:text-accent3">
                                    {exp.company}
                                </p>

                                {/* Role and Period - combined and darkened */}
                                <p className="text-xl text-gray-500 mb-4">
                                    <span className="font-semibold">
                                        {exp.title}
                                    </span>{" "}
                                    (
                                    <span className="text-accent3">
                                        {exp.period}
                                    </span>
                                    )
                                </p>

                                {/* Combined Description */}
                                <p className="text-lg leading-relaxed text-gray-300">
                                    {exp.description.join(". ")}
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
                        href="/Resume (Short).pdf"
                        download
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-sm font-medium rounded-md text-white hover:bg-accent3/10 transition-all duration-300"
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
                        <span>Download Resume</span>
                    </motion.a>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Experience;
