// Intro parallax
const introElement = document.querySelector('#hall-intro-bg');

window.addEventListener('scroll', () =>{
    let offset = window.pageYOffset; 
    introElement.style.backgroundPositionX = offset * -0.1 + "px";
});