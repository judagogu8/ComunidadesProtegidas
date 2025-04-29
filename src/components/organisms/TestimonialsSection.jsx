import TestimonialCard from '../molecules/TestimonialCard';
import '../../assets/styles/organisms/TestimonialsSection.css';

function TestimonialsSection() {
  const testimonials = [
    {
      text: 'Desde que implementamos Comunidades Protegidas, los incidentes en nuestro barrio han disminuido considerablemente.',
      author: '- María Rodríguez, Bogotá'
    },
    {
      text: 'La comunicación entre vecinos nunca había sido tan efectiva. Ahora todos nos sentimos más seguros.',
      author: '- Carlos Mendoza, Medellín'
    },
    {
      text: 'La facilidad de uso de la aplicación y la respuesta rápida ante emergencias hacen que valga completamente la pena.',
      author: '- Ana Martínez, Cali'
    }
  ];

  return (
    <section id="testimonios" className="testimonials-section section-container">
      <h2 className="section-title">Lo que Dicen Nuestros Usuarios</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            text={testimonial.text}
            author={testimonial.author}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;