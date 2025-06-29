import React from 'react';
import '../Styles/Nosotros.css';
import Gabriel from '../assets/Gabriel.jpg'
import David from '../assets/David.png'
import Fabricio from '../assets/Fabricio.jpg'
const Nosotros = () => {
  return (
    <div className="nosotrosContainer">
      <h1 className="tituloNosotros">Nuestro Equipo</h1>
      <div className="perfilesContainer">
        
        <div className="perfilCard">
          <img src={David} alt="David" className="imgPerfil"/>
          <h3>David</h3>
        </div>

        <div className="perfilCard">
          <img src={Fabricio} alt="Fabricio" className="imgPerfil" />
          <h3>Fabricio</h3>
        </div>

        <div className="perfilCard">
          <img src={Gabriel} alt="Gabriel" className="imgPerfil" />
          <h3>Gabriel</h3>
        </div>

      </div>
    </div>
  );
};

export default Nosotros;
