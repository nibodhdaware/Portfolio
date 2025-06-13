import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
    title: "Nibodh Daware - Portfolio",
    description: "Showcasing my projects and experience.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-primary text-white">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
