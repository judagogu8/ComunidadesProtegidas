import '../../assets/styles/atoms/Icon.css';

function Icon({ type }) {
  return <i className={`feature-icon feature-${type}-icon`} />;
}

export default Icon;