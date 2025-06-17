document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  const header = document.querySelector('header');
  const logoK = document.querySelector('.logoK');
  const fondos = document.querySelectorAll('.fondo');
  const spansPrimero = document.querySelectorAll('.primero');
  const spansSegundo = document.querySelectorAll('.segundo');
  const elemento = document.querySelector('.mi-elemento');

  // Cambiar clases del header y logo al hacer scroll
  window.addEventListener('scroll', () => {
    const mainRect = main.getBoundingClientRect();
    const mainTop = mainRect.top + window.scrollY;
    const mainHeight = main.offsetHeight;
    const scrollY = window.scrollY;

    const triggerHeader = mainTop + mainHeight * 0.20;
    const triggerLogo = mainHeight * 0.44;

    if (scrollY >= triggerHeader) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (scrollY > triggerLogo) {
      logoK.classList.add('show');
    } else {
      logoK.classList.remove('show');
    }
  });

  // Fondo animado que cambia cada 5s
  let current = 0;
  fondos[current].classList.add('visible');
  setInterval(() => {
    fondos[current].classList.remove('visible');
    current = (current + 1) % fondos.length;
    fondos[current].classList.add('visible');
  }, 5000);

  // Cambio de color de texto cada 5s
  const colores = ['#00a88a', '#00aeed', '#f26235', '#d0177d', '#a2ce52', '#6a51a4'];
  let i = 0;
  setInterval(() => {
    const color = colores[i % colores.length];
    spansPrimero.forEach(span => span.style.color = color);
    spansSegundo.forEach(span => span.style.color = color);
    i++;
  }, 5000);

  // Mostrar elemento con animación luego de 2s
  if (elemento) {
    setTimeout(() => {
      elemento.classList.remove('oculto');
      elemento.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
    }, 2000);
  }
});
