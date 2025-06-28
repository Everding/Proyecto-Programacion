import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} - Todos los derechos reservados.
    </footer>
  );
};

export default Footer;