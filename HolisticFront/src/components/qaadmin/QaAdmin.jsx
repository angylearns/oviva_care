import React, { useEffect, useState } from "react";
import {qaService} from '../../services/qaService'
import "./qaadmin.css";
import AddQa from "./AddQa";


function QaAdmin() {
    const [editMode, setEditMode] = useState(false);
    const [customersGlobal, setCustomersGlobal] = useState([]);
    const [updatePage, setUpdatePage] = useState(false);

    const [fila, setFila] = useState([]);
    const [users, setUsers] = useState([]);
    const [qas, setQas] = useState([]);
    const [editableRows, setEditableRows] = useState([]);

    const [formData, setFormData] = useState({
        id_qa: "",
        question: "",
        answer: "",
       
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
               
                setSortBy({ field, order: sortBy.order === "asc" ? "desc" : "asc" });
            } else {
                
                setSortBy({ field, order: "asc" });
            }
        };
    
        customersGlobal.sort((a, b) => {
            // Función de comparación para ordenar según el campo seleccionado.
            const fieldA = a[sortBy.field];
            const fieldB = b[sortBy.field];
    
            if (fieldA < fieldB) {
                return sortBy.order === "asc" ? -1 : 1;
            }
            if (fieldA > fieldB) {
                return sortBy.order === "asc" ? 1 : -1;
            }
            return 0;
        });
    


    const handleEdit = (index) => {
        if (editableRows.includes(index)) {
            setEditableRows(editableRows.filter((rowIndex) => rowIndex !== index));
        } else {
            setEditableRows([...editableRows, index]);
        }
    };

    const handleSave = (index) => {
        qaService.putQa(customersGlobal[index]);
        setEditableRows(editableRows.filter((rowIndex) => rowIndex !== index));
    };


    const handleDelete = async (index) => {
        await deleteQa(index);
        setUpdatePage((prevState) => !prevState);
    };

    async function deleteQa(index) {
        qaService.DeleteQa(customersGlobal[index]);
        
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
            const allQas = await qaService.getAllQas();

            setCustomersGlobal(allQas);
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
                        <h2>Lista de Preguntas y Respuestas</h2>
                    </div>
                    <div className="centerBtn">
                        <button onClick={toggleComponenteEmergente} className="buttonAA">Agregar Pregunta</button>
                    </div>
                </div>
                {mostrarComponenteEmergente && <AddQa onClose={cerrarComponenteEmergente} />}
                <div className="tableOwerflow">
                    <table className="tableData">
                    <thead>
                    <tr>
                        <th onClick={() => handleSort("id_qa")} className="headField">ID</th>
                        <th onClick={() => handleSort("question")} className="headField">Pregunta</th>
                        <th onClick={() => handleSort("answer")} className="headField">Respuesta</th>
                        
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                        <tbody>
                            {customersGlobal.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id_qa}</td>
                                    <td>
                                        {editableRows.includes(index) ? (
                                            <textarea
                                                className="qatext"
                                                defaultValue={customersGlobal[index]["question"]}
                                                onChange={(e) =>
                                                    handleInputChange(e.target.value, index, "question")
                                                }
                                            />
                                        ) : (
                                            user.question
                                        )}
                                    </td>
                                    <td>
                                        {editableRows.includes(index) ? (
                                            <textarea
                                                className="qatext"
                                                defaultValue={customersGlobal[index]["answer"]}
                                                onChange={(e) =>
                                                    handleInputChange(e.target.value, index, "answer")
                                                }
                                            />
                                        ) : (
                                            user.answer
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

export default QaAdmin;
