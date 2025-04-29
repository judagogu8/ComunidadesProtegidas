import Icon from '../atoms/Icon';
import '../../assets/styles/molecules/FeatureCard.css';

function FeatureCard({ title, description, iconType }) {
  return (
    <div className="feature-card">
      <Icon type={iconType} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;