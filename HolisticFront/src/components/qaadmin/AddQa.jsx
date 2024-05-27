import React, { useState } from "react";
import { qaService } from '../../services/qaService'
import "./addQa.css";

function AddQa({ onClose }) {

    const [formData, setFormData] = useState({
        question: "",
        answer: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    async function postQa(formData) {
        const qa1 = {
            id_qa: "",
            question: formData.question,
            answer: formData.answer,
        };

        try {
            const newQa = await qaService.postQa(qa1);
            onClose(); // Cerrar la ventana después de añadir la pregunta exitosamente
        } catch (error) {
            console.error("Error al insertar datos:", error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await postQa(formData);
    };

    return (
        <div className="postContainer" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }} >
            <img src="https://i.postimg.cc/6QBym64B/close-Green.png" alt="Cerrar" style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} onClick={onClose} />
            <form onSubmit={handleSubmit}>
                <div className="formContentA">
                    <div className="groupForm1">
                        <div className="smallDiv">
                            <label className="labelStyle">Pregunta:</label>
                            <textarea
                                name="question"
                                value={formData.question}
                                onChange={handleChange}
                                required
                                className="inputF"
                            />
                        </div>
                        <div className="smallDiv">
                            <label className="labelStyle">Respuesta:</label>
                            <textarea
                                name="answer"
                                value={formData.answer}
                                onChange={handleChange}
                                required
                                className="inputF"
                            />
                        </div>
                        <div className="buttonAdd">
                            <button className="buttonAA" type="submit">
                                Añadir Pregunta
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddQa;
