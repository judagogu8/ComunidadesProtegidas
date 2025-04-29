import StepCard from '../molecules/StepCard';
import '../../assets/styles/organisms/HowItWorksSection.css';

function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: 'Descarga la App',
      description: 'Obtén nuestra aplicación desde tu tienda de aplicaciones favorita.'
    },
    {
      number: 2,
      title: 'Crea tu Comunidad',
      description: 'Registra a los miembros de tu vecindario en la plataforma.'
    },
    {
      number: 3,
      title: 'Configura Alertas',
      description: 'Personaliza las notificaciones según las necesidades de tu comunidad.'
    },
    {
      number: 4,
      title: '¡Protégete!',
      description: 'Comienza a disfrutar de un entorno más seguro para ti y tus vecinos.'
    }
  ];

  return (
    <section id="como-funciona" className="how-it-works-section section-container">
      <h2 className="section-title">Cómo Funciona</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
}

export default HowItWorksSection;