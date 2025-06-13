"use client";

import { motion } from "framer-motion";

interface AboutProps {
    id?: string;
}

export default function About({ id }: AboutProps) {
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
                    About Me
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-4xl py-4"
                >
                    <div className="space-y-6 text-gray-300 py-4">
                        <p className="text-lg leading-relaxed">
                            I'm a passionate developer and content creator with
                            a strong focus on building innovative solutions and
                            sharing knowledge with the community. My journey in
                            technology has been driven by curiosity and a desire
                            to create meaningful impact.
                        </p>
                        <p className="text-lg leading-relaxed">
                            As a student, I've balanced academic excellence with
                            practical experience through freelancing and
                            personal projects. I believe in continuous learning
                            and pushing the boundaries of what's possible with
                            technology.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Through my content creation, I aim to make
                            technology more accessible and help others on their
                            learning journey. Whether it's through code, videos,
                            or articles, I'm committed to sharing knowledge and
                            experiences that can benefit the community.
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
