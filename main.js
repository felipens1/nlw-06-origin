const nav = document.querySelector('#header nav');
const toogle = document.querySelectorAll('nav .toogle');

for (const element of toogle) {
  element.addEventListener('click', ()=>{
    nav.classList.toggle('show');
  });
}

const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', ()=>{
    nav.classList.remove('show');
  })
}

const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

window.addEventListener('scroll', ()=>{
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});

/* Testimonials carousel slider Swiper */

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,  
  pagination: {
    el: '.swiper-pagination'
  },
  mouseWheel: true,
  keyboard: true
});

/* ScrollReveal: mostrar elementos quando der scroll na página */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  `#home .image, #home .text,
   #about .image, #about .text,
   #services header, #services .card,
   #testimonials header, #testimonials .testimonials,
   #contact .text, #contact .links
   footer .brand, footer .social`,
  { interval: 100 }
);

/* Botão voltar para o topo */

const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});