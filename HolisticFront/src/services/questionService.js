import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:5001/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export const questionService = {

    async getAllquestions() {
        try {
            let response = await apiClient.get("/qa");
            return response.data;
        } catch (error) {
            console.error("Error al obtener datos:", error);
            throw error;
        }
    },

    async postQuestion(question) {
        try {
            let question2 = JSON.stringify(question)
            let response = await apiClient.post("/qa/post", question2);
            return response.data;
        } catch (error) {
            console.error("Error al insertar datos:", error);
            throw error;
        }
    },

    async putQuestion(question) {
        try {
            let question2 = JSON.stringify(question)
            let response = await apiClient.put("/qa/put", question2);
            return response.data;
        } catch (error) {
            console.error("Error al actualiar datos:", error);
            throw error;
        }
    },

    async deleteQuestion(question) {
        try {
            let question2 = JSON.stringify(question)
            let response = await apiClient.delete("/qa/delete", { data: question });
            return response.data;
        } catch (error) {
            console.error("Error al eliminar datos:", error);
            throw error;
        }
    }
}