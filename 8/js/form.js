import { isEscKey } from './utlis.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const imageInput = document.querySelector('.img-upload__input');
const imageUpload = document.querySelector('.img-upload__overlay');
const imagePreview = imageUpload.querySelector('.img-upload__preview img');
const imagePreviewEffects = imageUpload.querySelectorAll('.effects__preview');
const imgUploadCancelButton = document.querySelector('.img-upload__cancel');


// const pristine = new Pristine(imgUploadForm, {
//   classTo: 'form__item',
//   errorClass: 'form__item--invalid',
//   successClass: 'form__item--valid',
//   errorTextParent: 'form__item',
//   errorTextTag: 'span',
//   errorTextClass: 'form__error'
// });

// imgUploadForm.addEventListener()

const renderPreviewImage = () => {
  const fileImage = imageInput.files[0];
  imagePreview.src = URL.createObjectURL(fileImage);
  imagePreviewEffects.forEach((icon) => {
    icon.style.backgroundImage = `url("${URL.createObjectURL(fileImage)}")`;
    console.log(icon);
  });
};

const showModal = () => {
  imageUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');
  renderPreviewImage();
  document.addEventListener('keydown', onClickEsc);
};

imageInput.addEventListener('change', (evt) => {
  evt.preventDefault();
  showModal();
});


const closeImgInput = () => {
  imageUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onClickEsc);
  imgUploadForm.reset();
};

imgUploadCancelButton.addEventListener('click', () => {
  closeImgInput();
});

function onClickEsc(evt) {
  if(isEscKey(evt)) {
    evt.preventDefault();
    closeImgInput();
  }
}
