import Logo from '../atoms/Logo';
import '../../assets/styles/organisms/Footer.css';

function Footer({ scrollToSection }) {
  return (
    <footer className="footer section-container">
      <div className="footer-content">
        <div className="footer-logo">
          <Logo className="footer-logo-img" />
          <p>COMUNIDADES PROTEGIDAS</p>
        </div>
        <div className="footer-links">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a onClick={() => scrollToSection('inicio', 'inicio')}>Inicio</a></li>
            <li><a onClick={() => scrollToSection('servicios', 'servicios')}>Servicios</a></li>
            <li><a onClick={() => scrollToSection('como-funciona', 'como-funciona')}>Cómo Funciona</a></li>
            <li><a onClick={() => scrollToSection('contacto', 'contacto')}>Contacto</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>Email: vijugo@gmail.com</p>
          <p>Web: www.comunidadesprotegidas.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;