let menu = document.querySelector('#menu-btn');
let navlist = document.querySelector('.navlist');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');

}
const sr = scrollreveal({
    distance: '65px',
    duration:2600,
    delay: 450,
    reset: true
})

sr.reveal('.hero-text', {delay:200, origin:'top'})