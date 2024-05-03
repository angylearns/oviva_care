import React, { useEffect, useState } from "react";
import { personService } from '../../services/personService'
import "./adminPerson.css";
import AddPerson from "./AddPerson";

function AdminPerson() {
    const [editMode, setEditMode] = useState(false);
    const [customersGlobal, setCustomersGlobal] = useState([]);
    const [updatePage, setUpdatePage] = useState(false);

    const [fila, setFila] = useState([]);
    const [users, setUsers] = useState([]);
    const [persons, setPersons] = useState([]);
    const [editableRows, setEditableRows] = useState([]);

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

    const [mostrarComponenteEmergente, setMostrarComponenteEmergente] = useState(false);

    const toggleComponenteEmergente = () => {
        setMostrarComponenteEmergente(!mostrarComponenteEmergente);
    };

    const cerrarComponenteEmergente = () => {
        setMostrarComponenteEmergente(false);
    };


    const handleEdit = (index) => {
        if (editableRows.includes(index)) {
            setEditableRows(editableRows.filter((rowIndex) => rowIndex !== index));
        } else {
            setEditableRows([...editableRows, index]);
        }
    };

    const handleSave = (index) => {
        adminServiceF.patchPerson(customersGlobal[index]);
        setEditableRows(editableRows.filter((rowIndex) => rowIndex !== index));
    };

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

    //   useEffect(() => {
    //     setCustomersGlobal(customers);
    //     setFila(customers);
    //   }, []);
    useEffect(() => {
        async function fetchUsers() {
            try {
                const allPersons = await personService.getAllPersons();

                setCustomersGlobal(allPersons);
            } catch (error) {
                console.error("Error al obtener datos:", error);
            }
        }
        fetchUsers();
        setFila(customersGlobal);
    }, []);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const allPersons = await personService.getAllPersons();

                setCustomersGlobal(allPersons);
            } catch (error) {
                console.error("Error al obtener datos:", error);
            }
        }
        fetchUsers();
        setFila(customersGlobal);
    }, [updatePage]);

    const handleDelete = async (index) => {
        await deletePerson(index);
    };

    async function deletePerson(index) {
        adminServiceF.DeletePerson(customersGlobal[index]);
        setUpdatePage((prevState) => !prevState);
    }

    return (
        <div className="mainContainer" >
            <div className="getContainer">
                <div className="headerContent">
                    <div>
                        <h2>Lista de usuarios registrados</h2>
                    </div>
                    <div className="centerBtn">
                        <button onClick={toggleComponenteEmergente} className="buttonAA">Agregar Usuario</button>
                    </div>
                </div>
                {/* Renderizar el componente emergente solo si el estado es verdadero */}
                {mostrarComponenteEmergente && <AddPerson onClose={cerrarComponenteEmergente} />}
                <div className="tableOwerflow">
                    <table className="tableData">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Fecha de Nacimiento</th>
                                <th>País</th>
                                <th>Diagnosticado</th>
                                <th>Email</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customersGlobal.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id_person}</td>
                                    <td>
                                        {editableRows.includes(index) ? (
                                            <input
                                                type="text"
                                                defaultValue={customersGlobal[index]["first_name"]}
                                                onChange={(e) =>
                                                    handleInputChange(e.target.value, index, "first_name")
                                                }
                                            />
                                        ) : (
                                            user.first_name
                                        )}
                                    </td>
                                    <td>
                                        {editableRows.includes(index) ? (
                                            <input
                                                type="text"
                                                defaultValue={customersGlobal[index]["last_name"]}
                                                onChange={(e) =>
                                                    handleInputChange(e.target.value, index, "last_name")
                                                }
                                            />
                                        ) : (
                                            user.last_name
                                        )}
                                    </td>

                                    <td>
                                        {editableRows.includes(index) ? (
                                            <input
                                                type="text"
                                                defaultValue={customersGlobal[index]["birth_date"]}
                                                onChange={(e) =>
                                                    handleInputChange(e.target.value, index, "birth_date")
                                                }
                                            />
                                        ) : (
                                            user.birth_date
                                        )}
                                    </td>
                                    <td>
                                        {editableRows.includes(index) ? (
                                            <input
                                                type="text"
                                                defaultValue={customersGlobal[index]["country"]}
                                                onChange={(e) =>
                                                    handleInputChange(e.target.value, index, "country")
                                                }
                                            />
                                        ) : (
                                            user.country
                                        )}
                                    </td>
                                    <td>
                                        {editableRows.includes(index) ? (
                                            <input
                                                type="text"
                                                defaultValue={customersGlobal[index]["diagnosed"]}
                                                onChange={(e) =>
                                                    handleInputChange(e.target.value, index, "diagnosed")
                                                }
                                            />
                                        ) : (
                                            user.diagnosed
                                        )}
                                    </td>
                                    <td>
                                        {editableRows.includes(index) ? (
                                            <input
                                                type="text"
                                                defaultValue={customersGlobal[index]["email"]}
                                                onChange={(e) =>
                                                    handleInputChange(e.target.value, index, "email")
                                                }
                                            />
                                        ) : (
                                            user.email
                                        )}
                                    </td>
                                    <td>
                                        {editableRows.includes(index) ? (
                                            <button
                                                className="button1"
                                                onClick={() => handleSave(index)}
                                            >
                                                <span className="txtEditSave">Guardar</span>
                                                {/* <img src="https://i.postimg.cc/jSD9KCSq/salvar.png"></img> */}
                                            </button>
                                        ) : (
                                            <button
                                                className="button1"
                                                onClick={() => handleEdit(index)}
                                            >
                                                <span className="txtEditSave">Editar</span>
                                                {/* <img src="https://i.postimg.cc/HsQBd5Qt/editar.png"></img> */}
                                            </button>
                                        )}
                                    </td>
                                    <td>
                                        <button
                                            className="button1"
                                            onClick={() => handleDelete(index)}
                                        >
                                            <span className="txtDelete">Eliminar</span>
                                            {/* <img src="https://i.postimg.cc/mgspHVbq/eliminar-simbolo.png"></img> */}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default AdminPerson;
