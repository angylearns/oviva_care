import React, { useEffect, useState } from "react";
import { personService } from '../../services/personService';
import { userService } from "../../services/userService";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./adminPerson.css";
import AddPerson from "./AddPerson";
import abajo from '../../assets/abajo.png';
import arriba from '../../assets/arriba.png';
import basura from '../../assets/basura.png';
import lapiz from '../../assets/lapiz.png';

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
    const [indexToDelete, setIndexToDelete] = useState(null);
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
    });
    const [showAlert, setShowAlert] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [firstOrder, setFirstOrder] = useState(true);

    const handleCloseAlert = () => {
        setShowAlert(false);
        setIndexToDelete(null);
    };

    const handleConfirmAlert = async () => {
        if (indexToDelete !== null) {
            await deletePerson(indexToDelete);
        }
        handleCloseAlert();
    };

    const handleDelete = (index) => {
        setIndexToDelete(index);
        setShowAlert(true);
    };

    const [sortBy, setSortBy] = useState({ field: null, order: "asc" });

    const handleSort = (field) => {
        if (sortBy.field === field) {
            setSortBy({ field, order: sortBy.order === "asc" ? "desc" : "asc" });
            setFirstOrder(false); // La primera vez que se ordena por este campo ya no será la primera ordenación
        } else {
            setSortBy({ field, order: "asc" });
            setFirstOrder(field === "id_person"); // Verificar si el campo seleccionado es id_person
        }
    };

    const convertDateToISOFormat = (dateString) => {
        if (!dateString) {
            return '';
        }
        const parts = dateString.split('/');
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
    };

    customersGlobal.sort((a, b) => {
        let fieldA, fieldB;
        
        if (sortBy.field === "birth_date") {
            fieldA = new Date(convertDateToISOFormat(a[sortBy.field]));
            fieldB = new Date(convertDateToISOFormat(b[sortBy.field]));
        } else {
            fieldA = a[sortBy.field];
            fieldB = b[sortBy.field];
        }
        if (typeof fieldA === 'string' && typeof fieldB === 'string') {
            return sortBy.order === "asc" ? fieldA.localeCompare(fieldB) : fieldB.localeCompare(fieldA);
        } else {
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
            const updatedCustomers = [...customersGlobal];
            // Guarda el correo electrónico original en el formData
            setFormData({ ...formData, email: updatedCustomers[index].email });
            setEditableRows([...editableRows, index]);
        }
    };

    // const handleSave = (index) => {
    //     personService.putPerson(customersGlobal[index]);
    //     setEditableRows(editableRows.filter((rowIndex) => rowIndex !== index));


    // };

    // const handleSave = (index) => {
    //     const email = customersGlobal[index].email;
    //     if (!isValidEmail(email)) {
    //         alert("Por favor, introduce un correo electrónico válido.");
    //         return;
    //     }
    //     id = userService.get_idUserbyEmail(customersGlobal[index].email);
    //     userService.putUserEmail(customersGlobal[index].email,id);
    //     personService.putPerson(customersGlobal[index]);
    //     setEditableRows(editableRows.filter((rowIndex) => rowIndex !== index));
    // };
    
    // const handleSave = (index) => {
    //     const email = customersGlobal[index].email;
    //     console.log("email original")
    //     const originalEmail = formData.email; // Obtiene el correo electrónico original
    //     console.log(originalEmail)
    //     console.log("eeeeeeeeee")
    //     if (!isValidEmail(email)) {
    //         alert("Por favor, introduce un correo electrónico válido.");
    //         return;
    //     }
    //     id = userService.get_idUserbyEmail(originalEmail);
    //     console.log("iddddddd: ")
    //     console.log(id)
    //     userService.putUserEmail(customersGlobal[index].email,int(id));
    //     personService.putPerson(customersGlobal[index]);
    //     setEditableRows(editableRows.filter((rowIndex) => rowIndex !== index));
    // };

    const handleSave = async (index) => {
        const email = customersGlobal[index].email;
        const originalEmail = formData.email;
        if (!isValidEmail(email)) {
            alert("Por favor, introduce un correo electrónico válido.");
            return;
        }
    
        try {
            // Obtener el ID del usuario por su email
            // let response = await userService.get_idUserbyEmail(`/user/getUserByEmail/${email}`);
            let id = await userService.get_idUserbyEmail(originalEmail);
            // const id = response.data;
            console.log("User ID:", id); // Imprimir el ID para verificar que se obtuvo correctamente
            // Realizar la solicitud PUT para actualizar el email
            await userService.putUserEmail(customersGlobal[index].email,id);
    
            // Actualizar la información de la persona
            await personService.putPerson(customersGlobal[index]);
    
            setEditableRows(editableRows.filter((rowIndex) => rowIndex !== index));
        } catch (error) {
            console.error("Error al actualizar datos:", error);
        }
    };
    

    async function deletePerson(index) {
        await userService.deleteUser(customersGlobal[index].email);
        await personService.DeletePerson(customersGlobal[index]);
        setUpdatePage((prevState) => !prevState);
    }

    // const handleFieldChange = (e) => {
    //     const { name, value } = e.target;
    //     setFila(customers[index]);
    //     setFormData({ ...formData,
    //         {name]: value });
    //     };
    
        const handleInputChange = (newValue, index, field) => {
            const updatedCustomers = [...customersGlobal];
            updatedCustomers[index][field] = field === "diagnosed" ? (newValue === "1" ? 1 : 0) : newValue;
            setCustomersGlobal(updatedCustomers);
        };
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        };
    
        async function fetchUsers() {
            try {
                const allPersons = await personService.getAllPersons();
                const modifiedPersons = allPersons.map(person => ({
                    ...person,
                    birth_date: formatDate(person.birth_date)
                }));
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
    
        const renderSortIcon = (field) => {
            if (sortBy.field === field) {
                return sortBy.order === "asc" ? (
                    <img src={abajo} alt="Flecha abajo" className="sortIcon" />
                ) : (
                    <img src={arriba} alt="Flecha arriba" className="sortIcon" />
                );
            } else if (field === "id_person" && firstOrder) {
                return <img src={abajo} alt="Flecha abajo" className="sortIcon" />;
            }
            return null;
        };
    
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };
        


        return (
            <div className="mainContainer">
                <div className="getContainer">
                    <div className="headerContent">
                        <div>
                            <h2>Lista de usuarios registrados</h2>
                        </div>
                    </div>
                    <div className="tableOwerflow">
                        <table className="tableData">
                            <thead>
                                <tr>
                                    <th onClick={() => handleSort("id_person")} className="headField">
                                        ID {renderSortIcon("id_person")}
                                    </th>
                                    <th onClick={() => handleSort("first_name")} className="headField">
                                        Nombre {renderSortIcon("first_name")}
                                    </th>
                                    <th onClick={() => handleSort("last_name")} className="headField">
                                        Apellidos {renderSortIcon("last_name")}
                                    </th>
                                    <th onClick={() => handleSort("birth_date")} className="headField">
                                        Fecha de Nacimiento {renderSortIcon("birth_date")}
                                    </th>
                                    <th onClick={() => handleSort("country")} className="headField">
                                        País {renderSortIcon("country")}
                                    </th>
                                    <th onClick={() => handleSort("diagnosed")} className="headField">
                                        Diagnosticado {renderSortIcon("diagnosed")}
                                    </th>
                                    <th onClick={() => handleSort("email")} className="headField">
                                        Email {renderSortIcon("email")}
                                    </th>
                                    <th className="headField specialHeader"><img src={lapiz} className="sortIcon"/></th>
                                    <th className="headField specialHeader"><img src={basura} className="sortIcon"/></th>
                                </tr>
                            </thead>
                            <TransitionGroup component="tbody">
                                {customersGlobal.map((user, index) => (
                                    <CSSTransition key={user.id_person} timeout={500} classNames="row">
                                        <tr>
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
                                                    <select
                                                        value={customersGlobal[index]["diagnosed"] ? "1" : "0"}
                                                        onChange={(e) =>
                                                            handleInputChange(e.target.value, index, "diagnosed")
                                                        }
                                                    >
                                                        <option value="1">Si</option>
                                                        <option value="0">No</option>
                                                    </select>
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
                                    </CSSTransition>
                                ))}
                            </TransitionGroup>
                        </table>
                    </div>
                </div>
                {showAlert && (
                    <div className="custom-alert">
                        <div className="custom-alert-content">
                            <span>¿Seguro deseas eliminar?</span><br />
                            <button onClick={handleCloseAlert}>No</button>
                            <button onClick={handleConfirmAlert}>Sí</button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
    
    export default AdminPerson;
    