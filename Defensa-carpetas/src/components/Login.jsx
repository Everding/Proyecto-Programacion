import {React, useState, useEffect} from 'react'
import axios from "axios";
import "../Styles/Login.css";
import { URL_ADMINISTRADORES } from '../Constants/endpoints';
import { useNavigate } from 'react-router-dom';
import {HOME} from "../Routers/router"
function Login() {
    const [usuario, setUsuario] = useState ("");
    const [contraseña, setContraseña] = useState ("");
    const [datos, setDatos] = useState ([]);
   
    const userNavigate = useNavigate();

    const getUsuarios = async () => {
        try {
            const response = await axios.get(URL_ADMINISTRADORES);
            setDatos(response.data);
            console.log(response.data);
        } catch (error){
            console.error("Error al obtener los administradores", error)
        }
    };


useEffect(() => {getUsuarios()}, []);


const handleSend = (e) => {
    e.preventDefault();
    const usuarioEncontrado = datos.find((user) => user.usuario === usuario && user.contraseña === contraseña);
    if (usuarioEncontrado){
        alert("Inicio de sesión exitoso")
        localStorage.setItem("usuarioLogueado", usuarioEncontrado.usuario);
        userNavigate(HOME)
    } else{
        alert("Datos incorrectos")
    }
}

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSend}>
        <h2>Iniciar sesión</h2>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          required
        />
        <button  type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login