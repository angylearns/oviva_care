import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:5001/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export const userService = {
    
    async deleteUser(userEmail) {
        try {
            console.log("Deleting user with email:", userEmail);

            let response = await apiClient.delete(`/user/delete/${userEmail}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    },

};




