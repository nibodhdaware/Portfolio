"use client";

import { motion } from "framer-motion";

interface Tool {
    name: string;
    description: string;
    imageUrl: string;
    affiliateLink: string;
    category: string;
}

const tools: Tool[] = [
    {
        name: "MacBook Pro M2",
        description:
            "My primary development machine with incredible performance and battery life.",
        imageUrl:
            "https://m.media-amazon.com/images/I/61L5QgPvgqL._AC_SL1500_.jpg",
        affiliateLink: "https://www.amazon.com/dp/B0CHWRXHNL?ref=myi_title_dp",
        category: "Hardware",
    },
    {
        name: "Logitech MX Master 3S",
        description:
            "Premium wireless mouse perfect for developers with customizable buttons.",
        imageUrl:
            "https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_SL1500_.jpg",
        affiliateLink: "https://www.amazon.com/dp/B09HM94VDS?ref=myi_title_dp",
        category: "Peripherals",
    },
    {
        name: "Keychron K2",
        description:
            "Mechanical keyboard with RGB backlight and wireless connectivity.",
        imageUrl:
            "https://m.media-amazon.com/images/I/61pBvlYVPxL._AC_SL1500_.jpg",
        affiliateLink: "https://www.amazon.com/dp/B07WC5VN68?ref=myi_title_dp",
        category: "Peripherals",
    },
];

export default function ToolsPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-primary text-white py-16 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">
                    Tools I Use
                </h1>
                <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
                    Here are some of the tools and equipment I use daily for
                    development and content creation. These are affiliate links
                    that help support my work.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tools.map((tool, index) => (
                        <motion.a
                            key={tool.name}
                            href={tool.affiliateLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="aspect-w-16 aspect-h-9">
                                <img
                                    src={tool.imageUrl}
                                    alt={tool.name}
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <span className="text-sm font-semibold text-blue-400 mb-2 block">
                                    {tool.category}
                                </span>
                                <h3 className="text-xl font-bold mb-2">
                                    {tool.name}
                                </h3>
                                <p className="text-gray-300">
                                    {tool.description}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
