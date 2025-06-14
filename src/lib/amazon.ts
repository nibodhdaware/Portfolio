export interface AmazonProduct {
    name: string;
    description: string;
    imageUrl: string;
    affiliateLink: string;
    category: string;
    price?: string;
    rating?: string;
}

// Static data for tools
const toolsData: AmazonProduct[] = [
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

export async function getProductsFromLinks(
    links: string[],
): Promise<AmazonProduct[]> {
    // Return the static data
    return toolsData;
}
