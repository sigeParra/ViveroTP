
const toggleButton = document.getElementById('button-menu')
const navWrapper = document.getElementById('nav')

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('close')
  navWrapper.classList.toggle('show')
})

navWrapper.addEventListener('click', e => {
  if (e.target.id === 'nav') {
    navWrapper.classList.remove('show')
    toggleButton.classList.remove('close')
  }
})

// FORMULARIO
var formulario =
  document.getElementsByName("formulario")[0], //[0] Primer elemento, el formulario en si mismo.
  elementos = formulario.elements;
  boton = document.getElementById("b1"); // El boton

// Validación de formulario

var validarNombre = function (e) {
  if (formulario.nombre.value == 0) {
    alert("Completa el campo NOMBRE");
    e.preventDefault();
  }
  if (formulario.apellido.value == 0) {
    alert("Completa el campo APELLIDO");
    e.preventDefault();
  }
  if (formulario.email.value == 0) {
    alert("Completa el campo E-MAIL");
    e.preventDefault();
  }
  if (formulario.telefono.value == 0) {
    alert("Completa el campo TELÉFONO");
    e.preventDefault();
  }
  if (formulario.mensaje.value == 0) {
    alert("Completa el campo MENSAJE");
    e.preventDefault();
  }
};

var validar = function (e) {
  validarNombre(e);
};

formulario.addEventListener("submit", validar);

//API

document.addEventListener('DOMContentLoaded', async () => {
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd3d50a0848mshe0ca7e62ad429e2p14ac2fjsne85a1ab89565',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
  
    const climaElement = document.getElementById('clima').querySelector('p');
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
  
      climaElement.textContent = `La temperatura actual es: ${data.current.temp_c}°C`;
  
      if (data.current.temp_c > 20) {
        climaElement.style.color = 'red';
      } else {
        climaElement.style.color = 'blue';
      }
    } catch (error) {
      console.error(error);
    }
  });
  



