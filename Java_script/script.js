const menu = document.querySelector('.header-nav');
const menuBtn = document.querySelector('.menu-icon');
const body = document.body;
if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })
    menu.querySelectorAll('.header-nav__link').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active')
                menuBtn.classList.remove('active')
                body.classList.remove('lock')
            })
    })
}


// ----------------------------------------
const anchors = document.querySelectorAll('a[href*="#"]');
anchors.forEach(anchors => {
    anchors.addEventListener('click', Event => {
        Event.preventDefault();

        const blockID = anchors.getAttribute('href').substring(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})

