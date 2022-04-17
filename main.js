const apostles = document.querySelectorAll('.a-none');
const showApostles = document.querySelector('.more');

showApostles.addEventListener('click', () => {
  showApostles.classList.add('r-more');
});
showApostles.addEventListener('click', () => {
  apostles.forEach((element) => {
    element.style.display = 'block';
  });
});
