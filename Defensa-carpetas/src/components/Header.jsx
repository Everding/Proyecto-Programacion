import React from 'react';
import '../Styles/Header.css';
import logo from '../Assets/logo.png'; 
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const usuario = localStorage.getItem("usuarioLogueado");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogueado");
    navigate("/");  // Redirige al inicio
    window.location.reload();  // Recarga para que el header se actualice
  };

  return (
    <header className="header">
      <div className="navbar">
        
        <Link to="/" className="logoContainer">
          <img src={logo} alt="Logo" className="logo" />
          <span className="logoText">Kiosco Genérico</span>
        </Link>

        <nav className="navLinks">
          <Link to="/">Productos</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/sobre">Sobre Kiosco Genérico</Link>
        </nav>

        <div className="loginSection">
          <FaUserCircle className="loginIcon" />
          
          {usuario ? (
            <>
              <span className="loginText">{usuario}</span>
              <button onClick={handleLogout} className="btnCerrarSesion">Salir</button>
            </>
          ) : (
            <Link to="/login" className="loginText">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

