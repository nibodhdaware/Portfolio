"use client";

import Link from "next/link";

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};

export default function Navbar() {
    const navItems = [
        { name: "About", href: "#about" },
        { name: "Tools", href: "/tools" },
        {
            name: "Blog",
            href: "https://nibodhdaware.hashnode.dev/",
            external: true,
        },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="w-full sticky top-0 z-50 bg-primary text-white py-4 px-8 flex items-center justify-between">
            <div className="hidden md:block text-2xl font-extrabold tracking-wide">
                Nibodh Daware
            </div>
            <ul className="flex gap-8 text-lg font-medium">
                {navItems.map((item) => (
                    <li key={item.name}>
                        {item.external ? (
                            <button
                                onClick={() => window.open(item.href, "_blank")}
                                className="cursor-pointer transition-colors hover:underline hover:text-blue-400"
                            >
                                {item.name}
                            </button>
                        ) : item.href.startsWith("#") ? (
                            <button
                                onClick={() =>
                                    scrollToSection(item.href.slice(1))
                                }
                                className="cursor-pointer transition-colors hover:underline hover:text-blue-400"
                            >
                                {item.name}
                            </button>
                        ) : (
                            <Link
                                href={item.href}
                                className="cursor-pointer transition-colors hover:underline hover:text-blue-400"
                            >
                                {item.name}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
