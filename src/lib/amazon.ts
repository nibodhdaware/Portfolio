export interface AffiliateProduct {
    name: string;
    description: string;
    imageUrl: string;
    affiliateLink: string;
    category: string;
    price?: string;
    rating?: string;
}

export interface AffiliateBook extends AffiliateProduct {
    author?: string;
    review?: string;
}

// Static data for tools
const toolsData: AffiliateProduct[] = [
    {
        name: "Portronics Hydra 10 Mechanical Wireless Gaming Keyboard",
        description:
            "A wireless gaming keyboard with a 10-key rollover, 16.8 million colors, and a type-c charging port. Perfect for gaming and productivity.",
        imageUrl:
            "https://m.media-amazon.com/images/I/611EaZOjMOL._SL1200_.jpg",
        affiliateLink: "https://amzn.to/43Ymibp",
        category: "Keyboard",
        price: "₹2,599",
        rating: "4.2/5 (850+ reviews)",
    },
    {
        name: "Tukzer Retro Extended Gaming Mouse Pad, High-Speed Mouse Tracking & Control | Stitched Edges, Non-Slip Rubber Base| for Computer Laptop Keyboard Office Home (795mm x 298mm x 3.45mm, Abstract-1)",
        description:
            "A gaming mouse pad with a high-speed mouse tracking and control, stitched edges, and a non-slip rubber base. Perfect for gaming and productivity.",
        imageUrl:
            "https://m.media-amazon.com/images/I/51Dj5d009vS._SL1500_.jpg",
        affiliateLink: "https://amzn.to/4e6emJV",
        category: "Mouse Pad",
        price: "₹299",
        rating: "4.4/5 (1.4k+ reviews)",
    },
    {
        name: "Boult Q Over Ear Bluetooth Headphones with 70H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, 4 EQ Modes, BTv 5.4, AUX Option, Easy Control, IPX5 headphones wireless with mic (Black)",
        description:
            "A wireless gaming keyboard with a 10-key rollover, 16.8 million colors, and a type-c charging port. Perfect for gaming and productivity.",
        imageUrl:
            "https://m.media-amazon.com/images/I/71zfpkr4bYL._SL1500_.jpg",
        affiliateLink: "https://amzn.to/3HDEbVv",
        category: "Headphones",
        price: "₹1,999",
        rating: "4.1/5 (2.8k+ reviews)",
    },
    {
        name: "MAONO AU-902 USB Condenser Podcast Unidirectional Microphone, with Dual Volume Control, Mute Button, Monitor Headphone Jack, Plug and Play Mic for Vlogging, Gaming, Studio Recording, YouTube (Black)",
        description:
            "A USB condenser microphone with a dual volume control, mute button, monitor headphone jack, and plug and play functionality. Perfect for vlogging, gaming, studio recording, and YouTube.",
        imageUrl:
            "https://m.media-amazon.com/images/I/511deCRTdML._SL1000_.jpg",
        affiliateLink: "https://amzn.to/44g61Qo",
        category: "Microphone",
        price: "₹3,528",
        rating: "4/5 (590+ reviews)",
    },
    {
        name: "Seagate Expansion 1TB External HDD - USB 3.0 for Windows and Mac with 3 yr Data Recovery Services, Portable Hard Drive (STKM1000400)",
        description:
            "A portable hard drive with a USB 3.0 interface, 1TB capacity, and 3-year data recovery services. Perfect for storing and transferring data.",
        imageUrl:
            "https://m.media-amazon.com/images/I/814SDu24dnL._SL1500_.jpg",
        affiliateLink: "https://amzn.to/4jUBwUW",
        category: "Hard Drive",
        price: "₹5,499",
        rating: "4.4/5 (28.6k+ reviews)",
    },
    {
        name: "Logitech M331 Silent Plus Wireless Mouse, 2.4GHz with USB Nano Receiver, 1000 DPI Optical Tracking, 3 Buttons, 24 Month Battery Life, PC/Mac/Laptop - Black",
        description:
            "A wireless mouse with a 2.4GHz USB nano receiver, 1000 DPI optical tracking, and a 24-month battery life. Compatible with PC, Mac, and laptops.",
        imageUrl:
            "https://m.media-amazon.com/images/I/61qm452yy-L._SL1500_.jpg",
        affiliateLink: "https://amzn.to/3ZTdiTZ",
        category: "Mouse",
        price: "₹1,145",
        rating: "4.4/5 (10.1k+ reviews)",
    },
];

// Static data for books
const booksData: AffiliateBook[] = [
    {
        name: "Elon Musk",
        author: "Ashlee Vance",
        review: "A fascinating look into the life of one of the most influential entrepreneurs of our time. This book provides incredible insights into Musk's vision and determination.",
        description:
            "The definitive biography of the most controversial and successful tech entrepreneur of our time. A revealing look at the man behind Tesla, SpaceX, and the quest for a fantastic future.",
        imageUrl:
            "https://m.media-amazon.com/images/I/81KAg5fnOhL._SL1500_.jpg",
        affiliateLink: "https://amzn.to/3Zt7aBC",
        category: "Biography",
        price: "₹422 (Paperback)",
        rating: "4.5/5 (13.2k+ reviews)",
    },
    {
        name: "SUPERINTELLIGENCE: Paths, Dangers, Strategies",
        author: "Nick Bostrom",
        review: "A thought-provoking exploration of the future of artificial intelligence. Bostrom raises important questions about the potential risks and benefits of superintelligent AI.",
        description:
            "What happens when machines surpass humans in general intelligence? In this book, philosopher Nick Bostrom explores the future of artificial intelligence and its implications for humanity.",
        imageUrl:
            "https://m.media-amazon.com/images/I/71UvMcdcE9L._SL1159_.jpg",
        affiliateLink: "https://amzn.to/44g7Ahc",
        category: "Technology",
        price: "₹467 (Paperback)",
        rating: "4.4/5 (4.1k+ reviews)",
    },
    {
        name: "Steve Jobs",
        author: "Walter Isaacson",
        review: "An in-depth biography of the visionary behind Apple. Isaacson's portrayal of Jobs is both inspiring and cautionary, offering lessons on innovation and leadership.",
        description:
            "Based on more than forty interviews with Steve Jobs conducted over two years, as well as interviews with more than a hundred family members, friends, adversaries, competitors, and colleagues, this is the exclusive biography of the Apple co-founder.",
        imageUrl:
            "https://m.media-amazon.com/images/I/71AIVdLiiAL._SL1500_.jpg",
        affiliateLink: "https://amzn.to/403q95O",
        category: "Biography",
        price: "₹250.16 (Kindle Edition)",
        rating: "4.7/5 (22.7k+ reviews)",
    },
    {
        name: "Ratan Tata: A Complete Biography",
        author: "A. K. Gandhi",
        review: "An inspiring biography of one of India's most respected industrialists. Gandhi's account of Ratan Tata's life and achievements is both informative and motivational.",
        description:
            "This biography traces the life of Ratan Tata, from his early days to becoming one of the most respected industrialists in India. It highlights his contributions to the Tata Group and his philanthropic efforts.",
        imageUrl:
            "https://m.media-amazon.com/images/I/71Iz9TUbqfL._SL1500_.jpg",
        affiliateLink: "https://amzn.to/4mU4erA",
        category: "Biography",
        price: "₹201.81 (Paperback)",
        rating: "4.2/5 (600+ reviews)",
    },
    {
        name: "Finish What You Start: The Art of Following Through, Taking Action, Executing, & Self-Discipline",
        author: "Peter Hollins",
        review: "A practical guide to achieving your goals and mastering self-discipline. Hollins provides actionable strategies to help you follow through on your commitments.",
        description:
            "Learn how to follow through on your goals and commitments with this practical guide. Hollins shares strategies for taking action, executing plans, and developing self-discipline.",
        imageUrl:
            "https://m.media-amazon.com/images/I/71m614-KA5L._SL1500_.jpg",
        affiliateLink: "https://amzn.to/43WzVYB",
        category: "Self-Help",
        price: "₹289 (Paperback)",
        rating: "4.4/5 (3k+ reviews)",
    },
    {
        name: "Zero to One: Notes on Startups, or How to Build the Future",
        author: "Peter Thiel",
        review: "A groundbreaking book on startups and innovation. Thiel's insights on building a successful business from scratch are invaluable for entrepreneurs.",
        description:
            "In this book, Peter Thiel shares his philosophy on startups and innovation. He argues that the future of technology lies in creating new things rather than copying existing ones.",
        imageUrl:
            "https://m.media-amazon.com/images/I/61PDzIhVLnL._SL1100_.jpg",
        affiliateLink: "https://amzn.to/4jTdt8G",
        category: "Business",
        price: "₹417 (Paperback)",
        rating: "4.5/5 (32.4k+ reviews)",
    },
];

export async function getProductsFromLinks(
    type: "tools" | "books",
): Promise<AffiliateProduct[] | AffiliateBook[]> {
    // Return the appropriate static data based on type
    return type === "tools" ? toolsData : booksData;
}
