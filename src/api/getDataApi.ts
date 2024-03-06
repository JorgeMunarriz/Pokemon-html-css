import { VITE_URL } from "../global/apiUrl";

export const getDataApiPublic = async(endpoint: string) => {
    try {
        const response = await fetch(`${VITE_URL}/${endpoint}`);
        const data = await response.json();
        return data;

    }
    catch (error) {
        throw new Error("Error fetching data")
    }
}