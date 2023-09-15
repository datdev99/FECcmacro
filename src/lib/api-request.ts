import axios from "axios";

const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "https://localhost:7256";

export async function apiGetSuperHero() {
    try {
        const response = await axios.get(`${SERVER_ENDPOINT}/api/SuperHero`);
        // Handle the successful response here
        console.log('Data:', response.data);
        return response.data;
      } catch (error) {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
        throw error; // You can choose to rethrow the error or handle it as needed
      }
}