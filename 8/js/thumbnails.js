// import { getPhotos } from './data.js';
import { openBigPicture } from './big-picture.js';
const pictures = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
// const photosList = getPhotos();
const picturesFragment = document.createDocumentFragment();


const renderThumbnail = (photosList) => {
  photosList.forEach((photo) => {
    const pictureElement = picturesTemplate.cloneNode(true);
    const image = pictureElement.querySelector('.picture__img');
    image.src = photo.url;
    image.alt = photo.description;
    pictureElement.dataset.id = photo.id;
    pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = photo.likes;
    picturesFragment.appendChild(pictureElement);
  });

  pictures.appendChild(picturesFragment);

  pictures.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('picture__img')) {
      const id = evt.target.closest('.picture').dataset.id;
      const picture = photosList.find((item) => item.id === id * 1);
      openBigPicture(picture);
    }
  });

};


export { renderThumbnail };
