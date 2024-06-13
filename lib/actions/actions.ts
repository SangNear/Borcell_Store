export const getCollections = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.log("Failed to fetch collections:", error);
        return null;
    }
};