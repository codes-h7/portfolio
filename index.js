let menuIcon = document.querySelector('.ri-menu-line');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{   
    menuIcon.classList.toggle('ri-xrp-fill')
    navbar.classList.toggle('active');
}