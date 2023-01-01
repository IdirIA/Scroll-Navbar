
const navBar = document.getElementById('navbar');
let scrollLevel = 0;

window.addEventListener('scroll', ()=>{
    if (window.scrollY > scrollLevel){
        navBar.style.top="-60px"
    } else{
        navBar.style.top=0;
    }
    scrollLevel = window.scrollY;
})