import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cuestionario from './components/login/cuestionario/Cuestionario.jsx';
import './components/login/cuestionario/cuestionario.css'; // verificar siempre que css se importa asi//
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Cuestionario />
  </React.StrictMode>,
)

// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App.jsx'
// import './index.css'
// import './components/login/cuestionario/cuestionario.css'; // Importa el archivo CSS aquí
// import Cuestionario from './components/login/cuestionario/Cuestionario.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//     <Cuestionario />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

