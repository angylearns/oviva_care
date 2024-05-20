import React from "react";
import emailjs from 'emailjs-com';
import { useEffect, useState } from "react";
import "./formContact.css";


function FormContact() {
    const [email, setEmail] = useState("");

    useEffect(() => {
        emailjs.init('rr6KB5IASJYA2ls3i');
    }, []);

    const [showAlert, setShowAlert] = useState(false);
    const [showAlert2, setShowAlert2] = useState(false);


    const handleCloseAlert = () => {
        setShowAlert(false);
      };
      const handleCloseAlert2 = () => {
        setShowAlert2(false);
      };




    const handleSubmit = (event) => {
        event.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


        if (!emailRegex.test(email)) {
            setShowAlert2(true);
            
        } else {

            const btn = event.target.querySelector('#button');
            btn.value = 'Enviando...';

            const serviceID = 'service_modi72m';
            const templateID = 'template_mzh041s';

            emailjs.sendForm(serviceID, templateID, event.target)
                .then(() => {
                    btn.value = 'Send Email';
                    setShowAlert(true);
                    
                })
                .catch((err) => {
                    btn.value = 'Send Email';
                     alert(JSON.stringify(err));
                   
                });
        }
    };

    return (
        <div className="container-form">
            <div>
            <h2>Contacto</h2>
                <form id="form" onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="emailjs_name">Nombre</label>
                        <input type="text" className="inputField" name="emailjs_name" id="emailjs_name" placeholder="Nombre" required />
                    </div>
                    <div className="field">
                        <label htmlFor="emailjs_email">Email</label>
                        <input
                            type="text"
                            className="inputField" 
                            placeholder="Email"
                            name="emailjs_email"
                            id="emailjs_email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="emailjs_message">Mensaje</label>
                        <textarea id="emailjs_message" placeholder="Mensaje" className="inputField textAreaField" name="emailjs_message" maxLength="300"></textarea>
                    </div>

                    <input type="submit" id="button" value="Send Email" />
                </form>

                <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
            </div>
           {/* Ventana emergente de alerta */}
      {showAlert && (
        <div className="custom-alert">
          <div className="custom-alert-content">
            <span>Mensaje enviado</span><br></br>
            <button onClick={handleCloseAlert}>Cerrar</button>
          </div>
        </div>
      )}
   {showAlert2 && (
        <div className="custom-alert">
          <div className="custom-alert-content">
            <span>Por favor, ingresa un correo electrónico válido.</span><br></br>
            <button onClick={handleCloseAlert2}>Cerrar</button>
          </div>
        </div>
      )}


        </div>
        
    );
}

export default FormContact;
