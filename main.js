const apostles = document.querySelectorAll('.a-none');
const showApostles = document.querySelector('.more');
const openMenu = document.querySelectorAll('.menu-tog');
const closeMenu = document.querySelector('.close-x');
const aboutMenu = document.getElementById('menu');


// showApostles.addEventListener('click', () => {
// });

showApostles.addEventListener('click', () => {
  showApostles.classList.add('r-more');
  li.forEach((element) => {

    element.classList.remove('a-none')
  })

  apostles.forEach((element) => {

    element.style.display = 'block';
  });
});

openMenu.forEach((element) => {
  element.addEventListener('click', () => {
    aboutMenu.style.display = 'block';
  });
});

aboutMenu.addEventListener('click', () => {
  aboutMenu.style.display = 'none';
});

const speakersList = document.getElementById('apostles');

const speakers = [
  { 
    name: 'Chief Apostle W-Leber',
    title: 'Chief Apostle of the New apostolic church.',
    roll: 'The shepherd of Lord our dear chief apostles will be leading  the congregation of the New apostolic into prayers.',
    featuredImage: './photos/apostles/Labour.jpg',
  },
{
  name: 'Apostle Jean Luc',
  title: 'Chief Apostle helper of Nac.',
  roll: 'The chief apostle helper has been assigned to odain new bishops of the church on this day.',
  featuredImage: './photos/apostles/jean-luc.jpg',
},

{
  name: 'Apostle Katungu',
  title: 'District Apostle helper of Zambia, Malwi & Zimbabwe Nac.',
  roll: 'Our dear Apostle Katungu will be leading the other apostles in in giving the holy communion.',
  featuredImage: './photos/apostles/cheif2.jpg',
},
{
  name: 'Apostle John',
  class: 'a-none',
  title: 'District Apostle of brazil.',
  roll: 'Apostle john together with his 7 intourage has been invited to the devine service.',
  featuredImage: './photos/apostles/ast.jpg',
},
{
  name: 'Apostle Kriel',
  class: 'a-none',
  title: 'District Apostle for southen Africa',
  roll: 'The Apostle together with the chief apostles will be baptising after the service.',
  featuredImage: './photos/apostles/john-kriel.webp',
},
{
  name: 'Apostle Ndandula',
  class: 'a-none',
  title: 'District Apostle of Zambia, Malwi & Zimbabwe Nac',
  roll: 'Our dear apostles has been assigned together with his helper to give holy communion.',
  featuredImage: './photos/apostles/ndandula.jpg',
},

];

const apostlesArr = speakers.map((card) => `
<li class=" remove ${card.class}">
<ul class="li-a-card">
<li><img class="img-chief" src="${card.featuredImage}" alt="man-img"></li>
<li>
    <div class="A-div">
        <h4 class="Name">${card.name}</h4>
        <span class="title">${card.title}</span>
        <p class="work">${card.roll}</p>
    </div>
</li>
</ul>
</li>
`).join('');

speakersList.innerHTML += apostlesArr;

const li = document.querySelectorAll('.remove')
console.log(li);