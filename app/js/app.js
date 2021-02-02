const navSlide = () => {
    const burger =document.querySelector('.burger');
    const nav =document.querySelector('.nav-link');
    const navLinks = document.querySelectorAll('.nav-link li');

    burger.addEventListener('click',  ( ) => {
                     nav.classList.toggle('nav-active');
    });
   //Animation links
   navLinks.forEach ((link, index) => {
             console.log(index);
             link.style.animation = 'navlinkFade 0.5s ease forwads ${index /7 + 0.3}s';

        });

}

navSlide();