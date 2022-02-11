// Parallax effect
const intro = document.querySelector('.introduction');
window.addEventListener('scroll', () =>{
    let offset = window.pageYOffset;
    if(window.screen.width > 768){
        intro.style.backgroundPositionY = "calc(60% + " + offset * 0.7 + "px)";
    }
});