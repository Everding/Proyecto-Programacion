import React from 'react';
import '../Styles/Footer.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai'; // Para X usaremos Twitter (icono similar)

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <a href="/" className="footer-link">
          Términos y condiciones
        </a>
      </div>

      <div className="footer-center">
        &copy; {new Date().getFullYear()} - Todos los derechos reservados.
      </div>

      <div className="footer-right">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          className="social-icon"
        >
          <AiOutlineTwitter />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="social-icon"
        >
          <FaInstagram />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="social-icon"
        >
          <FaFacebookF />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
