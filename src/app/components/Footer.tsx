"use client";

import { FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa6";
import {
    FaSquareUpwork,
    FaGithub,
    FaHashnode,
    FaXTwitter,
} from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { motion } from "framer-motion";

const socialLinks = [
    {
        icon: FaLinkedin,
        color: "text-gray-300",
        link: "https://www.linkedin.com/in/nibodhdaware/",
    },
    {
        icon: FaYoutube,
        color: "text-red-500",
        link: "https://www.youtube.com/@nibodhdaware",
    },
    {
        icon: FaHashnode,
        color: "text-blue-400",
        link: "https://nibodhdaware.hashnode.dev/",
    },
    {
        icon: FaSquareUpwork,
        color: "text-green-500",
        link: "https://upwork.com/freelancers/nibodhdaware",
    },
    {
        icon: FaGithub,
        color: "text-yellow-400",
        link: "https://github.com/nibodhdaware",
    },
    {
        icon: FaInstagram,
        color: "text-pink-500",
        link: "https://www.instagram.com/nibodhdaware/",
    },
    {
        icon: FaXTwitter,
        color: "text-blue-400",
        link: "https://x.com/nibodhdaware",
    },
    {
        icon: TbBrandFiverr,
        color: "text-green-500",
        link: "https://www.fiverr.com/nibodhdaware",
    },
];

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full bg-primary py-0"
        >
            <div className="container mx-auto px-8 md:px-16 flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap gap-2 items-center justify-center w-full flex-row py-4"
                >
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`hover:opacity-75 transition-opacity duration-300 ${link.color}`}
                        >
                            <link.icon size={24} />
                        </a>
                    ))}
                </motion.div>
            </div>
        </motion.footer>
    );
}
