import React, { useEffect, useState } from "react";
import { personService } from '../../services/personService'
import "./adminPerson.css";
import AddPerson from "./AddPerson";

// Función para formatear la fecha justo antes de mostrarla
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;
};



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
        setUpdatePage((prevState) => !prevState);
    };


    const [sortBy, setSortBy] = useState({ field: null, order: "asc" });

    const handleSort = (field) => {
        if (sortBy.field === field) {
            // Si el campo actualmente seleccionado es el mismo que el último ordenado,
            // invertimos el orden.
            setSortBy({ field, order: sortBy.order === "asc" ? "desc" : "asc" });
        } else {
            // Si el campo actualmente seleccionado es diferente del último ordenado,
            // establecemos el nuevo campo y ordenamos de forma ascendente.
            setSortBy({ field, order: "asc" });
        }
    };

    const convertDateToISOFormat = (dateString) => {
        // Verificar si la cadena es undefined
        if (!dateString) {
            return ''; // O maneja el caso de cadena vacía según tu lógica
        }
        
        const parts = dateString.split('/');
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
    };

    customersGlobal.sort((a, b) => {
        // Función de comparación para ordenar según el campo seleccionado.
        let fieldA, fieldB;
    
        if (sortBy.field === "birth_date") {
            fieldA = new Date(convertDateToISOFormat(a[sortBy.field]));
            fieldB = new Date(convertDateToISOFormat(b[sortBy.field]));
        } else {
            fieldA = a[sortBy.field];
            fieldB = b[sortBy.field];
        }
    
        // Comparación basada en el tipo de campo
        if (typeof fieldA === 'string' && typeof fieldB === 'string') {
            // Si ambos campos son cadenas, realizar una comparación de cadenas
            return sortBy.order === "asc" ? fieldA.localeCompare(fieldB) : fieldB.localeCompare(fieldA);
        } else {
            // De lo contrario, realizar una comparación normal
            if (fieldA < fieldB) {
                return sortBy.order === "asc" ? -1 : 1;
            }
            if (fieldA > fieldB) {
                return sortBy.order === "asc" ? 1 : -1;
            }
            return 0;
        }
    });
    

    


    const handleEdit = (index) => {
        if (editableRows.includes(index)) {
            setEditableRows(editableRows.filter((rowIndex) => rowIndex !== index));
        } else {
            setEditableRows([...editableRows, index]);
        }
    };

    const handleSave = (index) => {
        personService.putPerson(customersGlobal[index]);
        setEditableRows(editableRows.filter((rowIndex) => rowIndex !== index));
    };


    const handleDelete = async (index) => {
        await deletePerson(index);
        setUpdatePage((prevState) => !prevState);
    };

    async function deletePerson(index) {
        personService.DeletePerson(customersGlobal[index]);

    }
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


    async function fetchUsers() {
        try {
            const allPersons = await personService.getAllPersons();

            // Modificar las fechas al recibirlas
            const modifiedPersons = allPersons.map(person => {
                return {
                    ...person,
                    // Modificar la propiedad de fecha según sea necesario
                    birth_date: formatDate(person.birth_date)
                };
            });

            setCustomersGlobal(modifiedPersons);

        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    }

    useEffect(() => {
        fetchUsers();
        setFila(customersGlobal);

    }, []);

    useEffect(() => {
        fetchUsers();
        setFila(customersGlobal);
    }, [updatePage]);




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
                {mostrarComponenteEmergente && <AddPerson onClose={cerrarComponenteEmergente} />}
                <div className="tableOwerflow">
                    <table className="tableData">
                        <thead>
                            <tr>
                                <th onClick={() => handleSort("id_person")} className="headField">ID</th>
                                <th onClick={() => handleSort("first_name")} className="headField">Nombre</th>
                                <th onClick={() => handleSort("last_name")} className="headField">Apellidos</th>
                                <th onClick={() => handleSort("birth_date")} className="headField">Fecha de Nacimiento</th>
                                <th onClick={() => handleSort("country")} className="headField">País</th>
                                <th onClick={() => handleSort("diagnosed")} className="headField">Diagnosticado</th>
                                <th onClick={() => handleSort("email")} className="headField">Email</th>
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
                                            customersGlobal[index]["diagnosed"] === 1 ? "Si" : "No"
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
                                            </button>
                                        ) : (
                                            <button
                                                className="button1"
                                                onClick={() => handleEdit(index)}
                                            >
                                                <span className="txtEditSave">Editar</span>
                                            </button>
                                        )}
                                    </td>
                                    <td>
                                        <button
                                            className="button1"
                                            onClick={() => handleDelete(index)}
                                        >
                                            <span className="txtDelete">Eliminar</span>
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
