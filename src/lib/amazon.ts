import axios from "axios";
import * as cheerio from "cheerio";

export interface AmazonProduct {
    name: string;
    description: string;
    imageUrl: string;
    affiliateLink: string;
    category: string;
    price?: string;
    rating?: string;
}

export async function getProductsFromLinks(
    links: string[],
): Promise<AmazonProduct[]> {
    const products: AmazonProduct[] = [];

    for (const link of links) {
        try {
            const response = await axios.get(link, {
                headers: {
                    "User-Agent":
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                },
            });

            const $ = cheerio.load(response.data);

            // Extract product information
            const name = $("#productTitle").text().trim();
            const description = $("#productDescription p")
                .first()
                .text()
                .trim();
            const imageUrl = $("#landingImage").attr("src") || "";
            const price = $(".a-price .a-offscreen").first().text().trim();
            const rating = $(".a-icon-star").first().text().trim();

            products.push({
                name,
                description,
                imageUrl,
                affiliateLink: link,
                category: "Development Tools",
                price,
                rating,
            });
        } catch (error) {
            console.error(`Error scraping product from ${link}:`, error);
        }
    }

    return products;
}
