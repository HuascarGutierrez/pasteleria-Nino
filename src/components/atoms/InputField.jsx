import React from 'react';
import "../atomos/styles/InputField.css";

function InputField({ placeholder }) {
  return (
    <input className="input-field" type="text" placeholder={placeholder} />
  );
}

export default InputField;
