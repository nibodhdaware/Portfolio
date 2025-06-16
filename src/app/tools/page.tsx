"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
    getProductsFromLinks,
    AffiliateProduct,
    AffiliateBook,
} from "@/lib/amazon";

type TabType = "tools" | "books";

export default function ToolsPage() {
    const [tools, setTools] = useState<AffiliateProduct[]>([]);
    const [books, setBooks] = useState<AffiliateBook[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<TabType>("tools");

    useEffect(() => {
        async function fetchProducts() {
            try {
                const [toolsData, booksData] = await Promise.all([
                    getProductsFromLinks("tools"),
                    getProductsFromLinks("books"),
                ]);
                setTools(toolsData);
                setBooks(booksData as AffiliateBook[]);
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

                {/* Tab Navigation */}
                <div className="flex space-x-4 mb-12 border-b border-gray-700/50">
                    <button
                        onClick={() => setActiveTab("tools")}
                        className={`px-6 py-3 text-lg font-semibold transition-all duration-300 relative ${
                            activeTab === "tools"
                                ? "text-accent3"
                                : "text-gray-400 hover:text-gray-200"
                        }`}
                    >
                        Tools I Use
                        {activeTab === "tools" && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent3"
                                initial={false}
                                transition={{ type: "spring", duration: 0.5 }}
                            />
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab("books")}
                        className={`px-6 py-3 text-lg font-semibold transition-all duration-300 relative ${
                            activeTab === "books"
                                ? "text-accent3"
                                : "text-gray-400 hover:text-gray-200"
                        }`}
                    >
                        Books I Read
                        {activeTab === "books" && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent3"
                                initial={false}
                                transition={{ type: "spring", duration: 0.5 }}
                            />
                        )}
                    </button>
                </div>

                {/* Tools Section */}
                {activeTab === "tools" && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.15 }}
                    >
                        <motion.h1 className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-accent3 to-accent2 bg-clip-text text-transparent">
                            Tools I Use
                        </motion.h1>
                        <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
                            Here are some of the tools and equipment I use daily
                            for development and content creation. These are
                            affiliate links that help support my work.
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
                    </motion.div>
                )}

                {/* Books Section */}
                {activeTab === "books" && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.15 }}
                    >
                        <motion.h2 className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-accent3 to-accent2 bg-clip-text text-transparent">
                            Books I Recommend
                        </motion.h2>
                        <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
                            Here are some of the books that have had a
                            significant impact on my personal and professional
                            growth. These are affiliate links that help support
                            my work.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {books.map((book, index) => (
                                <motion.a
                                    key={book.name}
                                    href={book.affiliateLink}
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
                                            src={book.imageUrl}
                                            alt={book.name}
                                            className="w-full h-48 object-cover rounded-t-xl"
                                        />
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col gap-4">
                                        <div>
                                            <span className="text-sm font-semibold text-blue-400 mb-2 block">
                                                {book.category}
                                            </span>
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-[#A10E1D]">
                                                {book.name}
                                            </h3>
                                            {book.author && (
                                                <p className="text-sm text-gray-400 mb-2">
                                                    By {book.author}
                                                </p>
                                            )}
                                        </div>
                                        <p className="text-gray-300 mb-4 flex-1">
                                            {book.description}
                                        </p>
                                        {book.review && (
                                            <p className="text-sm text-gray-400 italic mb-4">
                                                "{book.review}"
                                            </p>
                                        )}
                                        <div className="flex justify-between items-center">
                                            {book.price && (
                                                <p className="text-lg font-semibold text-green-400">
                                                    {book.price}
                                                </p>
                                            )}
                                            {book.rating && (
                                                <p className="text-sm text-yellow-400">
                                                    {book.rating}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.main>
    );
}
