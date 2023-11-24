import React from 'react';
import './Button.css'; // Asegúrate de tener este archivo CSS

function Button({ children, type, onClick }) {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
