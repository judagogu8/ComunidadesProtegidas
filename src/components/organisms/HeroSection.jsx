import Logo from '../atoms/Logo';
import Button from '../atoms/Button';
import '../../assets/styles/organisms/HeroSection.css';

function HeroSection() {
  return (
    <section id="inicio" className="hero-section section-container">
      <div className="hero-content">
        <h2 className="hero-title">COMUNIDADES PROTEGIDAS</h2>
        <h3 className="hero-subtitle">PREVENCIÓN COMUNITARIA</h3>
        <p className="hero-description">
          Sistema de seguridad inteligente que conecta a vecinos y autoridades para crear entornos más seguros.
        </p>
        <div className="hero-buttons">
          <Button className="primary-button">Solicitar Demo</Button>
          <Button className="secondary-button">Conocer Más</Button>
        </div>
      </div>
      <div className="hero-image">
        <Logo />
      </div>
    </section>
  );
}

export default HeroSection;