import React from 'react';
import '../Styles/Header.css';
import logo from '../Assets/logo.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="headerContent">
        <img src={logo} alt="Logo" />
        <h1>Kiosco Generico</h1>
      </div>
    </header>
  );
};

export default Header;

