import { useState } from 'react';
import './App.css';
import icono from '../public/CP_logo.png';

function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
  };

  const scrollToSection = (sectionId, tabName) => {
    setActiveTab(tabName);
    setIsNavOpen(false); // Close nav on mobile after click
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = document.querySelector('.header').offsetHeight;
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: 'smooth'
      });
    }
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <div className="logo-wrapper">
            <img src={icono} alt="Logo Comunidades Protegidas" className="logo" />
          </div>
          <h1 className="company-name">Comunidades Protegidas</h1>
        </div>
        <button className="nav-toggle" onClick={toggleNav}>
          ☰
        </button>
        <nav className={`main-nav ${isNavOpen ? 'active' : ''}`}>
          <ul className={`nav-menu ${isNavOpen ? 'active' : ''}`}>
            <li
              className={activeTab === 'inicio' ? 'active' : ''}
              onClick={() => scrollToSection('inicio', 'inicio')}
            >
              Inicio
            </li>
            <li
              className={activeTab === 'servicios' ? 'active' : ''}
              onClick={() => scrollToSection('servicios', 'servicios')}
            >
              Servicios
            </li>
            <li
              className={activeTab === 'como-funciona' ? 'active' : ''}
              onClick={() => scrollToSection('como-funciona', 'como-funciona')}
            >
              Cómo Funciona
            </li>
            <li
              className={activeTab === 'contacto' ? 'active' : ''}
              onClick={() => scrollToSection('contacto', 'contacto')}
            >
              Contacto
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">COMUNIDADES PROTEGIDAS</h2>
          <h3 className="hero-subtitle">PREVENCIÓN COMUNITARIA</h3>
          <p className="hero-description">
            Sistema de seguridad inteligente que conecta a vecinos y autoridades para crear entornos más seguros.
          </p>
          <div className="hero-buttons">
            <button className="primary-button">Solicitar Demo</button>
            <button className="secondary-button">Conocer Más</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={icono} alt="Comunidades Protegidas App" />
        </div>
      </section>

      {/* Features Section */}
      <section id="servicios" className="features-section">
        <h2 className="section-title">Características Principales</h2>
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="feature-alert-icon"></i>
            </div>
            <h3>Alertas en Tiempo Real</h3>
            <p>Notificaciones inmediatas ante cualquier incidente de seguridad en tu comunidad.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="feature-community-icon"></i>
            </div>
            <h3>Red Comunitaria</h3>
            <p>Conecta con tus vecinos para crear una red de vigilancia colaborativa.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="feature-app-icon"></i>
            </div>
            <h3>App Móvil</h3>
            <p>Control total desde tu smartphone con nuestra aplicación intuitiva.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="feature-authorities-icon"></i>
            </div>
            <h3>Enlace con Autoridades</h3>
            <p>Comunicación directa con servicios de emergencia en situaciones críticas.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="how-it-works-section">
        <h2 className="section-title">Cómo Funciona</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Descarga la App</h3>
            <p>Obtén nuestra aplicación desde tu tienda de aplicaciones favorita.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Crea tu Comunidad</h3>
            <p>Registra a los miembros de tu vecindario en la plataforma.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Configura Alertas</h3>
            <p>Personaliza las notificaciones según las necesidades de tu comunidad.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>¡Protégete!</h3>
            <p>Comienza a disfrutar de un entorno más seguro para ti y tus vecinos.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="testimonials-section">
        <h2 className="section-title">Lo que Dicen Nuestros Usuarios</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <p className="testimonial-text">"Desde que implementamos Comunidades Protegidas, los incidentes en nuestro barrio han disminuido considerablemente."</p>
            <p className="testimonial-author">- María Rodríguez, Bogotá</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"La comunicación entre vecinos nunca había sido tan efectiva. Ahora todos nos sentimos más seguros."</p>
            <p className="testimonial-author">- Carlos Mendoza, Medellín</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"La facilidad de uso de la aplicación y la respuesta rápida ante emergencias hacen que valga completamente la pena."</p>
            <p className="testimonial-author">- Ana Martínez, Cali</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="contact-section">
        <h2 className="section-title">Contáctanos</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            <p><strong>Email:</strong> <a href="mailto:vijugo@gmail.com">vijugo@gmail.com</a></p>
            <p><strong>Web:</strong> <a href="https://www.comunidadesprotegidas.com">www.comunidadesprotegidas.com</a></p>
            {/* <div className="social-media">
              <a href="#" className="social-icon facebook"></a>
              <a href="#" className="social-icon twitter"></a>
              <a href="#" className="social-icon instagram"></a>
            </div> */}
          </div>
          <div className="contact-form">
            <h3>Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input 
                  type="text" 
                  id="nombre" 
                  name="nombre" 
                  value={formData.nombre} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input 
                  type="tel" 
                  id="telefono" 
                  name="telefono" 
                  value={formData.telefono} 
                  onChange={handleInputChange} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea 
                  id="mensaje" 
                  name="mensaje" 
                  value={formData.mensaje} 
                  onChange={handleInputChange} 
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={icono} alt="Logo Comunidades Protegidas" className="footer-logo-img" />
            <p>COMUNIDADES PROTEGIDAS</p>
          </div>
          <div className="footer-links">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a onClick={() => scrollToSection('inicio', 'inicio')}>Inicio</a></li>
              <li><a onClick={() => scrollToSection('servicios', 'servicios')}>Servicios</a></li>
              <li><a  onClick={() => scrollToSection('como-funciona', 'como-funciona')}>Cómo Funciona</a></li>
              <li><a  onClick={() => scrollToSection('contacto', 'contacto')}>Contacto</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contacto</h4>
            <p>Email: vijugo@gmail.com</p>
            <p>Web: www.comunidadesprotegidas.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;