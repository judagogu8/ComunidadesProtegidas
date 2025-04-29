import '../../assets/styles/atoms/Input.css';

function Input({ type = 'text', id, name, value, onChange, required, isTextarea = false }) {
  return isTextarea ? (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="custom-input"
    />
  ) : (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="custom-input"
    />
  );
}

export default Input;