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

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
}

/* Testimonials carousel slider Swiper */

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,  
  pagination: {
    el: '.swiper-pagination'
  },
  mouseWheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
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

function backToTop() {

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }

}

/* Ativar menu conforme scroll da página */

const sections = document.querySelectorAll('main section[id]');

function activeMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (let section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= (sectionTop + sectionHeight);

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', () => {
  changeHeaderWhenScroll();
  backToTop();
  activeMenuAtCurrentSection();
});