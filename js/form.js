import { resetScale } from './scale.js';
import { isEscKey } from './utlis.js';
import { validateForm } from './validation.js';
import './slider.js';

const imageUploadForm = document.querySelector('.img-upload__form');
const imageInput = document.querySelector('.img-upload__input');
const imageUpload = document.querySelector('.img-upload__overlay');
const imagePreview = imageUpload.querySelector('.img-upload__preview img');
const imagePreviewEffects = imageUpload.querySelectorAll('.effects__preview');
const imgUploadCancelButton = document.querySelector('.img-upload__cancel');


const renderPreviewImage = () => {
  const fileImage = imageInput.files[0];
  imagePreview.src = URL.createObjectURL(fileImage);
  imagePreviewEffects.forEach((icon) => {
    icon.style.backgroundImage = `url("${URL.createObjectURL(fileImage)}")`;
  });
};

const showModal = () => {
  imageUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');
  renderPreviewImage();
  document.addEventListener('keydown', onClickEsc);
  resetScale();
};

imageInput.addEventListener('change', (evt) => {
  evt.preventDefault();
  showModal();
});


const closeImageInput = () => {
  imageUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onClickEsc);
  imageUploadForm.reset();
};

imageUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (validateForm()) {
    closeImageInput();
  }
});


imgUploadCancelButton.addEventListener('click', () => {
  closeImageInput();
});

function onClickEsc(evt) {
  const isFocusedInput = evt.target.classList.contains('text__hashtags') || evt.target.classList.contains('text__description');
  if (isFocusedInput) {
    return false;
  }
  if(isEscKey(evt)) {
    evt.preventDefault();
    closeImageInput();
  }
}
