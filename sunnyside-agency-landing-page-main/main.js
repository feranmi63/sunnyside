const menuButton = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.header__nav');

menuButton.addEventListener('click',() => {
    if(navLinks.style.transform === 'scaleY(0)'){
        navLinks.style.transform = 'scaleY(0)';
    } else{
        navLinks.style.transform === 'block';
    }
})