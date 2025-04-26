
//navegacion
let lastScrollY = window.scrollY;
const nav = document.getElementById('nav');

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;


    if (currentScroll > lastScrollY && currentScroll > 50) {
      nav.classList.add('hide-nav');
    } else {
      nav.classList.remove('hide-nav');
    }

    lastScrollY = currentScroll;
  });
  //fin de navegacion

  //servicios
  const buttons = document.querySelectorAll('.toggle-btn');
  const contents = document.querySelectorAll('.service-content');
  const arrows = document.querySelectorAll('.arrow');

  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const content = contents[index];
      const arrow = arrows[index];
      const isVisible = content.style.display === 'block';

      content.style.display = isVisible ? 'none' : 'block';
      arrow.classList.toggle('rotate', !isVisible);
    });
  });
//fin de servicios


function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("show");
}
