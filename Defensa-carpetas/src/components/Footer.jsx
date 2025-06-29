import React from 'react';
import '../Styles/Footer.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai'; // Para X usaremos Twitter (icono similar)

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <a href="/terminos-y-condiciones" className="footer-link">
          Términos y condiciones
        </a>
      </div>

      <div className="footer-center">
        &copy; {new Date().getFullYear()} - Todos los derechos reservados.
      </div>

      <div className="footer-right">
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          className="social-icon"
        >
          <AiOutlineTwitter />
        </a>
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="social-icon"
        >
          <FaInstagram />
        </a>
        <a
          href="https://facebook.com/yourprofile"
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
