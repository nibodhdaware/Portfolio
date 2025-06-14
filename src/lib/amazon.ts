import crypto from 'crypto';

interface AmazonProduct {
    name: string;
    description: string;
    imageUrl: string;
    affiliateLink: string;
    category: string;
    price?: string;
}

const AMAZON_ACCESS_KEY = process.env.AMAZON_ACCESS_KEY || '';
const AMAZON_SECRET_KEY = process.env.AMAZON_SECRET_KEY || '';
const AMAZON_PARTNER_TAG = process.env.AMAZON_PARTNER_TAG || '';

function generateSignature(stringToSign: string, secretKey: string): string {
    return crypto
        .createHmac('sha256', secretKey)
        .update(stringToSign)
        .digest('base64');
}

function getTimestamp(): string {
    return new Date().toISOString();
}

async function getProductDetails(asin: string): Promise<AmazonProduct | null> {
    const timestamp = getTimestamp();
    const endpoint = 'webservices.amazon.com';
    const uri = '/paapi5/getitems';
    const method = 'POST';

    const payload = {
        Resources: [
            'ItemInfo.Title',
            'ItemInfo.Features',
            'Images.Primary.Large',
            'Offers.Listings.Price'
        ],
        ItemIds: [asin],
        PartnerTag: AMAZON_PARTNER_TAG,
        PartnerType: 'Associates',
        Marketplace: 'www.amazon.com'
    };

    const stringToSign = `${method}\n${endpoint}\n${uri}\n${timestamp}`;
    const signature = generateSignature(stringToSign, AMAZON_SECRET_KEY);

    try {
        const response = await fetch(`https://${endpoint}${uri}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'X-Amz-Date': timestamp,
                'X-Amz-Access-Token': AMAZON_ACCESS_KEY,
                'X-Amz-Signature': signature
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const item = data.ItemsResult.Items[0];

        if (!item) {
            return null;
        }

        return {
            name: item.ItemInfo.Title.DisplayValue,
            description: item.ItemInfo.Features?.DisplayValues?.[0] || 'No description available',
            imageUrl: item.Images.Primary.Large.URL,
            affiliateLink: `https://www.amazon.com/dp/${asin}?tag=${AMAZON_PARTNER_TAG}`,
            category: 'Amazon Product',
            price: item.Offers?.Listings?.[0]?.Price?.DisplayAmount
        };
    } catch (error) {
        console.error('Error fetching product details:', error);
        return null;
    }
}

export async function getProductsFromLinks(links: string[]): Promise<AmazonProduct[]> {
    const products: AmazonProduct[] = [];
    
    for (const link of links) {
        // Extract ASIN from Amazon link
        const asinMatch = link.match(/\/dp\/([A-Z0-9]{10})/);
        if (!asinMatch) continue;
        
        const asin = asinMatch[1];
        const product = await getProductDetails(asin);
        
        if (product) {
            products.push(product);
        }
    }
    
    return products;
} 