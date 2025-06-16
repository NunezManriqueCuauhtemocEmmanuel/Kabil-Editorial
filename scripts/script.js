const main = document.querySelector('main');
    const toggleBtn = document.getElementById('header-toggle');
    const logo = document.getElementById('logo');

    main.addEventListener('mouseenter', () => {
        toggleBtn.style.display = 'none';
        logo.style.display = 'inline-block';
    });

    main.addEventListener('mouseleave', () => {
        toggleBtn.style.display = 'inline-block';
        logo.style.display = 'none';
    });

 window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const main = document.querySelector('main');
        
        const mainRect = main.getBoundingClientRect();
        const mainTop = mainRect.top + window.scrollY;
        const mainHeight = main.offsetHeight;
        const scrollY = window.scrollY;

        // Calcular 70% de la posición del main
        const triggerPoint = mainTop + mainHeight * 0.20;

        if (scrollY >= triggerPoint) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const logoK = document.querySelector('.logoK');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const triggerPoint = main.offsetHeight * 0.44;

        if (scrollY > triggerPoint) {
            logoK.classList.add('show');
        } else {
            logoK.classList.remove('show');
        }
    });

    const fondos = document.querySelectorAll('.fondo');
  let current = 0;
  fondos[current].classList.add('visible');
  setInterval(() => {
    fondos[current].classList.remove('visible');
    current = (current + 1) % fondos.length;
    fondos[current].classList.add('visible');
  }, 5000);

  const colores = ['#00a88a', '#00aeed', '#f26235', '#d0177d', '#a2ce52', '#6a51a4'];
  const spansPrimero = document.querySelectorAll('.primero');
  const spansSegundo = document.querySelectorAll('.segundo');
  let i = 0;

  setInterval(() => {
    const color = colores[i % colores.length];
    spansPrimero.forEach(span => span.style.color = color);
    spansSegundo.forEach(span => span.style.color = color);
    i++;
  }, 5000);

const elemento = document.querySelector('.mi-elemento');

setTimeout(() => {
  elemento.classList.remove('oculto');
  elemento.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
}, 2000);
    