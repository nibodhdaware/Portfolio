"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getProductsFromLinks, AmazonProduct } from "@/lib/amazon";

// Just add your Amazon product links here
const amazonLinks = ["https://amzn.to/4l7fT4O"];

export default function ToolsPage() {
    const [tools, setTools] = useState<AmazonProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const products = await getProductsFromLinks(amazonLinks);
                setTools(products);
            } catch (err) {
                setError("Failed to fetch products. Please try again later.");
                console.error("Error fetching products:", err);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-primary text-white flex items-center justify-center">
                <div className="text-2xl">Loading products...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-primary text-white flex items-center justify-center">
                <div className="text-2xl text-red-400">{error}</div>
            </div>
        );
    }

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
                    Tools I Use
                </motion.h1>
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
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.15,
                                delay: index * 0.05,
                            }}
                            className="bg-gray-900/80 backdrop-blur-sm rounded-xl border-2 border-gray-700/50 group cursor-pointer flex flex-col"
                            whileHover={{
                                borderColor: "#A10E1D",
                                backgroundColor: "#111827",
                                transition: { duration: 0.15 },
                            }}
                        >
                            <div className="aspect-w-16 aspect-h-9">
                                <img
                                    src={tool.imageUrl}
                                    alt={tool.name}
                                    className="w-full h-48 object-cover rounded-t-xl"
                                />
                            </div>
                            <div className="p-6 flex-1 flex flex-col gap-4">
                                <div>
                                    <span className="text-sm font-semibold text-blue-400 mb-2 block">
                                        {tool.category}
                                    </span>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#A10E1D]">
                                        {tool.name}
                                    </h3>
                                </div>
                                <p className="text-gray-300 mb-4 flex-1">
                                    {tool.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    {tool.price && (
                                        <p className="text-lg font-semibold text-green-400">
                                            {tool.price}
                                        </p>
                                    )}
                                    {tool.rating && (
                                        <p className="text-sm text-yellow-400">
                                            {tool.rating}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.main>
    );
}
