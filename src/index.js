/* IMPORTACIONES */
// MODULOS
import React from 'react';
import ReactDOM from 'react-dom/client';

//ESTILOS
import './index.css';

//COMPONENTES
//import App from './App';

import NavBar from './components/navbar/NavBar.js';

//CORE
import reportWebVitals from './reportWebVitals';


/* LOGICA */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar
    />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
