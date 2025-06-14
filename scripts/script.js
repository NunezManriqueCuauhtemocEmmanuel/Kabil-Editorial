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
        const triggerPoint = mainTop + mainHeight * 0.27;

        if (scrollY >= triggerPoint) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });