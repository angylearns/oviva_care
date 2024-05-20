import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./adminPerson.css";
import abajo from '../../assets/abajo.png';
import arriba from '../../assets/arriba.png';
import basura from '../../assets/basura.png';
import lapiz from '../../assets/lapiz.png';

import { personHandle } from "../../handlers/personHandle";  

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;
};

const formatDateToDB = (dateString) => {
    const parts = dateString.split('/');
    const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
    return formattedDate;
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
    const [showAlert2, setShowAlert2] = useState(false);
    const [firstOrder, setFirstOrder] = useState(true);

    const handleCloseAlert = () => {
        setShowAlert(false);
        setIndexToDelete(null);
    };
    const handleCloseAlert2 = () => {
        setShowAlert2(false);
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
            setFirstOrder(false); 
        } else {
            setSortBy({ field, order: "asc" });
            setFirstOrder(field === "id_person"); 
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

            setFormData({ ...formData, email: updatedCustomers[index].email });
            setEditableRows([...editableRows, index]);
        }
    };


    const handleSave = (index) => {
        if (!validateDate(customersGlobal[index].birth_date)) {
            setShowAlert2(true);
        } else {
            const fechaDB = formatDateToDB(customersGlobal[index].birth_date);
            const updatedCustomer = { ...customersGlobal[index] };
            updatedCustomer.birth_date = fechaDB;
            personHandle.updatePerson(updatedCustomer);  
            setEditableRows(editableRows.filter((rowIndex) => rowIndex !== index));
        }
    };

     async function deletePerson(index) {
        try {
            await personHandle.deletePerson(customersGlobal[index]); 
            setUpdatePage((prevState) => !prevState);
        } catch (error) {
            console.error("Error al eliminar persona:", error);
        }
    }

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
            const allPersons = await personHandle.getAllPersons();  
            const modifiedPersons = allPersons.map((person) => ({
                ...person,
                birth_date: formatDate(person.birth_date),
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

    const validateDate = (date) => {
        const regex = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/;
        return regex.test(date);
    }


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
                                <th className="headField specialHeader"><img src={lapiz} className="sortIcon" /></th>
                                <th className="headField specialHeader"><img src={basura} className="sortIcon" /></th>
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
                                                <select
                                                    className="field-regcountry"
                                                    defaultValue={customersGlobal[index]["country"]}
                                                    onChange={(e) => handleInputChange(e.target.value, index, "country")}
                                                >
                                                    <option >Elige una opción</option>
                                                    <option >Albania</option>
                                                    <option >Alemania</option>
                                                    <option >Andorra</option>
                                                    <option >Armenia</option>
                                                    <option >Austria</option>
                                                    <option >Azerbaiyán</option>
                                                    <option >Argentina</option>
                                                    <option >Bélgica</option>
                                                    <option >Bolivia</option>
                                                    <option >Bosnia y Herzegovina</option>
                                                    <option >Brasil</option>
                                                    <option >Bulgaria</option>
                                                    <option >Bielorrusia</option>
                                                    <option >Chile</option>
                                                    <option >Colombia</option>
                                                    <option >Chipre</option>
                                                    <option >Croacia</option>
                                                    <option >Dinamarca</option>
                                                    <option >Ecuador</option>
                                                    <option >Eslovaquia</option>
                                                    <option >Eslovenia</option>
                                                    <option >España</option>
                                                    <option >Estonia</option>
                                                    <option >Finlandia</option>
                                                    <option >Francia</option>
                                                    <option >Guyana</option>
                                                    <option >Grecia</option>
                                                    <option >Hungría</option>
                                                    <option >Irlanda</option>
                                                    <option >Islandia</option>
                                                    <option >Italia</option>
                                                    <option >Kosovo</option>
                                                    <option >Letonia</option>
                                                    <option >Liechtenstein</option>
                                                    <option >Lituania</option>
                                                    <option >Luxemburgo</option>
                                                    <option >Malta</option>
                                                    <option >Moldavia</option>
                                                    <option >Mónaco</option>
                                                    <option >Montenegro</option>
                                                    <option >Noruega</option>
                                                    <option >Países Bajos</option>
                                                    <option >Paraguay</option>
                                                    <option >Perú</option>
                                                    <option >Polonia</option>
                                                    <option >Portugal</option>
                                                    <option >República Checa</option>
                                                    <option >Inglaterra</option>
                                                    <option >Irlanda del Norte</option>
                                                    <option >Escocia</option>
                                                    <option >Gales</option>
                                                    <option >Rumanía</option>
                                                    <option >Rusia</option>
                                                    <option >San Marino</option>
                                                    <option >Suecia</option>
                                                    <option >Suiza</option>
                                                    <option >Surinam</option>
                                                    <option >Turquía</option>
                                                    <option >Ucrania</option>
                                                    <option >Uruguay</option>
                                                    <option >Vaticano</option>
                                                    <option >Venezuela</option>
                                                </select>
                                            ) : (
                                                customersGlobal[index]["country"]
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
                                            {user.email}
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
             {showAlert2 && (
                <div className="custom-alert">
                    <div className="custom-alert-content">
                        <span>Fecha incorrecta</span><br />
                        <button onClick={handleCloseAlert2}>ok</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminPerson;
