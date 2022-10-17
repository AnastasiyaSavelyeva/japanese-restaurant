function openNav() {
    document.querySelector("#myNav").style.width = "100%";
}
function closeNav() {
    document.querySelector("#myNav").style.width = "0%";
}

function myFunction() {
    let x = document.querySelector("#myLinks");
    if (x.style.display === "block") {
    x.style.display = "none";
    }
    else {
    x.style.display = "block";
    }
}
function myFunctionMobile() {
    let xx = document.querySelector("#myLinks");
    if (xx.style.display === "block" && window.innerWidth <= 800) {
    xx.style.display = "none";
    }
    else {
    xx.style.display = "block";
    }
}

const back = document.querySelector('#back');
const next = document.querySelector('#next');
const photos = ['carusel.jpg',
                'carusel2.jpg',
                'carusel3.jpg',
                'carusel4.jpg', 
                'carusel5.jpg',
                'carusel6.jpg',
                'carusel7.jpg',
                'carusel8.jpg'];
let i = 0;
next.addEventListener('click', () => {
    i++;
    if (i > photos.length - 1) {
        i=0;
    }
    document.querySelector('#pictures').src = photos[i];
})
back.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = photos.length - 1;
    }
    document.querySelector('#pictures').src = photos[i];
})

gsap.from ('.image', {x:-900, delay:1.3, duration:2})
gsap.to ('.logo', {opacity:1, delay:0.2, duration:3})
gsap.to ('.first', {opacity:1, delay:0.3, duration:3})
gsap.to ('.second', {opacity:1, delay:0.4, duration:3})
gsap.to ('.text', {opacity:1, delay:1.7, duration:3})
gsap.to ('.icon', {opacity:1, delay:0.5, duration:2})
gsap.from ('.two', {x:50, opacity:0, delay:1.5, duration:2})
gsap.from ('.one', {x:-100, opacity:0, delay:1.5, duration:2})
gsap.from ('.boom', {opacity:0, rotation: 360, delay:4, duration:1})
gsap.from ('.bth', {opacity:0, delay:5, duration:1})
