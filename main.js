let button = document.querySelector('.mode');
let body = document.querySelector('body');
let icon = button.querySelector('i');

button.addEventListener('click', () => {
    body.classList.toggle('dark');
    icon.classList.toggle('fa-moon');
});

let asideBtn = document.querySelector('.mobile i');
let aside = document.querySelector('aside');

asideBtn.addEventListener('click', () => {
    aside.classList.toggle('active');
});

gsap.from('.header',{
    y: '-100%',
    opacity: 0,
    duration: 1
}) 

gsap.from('.moveLeft',{
    opacity: 0,
    x: '-100',
    duration: 1
})

gsap.from('.moveRight',{
    opacity: 0,
    x: '100',
    duration: 1
})