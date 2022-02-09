// Hitta titlen och ändra den beroende på sidans bredd
const navTitle = document.querySelector('#nav-title');
const ubsChange = () =>{
    if(window.screen.width < 1200){
        navTitle.innerHTML = "USB";
    }
    else{
        navTitle.innerHTML = "Universal Smart Block";
    }
}

// Kolla när fönstret ändrar storlek
window.addEventListener('resize', ubsChange);
