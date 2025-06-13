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