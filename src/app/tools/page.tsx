"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getProductsFromLinks } from "@/lib/amazon";

interface Tool {
    name: string;
    description: string;
    imageUrl: string;
    affiliateLink: string;
    category: string;
    price?: string;
}

// Just add your Amazon product links here
const amazonLinks = ["https://amzn.to/4l7fT4O"];

export default function ToolsPage() {
    const [tools, setTools] = useState<Tool[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const products = await getProductsFromLinks(amazonLinks);
                setTools(products);
            } catch (err) {
                setError('Failed to fetch products. Please try again later.');
                console.error('Error fetching products:', err);
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
                                <p className="text-gray-300 mb-4">
                                    {tool.description}
                                </p>
                                {tool.price && (
                                    <p className="text-lg font-semibold text-green-400">
                                        {tool.price}
                                    </p>
                                )}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
