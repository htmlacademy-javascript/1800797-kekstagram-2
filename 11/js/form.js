import { resetScale } from './scale.js';
import { isEscKey } from './utlis.js';
import { resetValidation, validateForm } from './validation.js';
import { resetEffects } from './slider.js';
import { postPhoto } from './api.js';
import { showPopup} from './popups.js';
import { Popups } from './constants.js';

const imageUploadForm = document.querySelector('.img-upload__form');
const imageInput = document.querySelector('.img-upload__input');
const imageUpload = document.querySelector('.img-upload__overlay');
const imagePreview = imageUpload.querySelector('.img-upload__preview img');
const imagePreviewEffects = imageUpload.querySelectorAll('.effects__preview');
const imgUploadCancelButton = document.querySelector('.img-upload__cancel');
const submitButton = document.querySelector('.img-upload__submit');

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
  resetValidation();
  resetScale();
  resetEffects();
};

const disableSubmitButton = (isDisabled = true) => {
  submitButton.textContent = isDisabled ? 'Публикую...' : 'Опубликовать';
  submitButton.disabled = isDisabled;
};

imageUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (validateForm()) {
    disableSubmitButton();
    postPhoto(new FormData(evt.target))
      .then((responce) => {
        if (responce.ok) {
          showPopup(Popups.SUCCESS);
          closeImageInput();
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        showPopup(Popups.ERROR);
      })
      .finally(() => {
        disableSubmitButton(false);
      });
  }
});

imgUploadCancelButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeImageInput();
});

function onClickEsc(evt) {
  const isFocusedInput = evt.target.classList.contains('text__hashtags') || evt.target.classList.contains('text__description');
  if (isFocusedInput || document.querySelector('.error')) {
    return false;
  }
  if (isEscKey(evt)) {
    evt.preventDefault();
    closeImageInput();
  }
}
