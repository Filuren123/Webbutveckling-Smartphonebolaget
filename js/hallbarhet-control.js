// Intro parallax
const introElement = document.querySelector('#hall-intro-bg');

window.addEventListener('scroll', () =>{
    let offset = window.pageYOffset; 
    
    if(window.screen.width > 768){
        introElement.style.backgroundPositionX = offset * -0.1 + "px";
    }
});