import FeatureCard from '../molecules/FeatureCard';
import '../../assets/styles/organisms/FeaturesSection.css';

function FeaturesSection() {
  const features = [
    {
      title: 'Alertas en Tiempo Real',
      description: 'Notificaciones inmediatas ante cualquier incidente de seguridad en tu comunidad.',
      iconType: 'alert'
    },
    {
      title: 'Red Comunitaria',
      description: 'Conecta con tus vecinos para crear una red de vigilancia colaborativa.',
      iconType: 'community'
    },
    {
      title: 'App Móvil',
      description: 'Control total desde tu smartphone con nuestra aplicación intuitiva.',
      iconType: 'app'
    },
    {
      title: 'Enlace con Autoridades',
      description: 'Comunicación directa con servicios de emergencia en situaciones críticas.',
      iconType: 'authorities'
    }
  ];

  return (
    <section id="servicios" className="features-section section-container">
      <h2 className="section-title">Características Principales</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            iconType={feature.iconType}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;