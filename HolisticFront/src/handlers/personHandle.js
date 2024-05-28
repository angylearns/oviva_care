import { personService } from '../services/personService';
import { userService } from '../services/userService';

export const personHandle = {

    async getAllPersons() {
        try {
            const persons = await personService.getAllPersons();
            return persons;
        } catch (error) {
            console.error("Error al obtener personas:", error);
            throw error;
        }
    },

    async updatePerson(person) {
        try {
            const updatedPerson = await personService.putPerson(person);
            return updatedPerson;
        } catch (error) {
            console.error("Error al actualizar persona:", error);
            throw error;
        }
    },

    async deletePersonById(personId) {
        try {
            const deletedPerson = await personService.DeletePerson({ id_person: personId });
            return deletedPerson;
        } catch (error) {
            console.error("Error al eliminar persona:", error);
            throw error;
        }
    },

    async deleteUserByEmail(email) {
        try {
            const deletedUser = await userService.deleteUser(email);
            return deletedUser;
        } catch (error) {
            console.error("Error al eliminar usuario:", error);
            throw error;
        }
    },

    async deletePerson(person) {
        try {
            await userService.deleteUser(person.email);
            const deletedPerson = await personService.DeletePerson(person);
            return deletedPerson;
        } catch (error) {
            console.error("Error al eliminar persona:", error);
            throw error;
        }
    }

};
