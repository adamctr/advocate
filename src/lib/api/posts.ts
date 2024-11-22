import axios from "axios";
import API_URL from "../config";

// Récupérer tous les articles

export const getPosts = async () => {
    try {
        const response = await axios.get(`${API_URL}/posts`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des articles:", error);
        return [];  // ou tu peux gérer cela d'une autre manière
    }
}

export const getPostBySlug = async (slug: string) => {
    try {
        const response = await axios.get(`${API_URL}/posts?slug=${slug}`);
        return response.data[0];
    } catch (error) {
        console.error("Erreur lors de la récupération de l'article:", error);
        return null;  // ou tu peux gérer cela autrement
    }
}