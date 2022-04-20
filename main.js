const apostles = document.querySelectorAll('.a-none');
const showApostles = document.querySelector('.more');
const openMenu = document.querySelectorAll('.menu-tog')
const closeMenu = document.querySelector('.close-x');
const aboutMenu = document.getElementById('menu')

showApostles.addEventListener('click', () => {
  showApostles.classList.add('r-more');
});
showApostles.addEventListener('click', () => {
  apostles.forEach((element) => {
    element.style.display = 'block';
  });
});

openMenu.forEach((element) => {
element.addEventListener('click', () => {
  aboutMenu.style.display = 'block';
})
})

aboutMenu.addEventListener('click', () => {
  aboutMenu.style.display = 'none';
})
