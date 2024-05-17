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



    async putUserEmail(email,id) {
        try {
            //let email2 = JSON.stringify(email)
            console.log("burger")
            console.log(email)
            let response = await apiClient.put(`/user/putUserEmail`, { email: email, id: id });
            

            return response.data;
        } catch (error) {
            console.error("Error al actualiar datos:", error);
            throw error;
        }
    },

    async get_idUserbyEmail(email) {
        try {
            //let email2 = JSON.stringify(email)
            console.log(email)
            console.log("patata")
            let response = await apiClient.get(`/user/getUserByEmail/${email}`);
            const id = response.data; 
            console.log("resoponsseee dataa")// The response should contain the user ID as a string
            console.log(response.data)
            //return id;
            return response.data;
        } catch (error) {
            console.error("Error al actualiar datos:", error);
            throw error;
        }
    }
};




