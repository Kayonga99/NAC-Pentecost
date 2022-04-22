const openMenu = document.querySelectorAll('.menu-tog');
const closeMenu = document.querySelector('.close-x');
const aboutMenu = document.getElementById('menu');

closeMenu.addEventListener('click', () => {
  aboutMenu.style.display = 'none';
});

openMenu.forEach((element) => {
  element.addEventListener('click', () => {
    aboutMenu.style.display = 'block';
  });
});

aboutMenu.addEventListener('click', () => {
  aboutMenu.style.display = 'none';
});