const nav = document.querySelector('#header nav');
const toogle = document.querySelectorAll('nav .toogle');

for (const element of toogle) {
  element.addEventListener('click', ()=>{
    nav.classList.toggle('show');
  });
}