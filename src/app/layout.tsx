import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Nibodh Daware - Portfolio",
    description: "Showcasing my projects and experience.",
    icons: {
        icon: "/icon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </head>
            <body
                className={`${inter.className} min-h-screen bg-primary text-white`}
            >
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
