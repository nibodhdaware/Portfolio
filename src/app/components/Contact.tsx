"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            await emailjs.send(
                "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
                "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: "Nibodh Daware", // Your name
                    reply_to: formData.email,
                },
                "YOUR_PUBLIC_KEY", // Replace with your EmailJS public key
            );

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Error sending email:", error);
            setStatus("error");
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <motion.section
            id="contact"
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
                    Get in Touch
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent3 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent3 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent3 focus:border-transparent"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full px-6 py-3 text-white bg-accent3 hover:bg-accent2 transition-colors duration-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "loading"
                                    ? "Sending..."
                                    : status === "success"
                                    ? "Message Sent!"
                                    : status === "error"
                                    ? "Error Sending Message"
                                    : "Send Message"}
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-white">
                                Let's Connect
                            </h3>
                            <p className="text-gray-300 mb-6">
                                Feel free to reach out to me for any questions
                                or opportunities. I'm always open to discussing
                                new projects, creative ideas, or opportunities
                                to be part of your vision.
                            </p>
                            <div className="space-y-4">
                                <p className="text-gray-300">
                                    <span className="text-accent3">Email:</span>{" "}
                                    <a
                                        href="mailto:nibodhdaware@gmail.com"
                                        className="hover:text-accent2 transition-colors duration-300"
                                    >
                                        nibodhdaware@gmail.com
                                    </a>
                                </p>
                                <p className="text-gray-300">
                                    <span className="text-accent3">
                                        Location:
                                    </span>{" "}
                                    Pune, India
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
