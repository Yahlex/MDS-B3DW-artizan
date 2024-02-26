import PropTypes from 'prop-types';

function Input({ label, type, name, placeholder, value, onChange }) {
  return (
    <label>{label}
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    </label>
  );
}

Input.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,  
    onChange: PropTypes.func,
}

export default Input;