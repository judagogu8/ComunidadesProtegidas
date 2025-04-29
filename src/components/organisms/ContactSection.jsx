import ContactForm from '../molecules/ContactForm';
import '../../assets/styles/organisms/ContactSection.css';

function ContactSection() {
  return (
    <section id="contacto" className="contact-section section-container">
      <h2 className="section-title">Contáctanos</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Información de Contacto</h3>
          <p><strong>Email:</strong> <a href="mailto:vijugo@gmail.com">vijugo@gmail.com</a></p>
          <p><strong>Web:</strong> <a href="https://www.comunidadesprotegidas.com">www.comunidadesprotegidas.com</a></p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;