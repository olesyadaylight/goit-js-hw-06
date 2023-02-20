const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
 


const ulRef = document.querySelector(`.gallery`);
console.log(ulRef);

const makeGalleryMarkUp = ({ url, alt }) =>
  `<li class="gallery-item"><img class="gallery-el" src=${url} alt="${alt}" width="360"></img></li>`;
    

const makeGallery = images.map(makeGalleryMarkUp).join(``);
ulRef.insertAdjacentHTML(`beforeend`,makeGallery)
console.log(makeGallery);