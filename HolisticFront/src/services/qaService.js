import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:5001/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export const qaService = {

    async getAllQas() {
        try {
            let response = await apiClient.get("/qa");
            return response.data;
        } catch (error) {
            console.error("Error al obtener personas:", error);
            throw error;
        }
    },

    async postQa(userQa) {
        try {
            let qa2 = JSON.stringify(userQa)
            let response = await apiClient.post("/qa/post", qa2);
            return response.data;
        } catch (error) {
            console.error("Error al insertar datos:", error);
            throw error;
        }
    },

    async putQa(qa) {
        try {
            let qa2 = JSON.stringify(qa)
            let response = await apiClient.put("/qa/put", qa2);
            return response.data;
        } catch (error) {
            console.error("Error al actualiar datos:", error);
            throw error;
        }
    },

    async DeleteQa(qa) {
        try {
            let qa2 = JSON.stringify(qa)
            let response = await apiClient.delete("/qa/delete", { data: qa });
            return response.data;
        } catch (error) {
            console.error("Error al eliminar datosssssssss:", error);
            throw error;
        }
    }

   
}