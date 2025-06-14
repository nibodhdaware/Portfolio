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
];

export async function getProductsFromLinks(
    links: string[],
): Promise<AmazonProduct[]> {
    // Return the static data
    return toolsData;
}
