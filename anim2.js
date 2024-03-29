const contenedor = document.querySelector('.contenedor');

contenedor.addEventListener('mouseover', () => {
  const miDiv = document.querySelector('.mi-div');
  miDiv.style.visibility = 'visible';
});

contenedor.addEventListener('mouseout', () => {
  const miDiv = document.querySelector('.mi-div');
  miDiv.style.visibility = 'hidden';
});