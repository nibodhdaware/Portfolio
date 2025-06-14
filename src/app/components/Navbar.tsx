"use client";

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};

export default function Navbar() {
    return (
        <nav className="w-full sticky top-0 z-50 bg-primary text-white py-4 px-8 flex items-center justify-between">
            <div className="text-2xl font-extrabold tracking-wide">
                Nibodh Daware
            </div>
            <ul className="flex gap-8 text-lg font-medium">
                {[
                    { name: "About", href: "#about" },
                    { name: "Tools", href: "/tools" },
                    {
                        name: "Blog",
                        href: "https://nibodhdaware.hashnode.dev/",
                    },
                    { name: "Contact", href: "#contact" },
                ].map((item) => (
                    <li key={item.name}>
                        <button
                            onClick={() =>
                                item.href.startsWith("#")
                                    ? scrollToSection(item.href.slice(1))
                                    : window.open(item.href, "_blank")
                            }
                            className="cursor-pointer transition-colors hover:underline hover:text-blue-400"
                        >
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
