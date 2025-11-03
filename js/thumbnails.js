import { getPhotos } from './data.js';

const pictures = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photosList = getPhotos();
const picturesFragment = document.createDocumentFragment();

photosList.forEach((photo) => {
  const pictureElement = picturesTemplate.cloneNode(true);
  const image = pictureElement.querySelector('.picture__img');
  image.src = photo.url;
  image.alt = photo.description;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  picturesFragment.appendChild(pictureElement);
});

pictures.appendChild(picturesFragment);
