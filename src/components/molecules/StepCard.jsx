import '../../assets/styles/molecules/StepCard.css';

function StepCard({ number, title, description }) {
  return (
    <div className="step">
      <div className="step-number">{number}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default StepCard;