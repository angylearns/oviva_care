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

    async postPerson(userPerson) {
        try {
            let user2 = JSON.stringify(userPerson)
            let response = await apiClient.post("/person/post", user2);
            return response.data;
        } catch (error) {
            console.error("Error al insertar datos:", error);
            throw error;
        }
    },

    async putPerson(person) {
        try {
            let person2 = JSON.stringify(person)
            let response = await apiClient.put("/person/put", person2);
            return response.data;
        } catch (error) {
            console.error("Error al actualiar datos:", error);
            throw error;
        }
    },

    async DeletePerson(person) {
        try {
            let person2 = JSON.stringify(person)
            let response = await apiClient.delete("/person/delete", { data: person });
            return response.data;
        } catch (error) {
            console.error("Error al eliminar datosssssssss:", error);
            throw error;
        }
    }

   
}