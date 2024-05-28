import React, { useEffect, useState } from "react";
import { personService } from '../../services/personService'
import "./addPerson.css";

function AddPerson({ onClose }) {

    const [customersGlobal, setCustomersGlobal] = useState([]);
    const [updatePage, setUpdatePage] = useState();

    const [formData, setFormData] = useState({
        id_person: "",
        first_name: "",
        last_name: "",
        birth_date: "",
        country: "",
        diagnosed: "",
        email: "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    async function postPerson(formData) {
        const user1 = {
            id_person: "",
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
        postPerson(formData);

        setUpdatePage((prevState) => !prevState);
        setFormData({
            id_person: "",
            first_name: "",
            last_name: "",
            birth_date: "",
            country: "",
            diagnosed: "",
            email: ""
        });
    };


    return (
        <div className="postContainer" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }} >
            <img src="https://i.postimg.cc/6QBym64B/close-Green.png" alt="Cerrar" style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} onClick={onClose} />
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
                                className="inputF"
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
                                className="inputF"
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
                                className="inputF"
                                placeholder="YYYY-MM-DD"
                            />
                        </div>
                        <div className="smallDiv">
                            <label className="labelStyle">País:</label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                required
                                className="inputF"
                            />
                        </div>
                        <div className="smallDiv">
                            <label className="labelStyle"> Diagnosticado: </label>
                            <select
                                name="diagnosed"
                                value={formData.diagnosed}
                                onChange={handleChange}
                                required
                                className="inputF"
                            >
                                <option value="">Selecciona una opción</option>
                                <option value="1">si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                        <div className="smallDiv">
                            <label className="labelStyle">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                title="Ingrese un correo electrónico válido"
                                className="inputF"
                            />
                        </div>
                        <div className="buttonAdd">
                            <button className="buttonAA" type="submit">
                                Añadir Cliente
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default AddPerson;
