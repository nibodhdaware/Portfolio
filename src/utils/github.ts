export interface GitHubRepo {
    name: string;
    description: string | null;
    html_url: string;
    updated_at: string;
    topics: string[];
    homepage: string | null;
}

export async function getRepositories(username: string): Promise<GitHubRepo[]> {
    const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
        {
            headers: {
                Accept: "application/vnd.github.v3+json",
            },
            next: { revalidate: 3600 }, // Revalidate every hour
        },
    );

    if (!response.ok) {
        throw new Error("Failed to fetch repositories");
    }

    const repos: GitHubRepo[] = await response.json();
    return repos.filter((repo) => !repo.name.includes("nibodhdaware")); // Filter out profile README repo
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) {
        return "just now";
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) {
        return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
    }

    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
        return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
    }

    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
}
