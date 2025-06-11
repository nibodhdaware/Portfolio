"use client";

import { motion } from "framer-motion";

const Experience = () => {
    const experiences = [
        {
            title: "Founder & Developer",
            company: "DocOnTap",
            period: "Feb 2024 – July 2025",
            description: [
                "Developed an online platform for physiotherapy appointments and clinic discovery.",
                "Integrated real-time scheduling and WhatsApp notification system.",
            ],
        },
        {
            title: "Freelance Developer",
            company: "Private Clients",
            period: "2022 – 2023",
            description: [
                "Built cryptographic image encryption using AES and designed a secure wallet ID system.",
                "Developed a remote desktop support tool and contributed to client-side development tools.",
            ],
        },
        {
            title: "Front-end Developer",
            company: "MRND Labs Pvt. Ltd",
            period: "Jul 2022",
            description: [
                "Designed and implemented a web interface for insurance claims using ReactJS.",
            ],
        },
    ];

    return (
        <motion.section
            id="experience"
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
                    Experience
                </motion.h2>
                <div className="grid grid-cols-1 gap-6 mb-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-white">
                                        {exp.title}
                                    </h3>
                                    <p className="text-gray-300">
                                        {exp.company}
                                    </p>
                                </div>
                                <p className="text-gray-400 mt-2 md:mt-0">
                                    {exp.period}
                                </p>
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                                {exp.description.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center"
                >
                    <a
                        href="/Resume (Short).pdf"
                        download
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white"
                    >
                        Download Resume
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Experience;
