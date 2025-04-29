import '../../assets/styles/atoms/Button.css';

function Button({ type = 'button', className, children, onClick }) {
  return (
    <button type={type} className={`custom-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;