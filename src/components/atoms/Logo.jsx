import logo from '../../assets/CP_logo.png';
import '../../assets/styles/atoms/Logo.css';

function Logo({ className }) {
  return <img src={logo} alt="Logo Comunidades Protegidas" className={`logo ${className}`} />;
}

export default Logo;