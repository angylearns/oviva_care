import React, { useEffect, useState } from "react";
import { personService } from '../../services/personService'
import "./addPerson.css";

function AddPerson() {
    
    const [customersGlobal, setCustomersGlobal] = useState([]);
  
    const [formData, setFormData] = useState({
        id_person: "",
        first_name: "",
        last_name: "",
        birth_date: "",
        country: "",
        diagnosed: "",
        email: "",
        // username: "",
    });

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setFila(customers[index]);
        setFormData({ ...formData, [name]: value });
    };

    const handleInputChange = (newValue, index, field) => {
        customersGlobal[index][field] = newValue;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    async function postPerson(formData) {
        const user1 = {
            id_person: "",
            user_name: formData.username,
            first_name: formData.first_name,
            last_name: formData.last_name,
            birth_date: formData.birth_date,
            country: formData.country,
            diagnosed: formData.diagnosed,
            email: formData.email,
        };

        try {
            const newUser = await personService.postPerson(user1);
        } catch (error) {
            console.error("Error al insertar datos:", error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        await postUsers(formData);
        setUpdatePage((prevState) => !prevState);
        setFormData({
            id_person: "",
            first_name: "",
            last_name: "",
            birth_date: "",
            country: "",
            diagnosed: "",
            email: ""
            //   username: "",
        });
    };

 




    return (


        <div className="postContainer">
            <form onSubmit={handleSubmit}>
                <div className="formContentA">
                    <div className="groupForm1">
                        <div className="smallDiv">
                            <label className="labelStyle">Nombre:</label>
                            <input
                                type="text"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="smallDiv">
                            <label className="labelStyle">Apellidos:</label>
                            <input
                                type="text"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="smallDiv">
                            <label className="labelStyle">Fecha de Nacimiento:</label>
                            <input
                                type="text"
                                name="birth_date"
                                value={formData.birth_date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="smallDiv">
                        <label className="labelStyle">País:</label>
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="smallDiv">
                        <label className="labelStyle"> Diagnosticado: </label>
                        <input
                            type="text"
                            name="diagnosed"
                            value={formData.diagnosed}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="groupForm2">
                        <div className="smallDiv">
                            <label className="labelStyle">Email:</label>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <br></br>
                    <div className="buttonAdd">
                        <button className="buttonAA" type="submit">
                            Añadir Cliente
                        </button>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default AddPerson;
