
    const burger = document.querySelector('.container_menu .burger');
    const nav = document.querySelector('.container_secondary_menu div');

    burger.addEventListener('click', () => {
        nav.classList.toggle('menu_active');
    });

