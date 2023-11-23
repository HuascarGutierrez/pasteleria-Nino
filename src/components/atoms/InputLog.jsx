import "./styles/InputLog.css"
import React,{useState} from 'react'


function InputLog(props) {
  const [nombre, setNombre] = useState('');

  const borrarValorInicial = (event) => {
    var miInput = document.getElementById(props.id);
    miInput.value = "";
  }

  const volverValorInicial = (event) => {
    var miInput = document.getElementById(props.id);
    if(props.id =="email")
    {
      miInput.value = ""
    }
  }

  // Función para manejar cambios en el campo de entrada
  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('¡Hola, ' + nombre + '!');
  };

  return (
    <div className="inputL">
      <label >
          {/* Campo de entrada controlado por el estado */}
          <input
            type="text"
            id={props.id}
            placeholder={props.value}
            onChange={handleInputChange}
          />
        </label>
        <br />
        {/* Botón para enviar el formulario */}
    </div>
  );
};

export default InputLog