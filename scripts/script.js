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

    const fondos = document.querySelectorAll('.fondo'); // Selecciona todos los divs con clase "fondo"
  let current = 0;

  // Muestra el primero
  fondos[current].classList.add('visible');

  setInterval(() => {
    // Oculta el fondo actual
    fondos[current].classList.remove('visible');

    // Calcula el siguiente (circular)
    current = (current + 1) % fondos.length;

    // Muestra el nuevo fondo
    fondos[current].classList.add('visible');
  }, 5000); // cada 5 segundos


    