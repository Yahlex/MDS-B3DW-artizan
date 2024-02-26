import PropTypes from 'prop-types';


function Button ({ type = 'button', onClick, children }) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    
}

export default Button;