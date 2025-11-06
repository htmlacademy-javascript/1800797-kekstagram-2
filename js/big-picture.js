import { getPhotos } from "./data.js";
import { isEscKey, isEnterKey } from "./utlis.js";
const bigPicture = document.querySelector('.big-picture');
const buttonClose = document.querySelector('.big-picture__cancel');
const bodyBigPicture = document.querySelector('body');

const openBigPicture = (photo) => {
  bigPicture.classList.remove('hidden');
  bodyBigPicture.classList.add('modal-open');
  console.log(photo);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  bodyBigPicture.classList.remove('modal-open');
};


// pictures.addEventListener('keydown', (evt) => {
//   if(evt.target.classList.contains('picture__img')) {
//     if(isEnterKey(evt)) {
//       openBigPicture();
//     }
//   }
// }
// );

buttonClose.addEventListener('click', () => {
  closeBigPicture();
});

buttonClose.addEventListener('keydown', (evt) => {
  if(isEnterKey(evt)) {
    closeBigPicture();
  }
});

document.addEventListener('keydown', (evt) => {
  if(isEscKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
});
console.log()

export { openBigPicture };
