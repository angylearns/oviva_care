import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:5001/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export const personService = {

    async getAllPersons() {
        try {
            let response = await apiClient.get("/person");
            return response.data;
        } catch (error) {
            console.error("Error al obtener personas:", error);
            throw error;
        }
    },

    async postUser(userPerson) {
        try {
            let user2 = JSON.stringify(userPerson)
            let response = await apiClient.post("/person", user2);
            return response.data;
        } catch (error) {
            console.error("Error al insertar datos:", error);
            throw error;
        }
    },

    async patchPerson(person) {
        try {
            let person2 = JSON.stringify(person)
            let response = await apiClient.patch("/person", person2);
            return response.data;
        } catch (error) {
            console.error("Error al actualiar datos:", error);
            throw error;
        }
    },

    async DeletePerson(person) {
        try {
            let person2 = JSON.stringify(person)
            let response = await apiClient.delete("/person", { data: person });
            return response.data;
        } catch (error) {
            console.error("Error al eliminar datosssssssss:", error);
            throw error;
        }
    }

   
}